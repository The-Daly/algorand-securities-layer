# ROADMAP

Tasks are checked only when **evidence exists in the repository**. Each active task
gets its own `claude/<task-name>` branch and PR.

Legend: `[ ]` not started · `[~]` in progress / in review · `[x]` done (evidence linked)

---

## Phase 0 — Validation & design (current)

**Gate to leave Phase 0:** the business-validation deliverables below give a defensible
"why ASL should exist," AND the technical Phase 0 deliverables are complete, AND we have
at least one credible signal of issuer/developer demand. Until then, no production contracts.

**Near-term sequence (next 2–3 sessions, agreed):**
1. ~~Merge PR #1 (this bootstrap + security OS).~~ Done — merged as `870e6a7`.
2. ~~**One timeboxed session** — responsibility matrix + critical assumptions register.~~
   Done — `docs/responsibility-matrix.md`, `docs/assumptions-register.md`.
3. ~~Switch to external evidence — issuer interview script, developer interview
   script, a scored shortlist of 5–10 target issuers/providers plus ≥5 developer
   prospects, and an outreach plan.~~ Package drafted —
   `docs/business/target-shortlist.md`, `docs/business/issuer-interview.md`,
   `docs/business/developer-interview.md`, `docs/business/outreach-plan.md`,
   `docs/business/evidence-log.md`. **Desk research only — zero outreach sent, zero
   interviews conducted.** A-002a/A-002b remain `Untested`. Next: founder approves
   Wave 1 outreach messages one at a time.

### 0.0 Repository & security foundation
- [x] `bootstrap-repo` — governance docs, `package.json` scripts, `docs/` index, **security
  operating system** (SECURITY.md, SECURITY_AUDIT_LOG.md, review playbook, and the
  `audit:security` / `gate:security` / `gate:mainnet` automation) _(merged via PR #1,
  commit `870e6a7`)_
- [x] `pre-merge-hardening` — `project-audit` CI (Node 22, least-privilege, pinned Action
  SHAs), `.github/CODEOWNERS`, SEC-008 mitigation path, and **enforced `main` branch
  protection** (API-confirmed, free once the repo went public — D-0013) _(merged via PR #1,
  commit `870e6a7`)_
- [ ] `require-approval` — once a second trusted GitHub reviewer exists, raise required
  approvals to 1 and turn on required CODEOWNER review (deferred now because the sole account
  cannot approve its own PR). Closes the SEC-001/SEC-008 residual.
- [ ] `harvest-archive` — port the files intentionally excluded from PR #1 from the
  founder-supplied archive, **each on its own small branch/PR** (NOT part of the bootstrap PR):
  `docs/ARCHITECTURE.md`, `docs/PRODUCT_BOUNDARIES.md`, `docs/MVP_ACCEPTANCE.md`, `AGENTS.md`,
  and `.github/ISSUE_TEMPLATE/` + `.github/PULL_REQUEST_TEMPLATE.md`. Tracked so they cannot
  be lost; sequence after the external-evidence package unless a phase gate needs one sooner.

**Standing security requirement (every task, not a one-off):** register new entry points in
the attack-surface registry, log all findings, run `npm run check`, and clear the applicable
release gate before any mock/TestNet or future MainNet release. Releases require the
three-pass review, and the same chat/person cannot claim more than one pass.

### 0.1 Business validation deliverables
- [ ] Company / customer / problem / **wedge** definition
- [x] Issuer / ASL / developer **responsibility matrix** — `docs/responsibility-matrix.md`
- [x] **Critical assumptions register** (each assumption: test + owner + status) —
  `docs/assumptions-register.md`, seeded from R-0001–R-0004
