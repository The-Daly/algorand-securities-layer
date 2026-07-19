# ASL Security Audit Log

Last reviewed: 2026-07-19

This is the append-only security record for ASL. It records reviews, findings, remediation, retests, and release decisions. Never delete a closed finding; add evidence and change its status so the history remains auditable.

## Status legend

- **Open:** confirmed or credible issue without a completed mitigation.
- **Mitigating:** remediation is in progress.
- **Ready for retest:** remediation exists but has not passed an independent retest.
- **Closed:** remediation was retested and evidence is linked.
- **Accepted by decision:** a non-Critical residual risk was explicitly accepted in `DECISIONS.md` with an owner and expiration.

Critical findings can never be accepted by decision. High findings cannot be accepted for MainNet or real-asset operation.

## Triple-review rule

Every security-sensitive release commit must pass all three reviews:

1. **Builder review:** threat model, invariants, entry points, trust boundaries, and checklist reviewed by the implementer.
2. **Adversarial review:** a separate reviewer or isolated review context attempts bypasses, privilege escalation, replay, supply corruption, data leakage, and abuse cases.
3. **Release review:** automated checks plus an accountable human review the exact release commit and verify remediation evidence. MainNet and real assets require an independent professional audit in this pass.

The same person or chat context cannot claim all three passes. Evidence must name the commit and commands, tests, or report used.

## Review history

