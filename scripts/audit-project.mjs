#!/usr/bin/env node
// audit:project — verify the repo's governance skeleton is present and well-formed,
// and scan tracked files for obvious secret leaks. Dependency-free (Node >= 20).
// Exit code is non-zero if any ERROR is found (warnings do not fail the build).

import { readFileSync, existsSync, statSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [];
const ok = [];

const REQUIRED = [
  "README.md",
  "CLAUDE.md",
  "PROJECT_STATUS.md",
  "ROADMAP.md",
  "DECISIONS.md",
  "RISKS.md",
  "CHANGELOG.md",
  "SECURITY.md",
  "SECURITY_AUDIT_LOG.md",
  "package.json",
  ".gitignore",
  "docs/README.md",
  "docs/SECURITY_REVIEW_PLAYBOOK.md",
  "docs/CLAUDE_MASTER_PROMPT.md",
  "scripts/session-start.mjs",
  "scripts/audit-project.mjs",
  "scripts/security-audit.mjs",
];

// 1) Required files present
for (const f of REQUIRED) {
  if (existsSync(join(ROOT, f))) ok.push(`present: ${f}`);
  else errors.push(`missing required file: ${f}`);
}

// 2) package.json parses and exposes the two scripts
try {
  const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
  for (const s of ["session:start", "audit:project"]) {
    if (pkg.scripts?.[s]) ok.push(`script defined: ${s}`);
    else errors.push(`package.json missing script: ${s}`);
  }
} catch (e) {
  errors.push(`package.json does not parse: ${e.message}`);
}

// 3) Secret scan over tracked files (low-false-positive markers only)
const SECRET_PATTERNS = [
  [/-----BEGIN [A-Z ]*PRIVATE KEY-----/, "PEM private key"],
  [/\b(gh[pousr]_[A-Za-z0-9]{20,})\b/, "GitHub token"],
  [/\bAKIA[0-9A-Z]{16}\b/, "AWS access key id"],
  [/\bsk-[A-Za-z0-9]{20,}\b/, "OpenAI-style secret key"],
  [/(^|[^A-Za-z])MNEMONIC\s*[=:]/m, "mnemonic assignment"],
];
let tracked = [];
try {
  tracked = execFileSync("git", ["ls-files"], { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean);
} catch {
  warnings.push("could not list tracked files (git unavailable) — secret scan skipped");
}
for (const rel of tracked) {
  const p = join(ROOT, rel);
  if (!existsSync(p) || statSync(p).size > 512 * 1024) continue;
  let text;
  try {
    text = readFileSync(p, "utf8");
  } catch {
    continue; // binary / unreadable
  }
  for (const [re, label] of SECRET_PATTERNS) {
    if (re.test(text)) errors.push(`possible secret (${label}) in ${rel}`);
  }
}

// 4) Report
const line = "-".repeat(64);
console.log(line);
console.log("ASL — audit:project");
console.log(line);
console.log(`OK       : ${ok.length}`);
for (const w of warnings) console.log(`WARN     : ${w}`);
for (const e of errors) console.log(`ERROR    : ${e}`);
console.log(line);
if (errors.length) {
  console.log(`RESULT   : FAIL (${errors.length} error(s))`);
  process.exit(1);
} else {
  console.log(`RESULT   : PASS${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
}
