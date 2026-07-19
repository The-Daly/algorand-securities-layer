import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const gateArgument = process.argv.indexOf("--release-gate");
const releaseGate = gateArgument !== -1;
const releaseTarget = releaseGate ? (process.argv[gateArgument + 1] ?? "testnet").toLowerCase() : null;
const targetRanks = { "phase1": 1, "contract": 2, "testnet": 3, "mainnet": 4 };
const logPath = path.join(root, "SECURITY_AUDIT_LOG.md");
const errors = [];

if (!fs.existsSync(logPath)) {
  console.error("ERROR: SECURITY_AUDIT_LOG.md is missing");
  process.exit(1);
}

const log = fs.readFileSync(logPath, "utf8");
const findingLines = log.split("\n").filter((line) => /^\| SEC-\d{3} \|/.test(line));
const reviewLines = log.split("\n").filter((line) => /^\| REV-\d{3} \|/.test(line));
const seen = new Set();
const findings = findingLines.map((line) => {
  const cells = line.split("|").slice(1, -1).map((cell) => cell.trim());
  const [id, firstSeen, scope, severity, finding, owner, targetGate, status, evidence] = cells;
  if (seen.has(id)) errors.push(`${id}: duplicate finding ID`);
  seen.add(id);
  if ([id, firstSeen, scope, severity, finding, owner, targetGate, status, evidence].some((value) => !value)) {
    errors.push(`${id || "unknown finding"}: one or more required fields are empty`);
  }
  if (!["Critical", "High", "Medium", "Low", "Info"].includes(severity)) {
    errors.push(`${id}: invalid severity ${severity}`);
  }
  let target;
  if (/phase 1/i.test(targetGate)) target = "phase1";
  else if (/contract/i.test(targetGate)) target = "contract";
  else if (/testnet/i.test(targetGate)) target = "testnet";
  else if (/mainnet|real asset/i.test(targetGate)) target = "mainnet";
  else errors.push(`${id}: unrecognized target gate ${targetGate}`);
  return { id, severity, status, target };
});

if (findings.length === 0) errors.push("No security findings are recorded");
if (reviewLines.length === 0) errors.push("No triple-review history is recorded");

const unresolved = findings.filter((finding) => !["Closed", "Accepted by decision"].includes(finding.status));
const highImpact = unresolved.filter((finding) => ["Critical", "High"].includes(finding.severity));
if (releaseGate && !targetRanks[releaseTarget]) {
  errors.push(`Unknown release target ${releaseTarget}; use phase1, contract, testnet, or mainnet`);
}
const releaseBlocking = releaseGate && targetRanks[releaseTarget]
  ? highImpact.filter((finding) => targetRanks[finding.target] <= targetRanks[releaseTarget])
  : highImpact;
const latestReview = reviewLines.at(-1)?.split("|").slice(1, -1).map((cell) => cell.trim());
const latestResult = latestReview?.[7];

console.log(`ASL security status: ${findings.length} finding(s), ${unresolved.length} unresolved, ${highImpact.length} Critical/High`);
if (releaseGate) console.log(`Release target: ${releaseTarget} (${releaseBlocking.length} applicable blocker(s))`);
for (const finding of releaseBlocking) {
  console.warn(`BLOCKER: ${finding.id} (${finding.severity}) - ${finding.status}`);
}

if (releaseGate && latestResult !== "Passed") {
  errors.push(`Latest triple review result is ${latestResult ?? "missing"}, not Passed`);
}
if (releaseGate && releaseBlocking.length > 0) {
  errors.push(`${releaseBlocking.length} Critical/High finding(s) block release`);
}

if (errors.length > 0) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  console.error(`${releaseGate ? "Security release gate" : "Security audit"} failed.`);
  process.exitCode = 1;
} else if (releaseGate) {
  console.log("Security release gate passed for the reviewed commit.");
} else {
  console.log("Security log structure passed. Unresolved findings remain visible above.");
}