| Review | Date | Commit/ref | Scope | Pass 1 | Pass 2 | Pass 3 | Result | Evidence and notes |
|---|---|---|---|---|---|---|---|---|
| REV-001 | 2026-07-19 | `claude/bootstrap-repo` (PR #1) | Repository operating system + security baseline: governance docs, security policy, audit log, review playbook, and dependency-free audit/gate automation | Complete | Pending | Pending | Blocked | **Builder self-review only.** `npm run check` passes (structural); `npm run gate:security` and `npm run gate:mainnet` fail as designed. No application or contract code exists yet. Pass 2 (adversarial) and Pass 3 (release) NOT performed — see triple-review rule; the same chat cannot claim all three passes. |
| REV-002 | 2026-07-19 | `claude/bootstrap-repo` (PR #1) | Pre-merge hardening: `project-audit` CI (Node 22, `contents: read`, pinned Action SHAs), `.github/CODEOWNERS`, `main`-protection spec, SEC-008 mitigation path | Complete | Pending | Pending | Blocked | **Builder self-review only.** `npm run check` passes; `project-audit` CI passes on `38b7116`; CODEOWNERS added. **Branch protection blocked** (private free-plan repo, 403) — documented, not enforced. Release gates still fail by design; SEC-008 stays Open. Pass 2/3 NOT performed. |
| REV-003 | 2026-07-19 | `claude/bootstrap-repo` (PR #1) | Repo made public (D-0013); `main` branch protection + free security features enabled and API-confirmed; visibility reconciled across docs | Complete | Pending | Pending | Blocked | **Builder self-review only.** Verified no secrets/keys/PII/confidential material committed. `main` protected: PR-only, required `project-audit` check + strict, `enforce_admins` on, no force-push/deletion, linear history (approvals=0, CODEOWNER advisory — solo account). Secret scanning + push protection, Dependabot alerts, private vulnerability reporting enabled. SEC-001/SEC-008 → Mitigating. Release gates still fail by design. Pass 2/3 NOT performed. |

## Findings register

| ID | First seen | Scope | Severity | Finding | Owner | Target gate | Status | Evidence / retest |
|---|---|---|---|---|---|---|---|---|
| SEC-001 | 2026-07-19 | Repository | High | Branch protection on `main`, required PR reviews and status checks, secret scanning / push protection, and least-privilege Actions permissions are not configured or verified. | Founder | Before Phase 1 | Mitigating | Repo now public (D-0013). **Enabled & API-confirmed:** `main` protection (PR-only, required `project-audit` check + strict up-to-date, `enforce_admins` on, no force-push/deletion, linear history), secret scanning + push protection, Dependabot alerts, private vulnerability reporting; workflow uses `contents: read`. **Residual:** required approval + CODEOWNER review deferred (solo account, see SEC-001 remediation 2026-07-19). |
| SEC-002 | 2026-07-19 | Architecture | Critical | The technical threat model and formal controller invariants are not complete. | Technical lead | Before contract implementation | Open | Phase 0 roadmap tasks remain unchecked. |
| SEC-003 | 2026-07-19 | Administrative keys | Critical | Key custody, separation, rotation, emergency pause, recovery, and migration are not designed. | Issuer/security owners | Before contract implementation | Open | Phase 0 key-management task remains unchecked. |
| SEC-004 | 2026-07-19 | Supply chain | High | Dependency pinning, vulnerability scanning, static analysis, and artifact provenance are not configured because the application workspace does not exist. | Technical lead | Phase 1 exit | Open | Add checks with the AlgoKit workspace. |
| SEC-005 | 2026-07-19 | Production assurance | Critical | The $300 budget cannot fund a credible professional contract audit. | Founder | Before MainNet or real assets | Open | Production remains explicitly out of scope; obtain grant, issuer, or investment funding before production audit. |
| SEC-006 | 2026-07-19 | Fraud and impersonation | High | No official domain, signed release process, verified contract registry, or anti-impersonation communication plan exists. | Founder | Before public TestNet campaign | Open | Never publish deposit addresses or real-asset claims during the mock MVP. |
| SEC-007 | 2026-07-19 | Incident response | High | Security contacts, severity ownership, containment procedure, and disclosure process are not staffed or tested. | Founder | Before public TestNet | Open | Private GitHub reporting path is documented; full response drill is pending. |
| SEC-008 | 2026-07-19 | Release automation | Medium | The release gate reads a plain-text "Result" cell and finding statuses from Markdown; nothing cryptographically binds a "Passed"/"Closed" claim to the reviewed commit or to distinct reviewers, so the gate can be bypassed by editing text. | Technical lead | Before Phase 1 | Mitigating | Builder self-review (REV-001) observation. Accepted as a **procedural** control for now (do not over-engineer custom attestations). REV-003: repo made public (D-0013); `main` protection now **enforced** with `project-audit` as a **required** check bound to the reviewed commit, `enforce_admins` on, no force-push, linear history. **Residual (stays unresolved):** the "Result/Closed" cells are still plain text (no cryptographic binding); required approval + CODEOWNER review are deferred (solo account); an independent Pass 2/3 has not been performed. |

## Remediation and retest entries

Add entries using this format; never overwrite the original finding text.

### SEC-NNN remediation YYYY-MM-DD

- **Change:**
- **Branch and commit:**
- **Tests or evidence:**
- **Retest reviewer:**
- **Retest result:**
- **Residual risk:**
- **New status:**

### SEC-001 remediation 2026-07-19

- **Change:** Repo made public (D-0013); enabled and API-confirmed `main` branch protection (PR-only, required `project-audit` check + strict up-to-date, `enforce_admins` on, no force-push/deletion, linear history), plus secret scanning + push protection, Dependabot alerts, and private vulnerability reporting. Workflow runs with `contents: read`.
- **Branch and commit:** `claude/bootstrap-repo` (this reconciliation commit).
- **Tests or evidence:** `gh api .../branches/main/protection` returns the settings above; `gh api .../branches/main` → `protected: true`; `security_and_analysis` shows secret scanning + push protection enabled.
- **Retest reviewer:** None yet — builder self-review only (independent Pass 2/3 outstanding).
- **Residual risk:** Required approval and required CODEOWNER review are deferred because of the solo-account limitation (PR #1 is authored by `The-Daly`, which cannot approve its own PR). Enable one required approval + required CODEOWNER review when a second trusted GitHub reviewer is added.
- **New status:** Mitigating (not Closed).

## Release decision record

No release has passed the triple-review gate. `npm run gate:security` gates the mock/TestNet release, while `npm run gate:mainnet` also includes production-only findings. Both are expected to fail while applicable Critical and High findings remain open.
