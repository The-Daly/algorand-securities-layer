# Critical Assumptions Register

Status: **draft — Phase 0 validation artifact.** Seeded from [RISKS.md](../RISKS.md)
R-0001–R-0004 plus assumptions exposed while drafting
[responsibility-matrix.md](responsibility-matrix.md). Each row is something we are
currently *acting as if true* without evidence. Update `Status` and `Evidence to date`
as interviews/tests happen — do not delete rows, add evidence and change status
(same append-only discipline as `SECURITY_AUDIT_LOG.md`).

Status values: `Untested` · `Testing` · `Supported` · `Contradicted` · `Killed`.

---

## A-001 — ASL has a durable moat beyond thin middleware

- **Assumption:** Cross-provider compliance orchestration, reconciliation trust, and a
  network of issuer adapters are hard enough to replicate that ASL is not disintermediated
  once one issuer builds its own SDK.
- **Why load-bearing:** If false, ASL is a replaceable API wrapper — the entire business
  thesis (README: "one consistent interface") collapses. This is R-0001, rated High/High.
- **Cheapest test:** Ask 3–5 target issuers directly: "If you built this yourself in-house,
  what would you still need from a third party?" Also do the competitor analysis
  (Solana/Ethereum RWA platforms, issuer-native SDKs) already on the roadmap (0.1) —
  cheapest version is desk research, $0.
- **Owner:** Founder.
- **Evidence to date:** None. No interviews run, no competitor analysis written.
- **Status:** Untested.
- **Continue if:** ≥2 independent issuers name a specific cross-provider capability
  (not just "convenience") they'd still want from a third party.
- **Pivot if:** Issuers only value single-issuer conveniences (e.g., better docs) —
  narrow to a services/consulting wedge instead of a platform.
- **Stop if:** Every issuer interviewed says they'd rather build or already has an
  in-house equivalent with no gap ASL fills.

## A-002a — Issuer/provider-side demand exists on Algorand specifically

- **Assumption:** There are real regulated issuers/providers who want this, not just a
  founder hypothesis.
- **Why load-bearing:** Zero confirmed issuers today (R-0002, High/High). Without issuer
  demand there is no one to build the ASL side of the responsibility matrix for.
- **Cheapest test:** Issuer interview script + outreach (planned next: `business/issuer-interview.md`,
  `business/target-shortlist.md`, `business/outreach-plan.md`). Cost: founder time only.
- **Owner:** Founder.
- **Evidence to date:** None. No outreach sent.
- **Status:** Untested.
- **Continue if:** ≥1 issuer/provider gives a credible design-partner signal (ROADMAP
  milestone gate "After 0.1").
- **Pivot if:** Interest exists but only for a narrower wedge than the full platform.
- **Stop if:** No issuer/provider will engage, or the problem described isn't actually
  painful to them.
- **Correction note (2026-07-19):** split out of the original combined A-002. One
  interested issuer does not validate developer demand (A-002b) — the two sides must be
  tested and evidenced independently; neither substitutes for the other.

## A-002b — Developer/application-side demand exists independent of issuer demand

- **Assumption:** There are real developers who would build against ASL's interface if
  it existed, independent of whether any specific issuer has signed on yet.
- **Why load-bearing:** Zero confirmed developers today (R-0002, High/High). ASL's thesis
  requires *both* sides — an issuer with no developers building on top has no reason to
  pay for infrastructure, and developer enthusiasm with no issuer means there is nothing
  to integrate against. Neither side alone validates the business.
- **Cheapest test:** A separate developer/application prospect list and non-leading
  interview script (planned next session), run independently of the issuer outreach —
  do not treat issuer conversations as a proxy for developer interest or vice versa.
- **Owner:** Founder.
- **Evidence to date:** None. No developer outreach run.
- **Status:** Untested.
- **Continue if:** ≥1 developer/application team (distinct from any issuer contact)
  describes a concrete integration they'd build against a multi-issuer interface, with a
  specific use case — not just general interest in "tokenized RWAs."
- **Pivot if:** Developer interest exists only for a single-issuer integration (i.e., they
  want an SDK for one specific token, not a multi-issuer abstraction) — undercuts the
  cross-provider thesis (A-001) even if issuer demand is confirmed.
- **Stop if:** No developer/application team can articulate a reason to build against ASL
  rather than integrating an issuer's own SDK directly.

## A-003 — The authority model is legally performable by some real counterparty

- **Assumption:** A regulated issuer/provider can legally hold final authority (issuance,
  freeze, clawback, redemption) while ASL operates only a least-privilege enforcement
  layer, without ASL itself needing a license it doesn't have (transfer agent, MSB, etc.).
- **Why load-bearing:** If no legal party can actually operate this split, the core
  product design (D-0010, "ship not cargo") is unbuildable as conceived. This is R-0003,
  Med/High, and the crux of the [responsibility-matrix.md](responsibility-matrix.md) —
  every row there is Assumption-confidence pending this.
