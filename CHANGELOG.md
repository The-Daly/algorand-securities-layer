# Changelog

All notable changes to ASL are documented here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/). This project is pre-release
(Phase 0); versions are not yet tagged.

## [Unreleased]

### Added
- **External-validation package** (`claude/external-validation-round1`):
  - `docs/business/target-shortlist.md` — issuer/provider targets and developer/
    application prospects, each with material claims labeled Primary or Secondary
    source, verified 2026-07-19, scored, and ranked, split into actionable outreach
    candidates (Sections A/B) vs. competitive/historical/base-rate references that are
    explicitly not outreach targets (Section C). Includes an explicit "why ASL might be
    redundant" analysis per candidate and two competitive-reference-only entries
    (Securitize, Tokeny) that do not currently
    support Algorand.
  - `docs/business/issuer-interview.md` — non-leading issuer/provider discovery script
    covering current workflows, integration cost, chain choice, and the authority-model
    split, with continue/pivot/stop criteria tied to A-001, A-002a, A-003, A-004, A-005.
  - `docs/business/developer-interview.md` — non-leading developer/application
    discovery script validating A-002b independently of issuer-side evidence, with an
    explicit instruction that general RWA enthusiasm is not evidence.
  - `docs/business/outreach-plan.md` — public-channel-only outreach plan; Batch 1
    tests both sides of demand in parallel (two developer/application messages, two
    issuer/provider messages), draft messages, follow-up schedule, and an explicit
    statement that nothing is sent without per-message founder approval.
  - `docs/business/evidence-log.md` — evidence-log scaffold with tightened evidence-
    strength definitions (a non-response or an agreed call is Weak/Medium, not Strong);
    every target begins `Not contacted` (desk research is explicitly not logged as
    demand evidence).

### Research-quality correction (2026-07-19, same PR)

- `docs/business/target-shortlist.md`: added explicit Primary/Secondary source
  labeling throughout and removed the inaccurate "all entries use current primary
  sources" claim; corrected Quantoz Payments' chain support from "Algorand only" to
  "Algorand, Ethereum, Polygon, XRPL, Xahau, Stellar" per Quantoz's own official site,
  raising its score 10→12/15 and its rank from 2 to 1 (strongest available A-001 test
  case, not just A-003/A-005); corrected Midas's Signal score down (8→6/15, dropping
  it from the top three) because a single reported launch-day transaction was being
  read as sustained trading-volume evidence; corrected CompX Labs' RWA-integration
  claim down (11→9/15) because the two-issuer-integration claim rests on a coin-data
  aggregator, not CompX's own documentation as checked; moved Republic to a new
  Section C (historical/Unverified — no current primary source confirms active
  Algorand deployment) instead of treating its original 2021-era launch announcement
  as current status; restructured the document into Section A (actionable
  issuer/provider candidates), Section B (actionable developer/application prospects),
  and Section C (competitive/historical/base-rate references, explicitly not outreach
  targets — abrdn, Securitize, Tokeny, Republic, Pera Wallet); removed "confirmed
  absence" language for Securitize/Tokeny's lack of Algorand support (corrected to
  "absence of evidence in sources checked"); recategorized Pera Wallet out of the
  developer-demand ranking into Section C as a distribution/ecosystem stakeholder, and
  replaced it in the top three with Tinyman as the strongest available *application*
  (not wallet) target for compliant-transfer demand-validation.
- `docs/business/outreach-plan.md`: removed the arbitrary 2-sends/week cap and the
  Wave 1 (developer) → Wave 2 (issuer) serialization; A-002a and A-002b are now tested
  in parallel from Batch 1 (Folks Finance, CompX Labs, Quantoz Payments, Archax — two
  per side, individually sent, each requiring separate founder approval).
- `docs/business/evidence-log.md`: tightened Strength definitions — a non-response is
  now explicitly Weak evidence about the channel/message, not evidence the market
  doesn't want ASL; agreeing to a call is Medium, not Strong; Strong now requires
  something with real cost/commitment behind it (concrete integration pain with
  numbers, shared internal workflow detail, sandbox/API access, a decision-maker
  referral, stated design-partner/pilot interest, or an agreed technical follow-up).
  Target list and assumption mappings updated to match the corrected shortlist and
  Batch 1 outreach plan.
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
- `RISKS.md`: R-0005 (process/source-of-truth) and R-0009 (divergent parallel repo
  state) marked **Closed** — PR #1 restored the source-of-truth process and `main` is
  the single authoritative record; the founder-supplied archive is optional reference
  material only. R-0002 mitigation now explicitly requires issuer-side and
  developer-side demand to be tested and evidenced separately. R-0008 now states the
  Markdown release gate is a **procedural** control, partially enforced through CI/
  branch protection, not a cryptographically tamper-proof one.
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
