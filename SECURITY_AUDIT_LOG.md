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

## Findings register

| ID | First seen | Scope | Severity | Finding | Owner | Target gate | Status | Evidence / retest |
|---|---|---|---|---|---|---|---|---|
| SEC-001 | 2026-07-19 | Repository | High | Branch protection on `main`, required PR reviews and status checks, secret scanning / push protection, and least-privilege Actions permissions are not configured or verified. | Founder | Before Phase 1 | Open | Repo is private (D-0007) and reachable via `gh`; no protective GitHub settings are enforced yet. |
| SEC-002 | 2026-07-19 | Architecture | Critical | The technical threat model and formal controller invariants are not complete. | Technical lead | Before contract implementation | Open | Phase 0 roadmap tasks remain unchecked. |
| SEC-003 | 2026-07-19 | Administrative keys | Critical | Key custody, separation, rotation, emergency pause, recovery, and migration are not designed. | Issuer/security owners | Before contract implementation | Open | Phase 0 key-management task remains unchecked. |
| SEC-004 | 2026-07-19 | Supply chain | High | Dependency pinning, vulnerability scanning, static analysis, and artifact provenance are not configured because the application workspace does not exist. | Technical lead | Phase 1 exit | Open | Add checks with the AlgoKit workspace. |
| SEC-005 | 2026-07-19 | Production assurance | Critical | The $300 budget cannot fund a credible professional contract audit. | Founder | Before MainNet or real assets | Open | Production remains explicitly out of scope; obtain grant, issuer, or investment funding before production audit. |
| SEC-006 | 2026-07-19 | Fraud and impersonation | High | No official domain, signed release process, verified contract registry, or anti-impersonation communication plan exists. | Founder | Before public TestNet campaign | Open | Never publish deposit addresses or real-asset claims during the mock MVP. |
| SEC-007 | 2026-07-19 | Incident response | High | Security contacts, severity ownership, containment procedure, and disclosure process are not staffed or tested. | Founder | Before public TestNet | Open | Private GitHub reporting path is documented; full response drill is pending. |
| SEC-008 | 2026-07-19 | Release automation | Medium | The release gate reads a plain-text "Result" cell and finding statuses from Markdown; nothing cryptographically binds a "Passed"/"Closed" claim to the reviewed commit or to distinct reviewers, so the gate can be bypassed by editing text. | Technical lead | Before Phase 1 | Open | Builder self-review (REV-001) observation; mitigated for now only by human three-pass discipline and PR code review. Harden with commit-bound attestations/CI before relying on gates for any release. |

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

## Release decision record

No release has passed the triple-review gate. `npm run gate:security` gates the mock/TestNet release, while `npm run gate:mainnet` also includes production-only findings. Both are expected to fail while applicable Critical and High findings remain open.