- **Cheapest test:** The legal-question map (roadmap 0.1, not yet written) turned into
  actual questions put to qualified counsel — even an initial informal read from one
  securities/fintech lawyer before spending on a formal opinion.
- **Owner:** Founder + counsel (no counsel engaged yet).
- **Evidence to date:** None. Open questions listed in DECISIONS.md but not yet posed
  to anyone qualified to answer them.
- **Status:** Untested.
- **Continue if:** A qualified source indicates the split is performable **for the
  contemplated real production deployment with a regulated issuer** — not merely that it
  is unobjectionable in mock/TestNet form. Mock/TestNet operation requires no license
  from anyone and its legality proves nothing about the real operating model; passing
  mock/TestNet review must not be read as validating A-003.
- **Pivot if:** The split is performable only if a capability currently assigned to ASL
  (e.g., operating the freeze mechanism) moves fully to the issuer's own systems.
- **Stop if:** No legal party can perform the model as designed for real production use —
  this is the "Stop" condition already named in ROADMAP's milestone gate table (after
  0.2).

## A-004 — Algorand is the right chain for this specific demand

- **Assumption:** RWA issuer/developer gravity for this kind of infrastructure exists on
  Algorand and not primarily on Ethereum/Solana/elsewhere, i.e. building here isn't fighting
  the market's actual center of gravity.
- **Why load-bearing:** R-0004, Med/High. D-0001/D-0002 commit to Algorand-first and
  one-chain-at-a-time — a reasonable focusing bet, but chain choice itself is unvalidated,
  not a fact.
- **Cheapest test:** Explicitly ask in every issuer interview whether they've evaluated
  Algorand vs. other chains and why/why not; scan for existing Algorand RWA issuers
  (Meld, Lofty, Republic Note, etc.) already live as a base rate check. $0.
- **Owner:** Founder.
- **Evidence to date:** None gathered yet in this repo (some Algorand RWA activity is
  publicly known to exist, e.g. real-estate tokenization projects, but we have not
  logged or verified any of it here — do not cite it as evidence until sourced).
- **Status:** Untested.
- **Continue if:** Interview subjects confirm Algorand is a live or plausible option for
  them (cost, throughput, ASA compliance features cited as reasons).
- **Pivot if:** Demand is real but chain-agnostic — reinforces keeping the control plane
  chain-neutral (already D-0001) and revisit chain priority later.
- **Stop if:** No issuer/provider in the target segment will consider Algorand regardless
  of what ASL builds.

## A-005 — "Enforces but does not decide" is a legally coherent division for the transfer function

- **Assumption:** ASL can execute compliant-transfer logic and reject non-compliant
  transfers directly (the one place in the responsibility matrix where ASL performs a
  consequential action, not just tooling) without that execution role itself creating
  issuer-like liability for ASL.
- **Why load-bearing:** This is the single highest-stakes row in the responsibility
  matrix — it's ASL's core value proposition (compliance orchestration) and its biggest
  point of legal exposure at the same time. Distinct from A-003 (whole-model viability)
  because this asks specifically about the transfer-execution role, not custody/clawback.
- **Cheapest test:** Fold into the same legal-question map / counsel conversation as A-003,
  but as a named, separate question — do not let it get absorbed into the general authority
  question.
- **Owner:** Founder + counsel.
- **Evidence to date:** None.
- **Status:** Untested.
- **Continue if:** Counsel indicates executing issuer-defined transfer rules (without
  authoring the rules) does not itself require a license **in the contemplated real
  production deployment with a regulated issuer** — a mock/TestNet build requires no
  such license from anyone and does not test this assumption.
- **Pivot if:** It's performable only with additional disclaimers/contracts between ASL
  and each issuer (e.g., an explicit processor/vendor agreement) — narrows go-to-market
  but survives. **Also pivot if** the transfer controller and/or transaction-submission
  infrastructure (the hosted relayer question flagged in
  [responsibility-matrix.md](responsibility-matrix.md)) must be operated by the issuer or
  a separately licensed operator rather than by ASL — this would still let ASL supply the
  software/template while removing ASL from the operational/regulated-action path.
- **Stop if:** Counsel indicates this role alone requires a license ASL cannot obtain
  within the validation budget/timeline, and no operator-shifts-to-issuer pivot resolves it.

---

## Register hygiene

- Every row above is currently `Untested` — this is expected at the start of Phase 0
  external validation, not a finding to fix today.
- Do not mark any row `Supported` without a named source (interview subject, named
  counsel, dated document) in `Evidence to date`.
- When `business/evidence-log.md` exists (planned next), cross-link individual
  interview/rejection entries back to the assumption row(s) they inform.
