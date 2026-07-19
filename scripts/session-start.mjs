#!/usr/bin/env node
// session:start — print the startup checklist and current repo/git state.
// Dependency-free (Node >= 20). Read-only: this script never mutates the repo.

import { readFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

function git(args) {
  try {
    return execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "(git unavailable)";
  }
}

function firstMatch(file, regex) {
  const p = join(ROOT, file);
  if (!existsSync(p)) return null;
  const m = readFileSync(p, "utf8").match(regex);
  return m ? m[1].trim() : null;
}

const phase = firstMatch("PROJECT_STATUS.md", /##\s*Phase\s*\n+([^\n]+)/i);
const active = firstMatch("PROJECT_STATUS.md", /##\s*Active task\s*\n+([^\n]+)/i);

console.log("=".repeat(64));
console.log("ASL — session:start");
console.log("=".repeat(64));
console.log(`Phase        : ${phase ?? "unknown (read PROJECT_STATUS.md)"}`);
console.log(`Active task  : ${active ?? "unknown (read ROADMAP.md)"}`);
console.log("");
console.log("Git");
console.log(`  branch     : ${git(["rev-parse", "--abbrev-ref", "HEAD"])}`);
console.log(`  last commit: ${git(["log", "-1", "--oneline"])}`);
const status = git(["status", "--porcelain"]);
console.log(`  working dir: ${status ? status.split("\n").length + " change(s)" : "clean"}`);
console.log("");
console.log("Required reading this session:");
for (const f of [
  "CLAUDE.md",
  "README.md",
  "PROJECT_STATUS.md",
  "ROADMAP.md",
  "DECISIONS.md",
  "RISKS.md",
  "CHANGELOG.md",
]) {
  console.log(`  ${existsSync(join(ROOT, f)) ? "[x]" : "[ ]"} ${f}`);
}
console.log("");
console.log("Guardrails: mock only · no MainNet · no customer money · $300 budget.");
console.log("Next: run `npm run audit:project`, then produce the preflight report.");
console.log("=".repeat(64));
