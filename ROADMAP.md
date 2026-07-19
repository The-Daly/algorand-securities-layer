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
1. Merge PR #1 (this bootstrap + security OS).
2. **One timeboxed session** — responsibility matrix + critical assumptions register.
3. **Then switch to external evidence** — issuer interview script, a scored shortlist of
   5–10 target issuers/providers, and an outreach plan. Not a multi-session binder.

### 0.0 Repository & security foundation
- [~] `bootstrap-repo` — governance docs, `package.json` scripts, `docs/` index, **security
  operating system** (SECURITY.md, SECURITY_AUDIT_LOG.md, review playbook, and the
  `audit:security` / `gate:security` / `gate:mainnet` automation) _(PR #1)_

**Standing security requirement (every task, not a one-off):** register new entry points in
the attack-surface registry, log all findings, run `npm run check`, and clear the applicable
release gate before any mock/TestNet or future MainNet release. Releases require the
three-pass review, and the same chat/person cannot claim more than one pass.

### 0.1 Business validation deliverables
- [ ] Company / customer / problem / **wedge** definition
- [ ] Issuer / ASL / developer **responsibility matrix**
- [ ] **Critical assumptions register** (each assumption: test + owner + status)
- [ ] Regulatory activity & **legal-question map** (questions for counsel, not answers)
- [ ] **Competitor analysis** (direct issuer integrations; Solana/Ethereum/other platforms)
- [ ] Ideal **issuer** and **developer** customer profiles (ICP)
- [ ] Issuer **interview script + scorecard**
- [ ] **Design-partner proposal**
- [ ] Developer **use cases ranked by urgency**
- [ ] **Pricing / revenue hypotheses**
- [ ] Basic **costs & unit economics**
- [ ] **$300 validation budget** plan
- [ ] **Go-to-market** strategy
- [ ] Issuer & developer **outreach plan**
- [ ] **Traction metrics** definition
- [ ] **Stage gates, pivot triggers, kill criteria**

### 0.2 Technical Phase 0 deliverables (before any production contracts)
- [ ] Responsibility matrix _(shared with 0.1)_
- [ ] Critical assumptions register _(shared with 0.1)_
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
