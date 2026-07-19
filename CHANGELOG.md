# Changelog

All notable changes to ASL are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project is pre-release
(Phase 0); versions are not yet tagged.

## [Unreleased]

### Added
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

### Changed
- ASL GitHub repository set to **private** (was public on creation).
- `CLAUDE.md`, `PROJECT_STATUS.md`, `ROADMAP.md`, and `RISKS.md` now bind the security
  process: read the audit log each session, register new entry points, log findings, run
  `npm run check`, and clear the applicable release gate before any release.
- `ROADMAP.md`: added a **Later / Parking Lot** section so distant features stay out of the
  active roadmap; separated hard guardrails from parked hypotheses.

### Notes
- No product, smart-contract, or business-validation deliverables yet. Phase 0.
- **Release gates fail by design:** open Critical/High findings block `gate:security` and
  `gate:mainnet`. ASL is not secure or production-ready. Only builder Pass 1 was performed.
- Budget: $0 spent of $300.
