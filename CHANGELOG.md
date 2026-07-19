# Changelog

All notable changes to ASL are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project is pre-release
(Phase 0); versions are not yet tagged.

## [Unreleased]

### Added
- `docs/responsibility-matrix.md` — issuer / ASL / developer authority & responsibility
  matrix (who owns/performs legal issuance, KYC/KYB, sanctions screening, minting,
  compliant transfer, freeze, clawback, redemption, corporate actions, reporting, vs.
  ASL's least-privilege technical role). Every row is an unconfirmed design assumption;
  open legal/authority questions are called out explicitly, not answered.
- `docs/assumptions-register.md` — critical assumptions register (A-001…A-005), seeded
  from `RISKS.md` R-0001–R-0004: moat/replaceable-wrapper risk, two-sided demand,
  legal/authority-model viability, Algorand-specific demand, and the transfer-execution
  legal question surfaced while drafting the responsibility matrix. Each row: why it's
  load-bearing, cheapest test, owner, evidence to date, status, continue/pivot/stop
  triggers. All rows currently `Untested`.
- Repository operating skeleton: `README.md`, `CLAUDE.md` (operating manual /
  source of truth), `PROJECT_STATUS.md`, `ROADMAP.md`, `DECISIONS.md`, `RISKS.md`,
  `CHANGELOG.md`.
- `package.json` with dependency-free `session:start` and `audit:project` scripts.
- `docs/README.md` index of Phase 0 business + technical deliverables.
- `.gitignore` with secret/key exclusions.
- **Security operating system:** `SECURITY.md` (policy + private reporting),
  `SECURITY_AUDIT_LOG.md` (append-only review/findings register, 8 initial findings —
  7 Critical/High plus a Medium gate-integrity note), and
  `docs/SECURITY_REVIEW_PLAYBOOK.md` (attack-surface registry, threat
  actors, three-pass review procedure, contract invariants, anti-scam & incident response).
- Dependency-free `scripts/security-audit.mjs` powering `audit:security`, `gate:security`
  (mock/TestNet), and `gate:mainnet`; added `check` = `audit:project` + `audit:security`.
- `docs/CLAUDE_MASTER_PROMPT.md` (canonical business-partner prompt, with repo URL) and
  `docs/NEW_CHAT_PROMPT.md` (short continuation prompt) — reused from the founder archive.
- **Pre-merge hardening:** `.github/workflows/project-audit.yml` (runs `npm run check` on
  PRs and pushes to `main`; Node 22; `permissions: contents: read`; Actions pinned to full
  commit SHAs; no paid services or installs), `.github/CODEOWNERS` (`@The-Daly` on
  security-sensitive files), and `docs/BRANCH_PROTECTION.md` (required `main` settings).

### Changed
- `ROADMAP.md`: marked `bootstrap-repo` and `pre-merge-hardening` (0.0) and the
  responsibility matrix / assumptions register (0.1/0.2, shared items) **done**, with
  evidence links, now that PR #1 is confirmed merged (`870e6a7`).
- `PROJECT_STATUS.md`: active task moved from `bootstrap-repo` (merged) to
  `business-validation-round1`; next-three-actions updated to point at the external-
  evidence package.
- `docs/README.md`: responsibility matrix and assumptions register marked `done`.
- ASL GitHub repository visibility: public on creation → **private** (D-0007) → **public**
  by founder decision (**D-0013**, supersedes D-0007). **Repository visibility is not a
  security boundary**; no secrets/keys/PII/confidential material are committed (verified).
- **`main` branch protection ENABLED and API-confirmed** (free once public): PR-only,
  required `project-audit` check + strict, `enforce_admins` on, conversation resolution,
  no force-push/deletion, linear history. Approvals set to 0 and CODEOWNER review left
  advisory due to the solo-account limitation (raise both when a second reviewer joins).
- Enabled free public-repo security: secret scanning + push protection, Dependabot alerts +
  automated security fixes, private vulnerability reporting (dependency graph on by default).
- `DECISIONS.md`: D-0011 spending thresholds; D-0012 branch protection (now **enforced**);
  D-0013 repo public; D-0007 marked superseded; D-0009 rationale updated for public repo.
- `SECURITY_AUDIT_LOG.md`: SEC-001 and SEC-008 → **Mitigating** with residual; REV-003 added.
- `CLAUDE.md`, `PROJECT_STATUS.md`, `ROADMAP.md`, and `RISKS.md` bind the security process:
  read the audit log each session, register new entry points, log findings, run
  `npm run check`, and clear the applicable release gate before any release.
- `ROADMAP.md`: added a **Later / Parking Lot** section; separated hard guardrails from
  parked hypotheses; added tracked `harvest-archive` and `require-approval` tasks.

### Notes
- No product, smart-contract, or business-validation deliverables yet. Phase 0.
- **Release gates fail by design:** open Critical/High findings block `gate:security` and
  `gate:mainnet`. ASL is not secure or production-ready. Only builder Pass 1 was performed.
- Budget: $0 spent of $300.