- [ ] Regulatory activity & **legal-question map** (questions for counsel, not answers)
- [ ] **Competitor analysis** (direct issuer integrations; Solana/Ethereum/other platforms)
- [ ] Ideal **issuer** and **developer** customer profiles (ICP)
- [~] Issuer **interview script + scorecard** — script done, `docs/business/issuer-interview.md`; no scorecard yet, no interviews conducted
- [~] Developer **interview script** (validates A-002b independently) — `docs/business/developer-interview.md`; no interviews conducted
- [~] **Target shortlist** (5–10 issuer/provider targets + ≥5 developer prospects, scored, ranked, sourced) — `docs/business/target-shortlist.md`; desk research only, zero contact made — see `docs/business/evidence-log.md`
- [ ] **Design-partner proposal**
- [ ] Developer **use cases ranked by urgency**
- [ ] **Pricing / revenue hypotheses**
- [ ] Basic **costs & unit economics**
- [ ] **$300 validation budget** plan
- [ ] **Go-to-market** strategy
- [~] Issuer & developer **outreach plan** — `docs/business/outreach-plan.md`; nothing sent, requires founder approval per-message
- [~] **Evidence log** scaffolded — `docs/business/evidence-log.md`; every target currently `Not contacted`
- [ ] **Traction metrics** definition
- [ ] **Stage gates, pivot triggers, kill criteria**

### 0.2 Technical Phase 0 deliverables (before any production contracts)
- [x] Responsibility matrix _(shared with 0.1)_
- [x] Critical assumptions register _(shared with 0.1)_
- [ ] Regulatory activity risk map _(shared with 0.1)_
- [ ] Technical **threat model**
- [ ] **Instrument domain model**
- [ ] **Canonical asset identifiers**
- [ ] **Provider capability schema** (issuers differ — do not assume parity)
- [ ] **Compliance credential model**
- [ ] **Key management & recovery model**
- [ ] **API & webhook outline**
- [ ] **Audit-event taxonomy**
- [ ] **Testable mock vertical-slice specification**
- [ ] Security & production-readiness requirements

## Phase 1 — Mock vertical slice (MVP)

Build only after Phase 0 gate. LocalNet → TestNet. Mock assets only (`mAAPL`).

- [ ] MockIssuer authorization
- [ ] Verified wallet (mock KYC credential)
- [ ] `mAAPL` distribution
- [ ] Compliant transfer (accepted)
- [ ] Non-compliant transfer (rejected)
- [ ] Wallet freeze
- [ ] Redemption
- [ ] Mock dividend / corporate action
- [ ] Indexer reconciliation

## Hard guardrails (never, in this phase)

No real securities · no customer money · no MainNet deploy · no production bridge or
real-money liquidity. These are not "later" items — they are out of scope until issuer
authorization, qualified legal review, and an independent professional audit exist.

## Later / Parking Lot (post-validation hypotheses — NOT scheduled)

Kept out of the active roadmap deliberately. Each may become real **only** after the
relevant milestone gate, with evidence and a `DECISIONS.md` record — not before:

- Authorized liquidity integrations / market-making
- Bridges / cross-chain messaging
- A second chain (e.g. Solana) once the control plane proves chain-neutral
- Analytics product, dashboards, reporting suite
- Consumer wallet / end-user application
- Corporate-action distribution at scale (beyond the mock-dividend slice)
- Launchpad / self-serve issuance onboarding
- Oracle / price-feed network
- Fundraising or grant package (only after the underlying evidence exists)

Anything here that touches real assets or money additionally requires issuer authorization,
legal review, and a professional security audit.

---

### Milestone gates

| Gate | Continue if… | Pivot/narrow if… | Stop if… |
| --- | --- | --- | --- |
| After 0.1 | ≥1 issuer/provider shows credible interest & a real problem ASL solves better than direct integration | Interest exists but only for a narrower wedge | No issuer/provider will engage; problem is not painful |
| After 0.2 | Design is buildable at least-privilege without an unperformable legal/custody role | A capability must move to the issuer/provider | The authority model requires something no legal party can perform |
| After Phase 1 | Mock slice works end-to-end and a design partner wants a TestNet pilot | Slice works but no one wants a pilot | Slice cannot be made compliant even in mock form |
