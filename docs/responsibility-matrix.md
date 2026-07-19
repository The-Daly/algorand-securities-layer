# Responsibility Matrix — Issuer / ASL / Developer

Status: **draft — Phase 0 design artifact, not implemented, not legally reviewed.**

This matrix states who is *intended* to hold authority and perform each function under
the ASL authority model (D-0010, Proposed). It is a design position, not a legal
determination — see the open counsel questions in [DECISIONS.md](../DECISIONS.md) and
[RISKS.md](../RISKS.md) R-0003. Nothing here has been confirmed by a regulated issuer,
a custodian, or qualified counsel. Every row not marked "Confirmed" is an **assumption**.

## How to read this table

- **Owns** = holds legal/final authority and accountability for the function.
- **Performs** = does the mechanical/technical work, under the owner's authority.
- **Confidence:** `Assumption` (our design position, unconfirmed) · `Confirmed` (verified
  with a named counterparty or qualified counsel — none yet) · `Unknown` (we have not
  even formed a position).

| Function | Owns | Performs | ASL's technical role (if any) | Confidence | Notes / open question |
| --- | --- | --- | --- | --- | --- |
| Underlying asset purchase & custody | Issuer / regulated custodian | Issuer / custodian | None | Assumption | ASL never touches the underlying asset or customer money (hard guardrail). |
| Legal issuance (decision to issue, terms) | Issuer | Issuer | ASL provides ASA creation tooling/templates only | Assumption | "Provides tooling" vs. "performs issuance" is a real line we have not tested with a lawyer. |
| KYC / KYB (identity verification) | Issuer or issuer's KYC provider | Issuer / third-party KYC vendor | ASL consumes a compliance credential/attestation issued by the provider; does not run KYC itself | Assumption | Who issues the on-chain credential ASL reads, and under what liability, is unconfirmed. |
| Sanctions & geo-restriction screening | Issuer / compliance provider | Issuer / compliance provider | ASL's compliance-policy layer enforces the *result* (allow/deny) as encoded by the issuer, not the screening itself | Assumption | Real-time sanctions-list currency (OFAC updates, etc.) is Issuer's problem, not ASL's — unconfirmed whether that division is legally sound. |
| ASA creation & total-supply authorization | Issuer | Issuer, via ASL-provided ASA-creation tooling | ASL tooling helps the issuer create the ASA with its authorized total supply; a standard ASA's total supply is fixed at creation, not later minted | Assumption | Correction (2026-07-19): earlier drafts described post-creation "mint actions," which misstates the standard ASA model. Expandable/reissuable supply is a different instrument/versioning design and remains an **open architecture question**, not something assumed to exist. |
| Reserve custody | Issuer / regulated custodian | Issuer / custodian, holding the reserve account/wallet | None — ASL does not hold or custody the reserve | Assumption | Reserve is where authorized total supply sits before distribution; ASL never has custody (hard guardrail). |
| Issuer-authorized distribution from reserve | Issuer | Issuer, via ASL-provided distribution tooling | ASL tooling helps move units from reserve to a verified holder **only** under issuer-held signing authority | Assumption | This is the crux of "least-privilege" (D-0010) — mechanism for issuer-held signing authority not yet designed (SEC-003, Critical, Open). |
| Redemption back to reserve (or other designed accounting treatment) | Issuer | Issuer, via ASL redemption workflow/API | ASL provides the request/workflow plumbing; issuer approves, and the accounting treatment (return-to-reserve vs. another design) is itself unresolved | Assumption | Distinct from "Redemption" below, which covers off-chain settlement — this row is specifically about the on-chain unit's disposition. Accounting treatment is an open architecture question. |
| Compliant transfer execution | Issuer / authorized compliance administrator (defines policy) | On-chain controller software (deterministic evaluation & execution) | ASL develops the controller software, templates, APIs, and monitoring; the ASL company does not itself decide or initiate individual transfers | Assumption | Correction (2026-07-19): "ASL executes transfers" conflated the ASL company with the deterministic on-chain software it authors. See also A-005 in the assumptions register — who operates/submits transactions for that software is unresolved. |
| Wallet freeze | Issuer / authorized compliance administrator (legal authority to order it) | Issuer-authorized signer initiates; on-chain controller software evaluates & executes | ASL develops the freeze primitive; the ASL legal entity does not hold production issuer keys or independently initiate a freeze by default | Assumption | Who is liable for a wrongful freeze, and what recourse a holder has, is an open legal question. Whether ASL operates a hosted relayer/transaction-submission path is a separate, **unresolved operating/legal decision** — not assumed. |
| Clawback (issuer-authorized forced transfer) | Issuer / authorized compliance administrator | Issuer-authorized signer initiates; on-chain controller software evaluates & executes | Same as freeze — ASL develops the primitive, does not hold keys or initiate by default | Assumption | Correction (2026-07-19): earlier drafts implied clawback only under court order — too narrow. Clawback is issuer-authorized action under applicable law, instrument terms, and documented policy; the specific triggering conditions are a counsel question, not assumed here. Highest-risk primitive in the system; key-management design does not exist yet (SEC-003). |
| Redemption | Issuer | Issuer, via ASL redemption workflow/API | ASL provides the request/workflow plumbing; issuer approves and settles | Assumption | Settlement (moving real money/assets back to holder) is explicitly Issuer's, never ASL's. |
| Dividends / corporate actions (decision & funding) | Issuer | Issuer | ASL provides distribution tooling (given issuer-authorized amounts) | Assumption | ASL "corporate-action distribution" in the product thesis means mechanics, not authorization to declare a dividend. |
| Regulatory reporting (to regulators) | Issuer | Issuer | ASL can supply audit events / transaction history as an input | Assumption | Whether ASL's audit trail is *sufficient* for an issuer's reporting obligations is unconfirmed — needs issuer input. |
| Indexing & reconciliation | Issuer / authorized transfer agent owns acceptance of the official legal holder record and regulatory books | ASL operates the indexer and supplies reconciliation evidence | ASL indexes on-chain state and surfaces discrepancies; ASL's index does not automatically become the legally authoritative register | Assumption | Correction (2026-07-19): earlier draft assigned "Owns" to ASL, implying ASL's index is the legal record. ASL provides evidence; the issuer/transfer agent decides what is legally authoritative. |
| Audit events / event log | ASL | ASL | Core ASL function | Assumption | Same as above. |
| Wallet software / developer tooling / SDKs | ASL (as a tool provider) | Developer (end use), ASL (build/maintain) | Core ASL function | Assumption | ASL is explicitly not a consumer wallet product (ROADMAP "Later" list). |
| Compliance-policy encoding/orchestration | Issuer (defines policy) | ASL (encodes & orchestrates) | Core ASL function | Assumption | This is ASL's proposed differentiator vs. a plain ASA — also its biggest unproven-value risk (R-0001). |
| App / business logic / UI | Developer | Developer | None | Assumption | Developers cannot override a regulated asset's transfer/compliance rules (hard constraint, CLAUDE.md). |
| Choice of issuer/policy integrated | Developer | Developer | ASL exposes multiple issuers through one interface | Assumption | Multi-issuer neutrality is core to the "not a wrapper" argument — untested with any real second issuer. |
| Authorized liquidity / market-making | Not in scope | Not in scope | None | N/A | Explicitly parked (ROADMAP "Later / Parking Lot") — no authority position taken. |

## What is genuinely unknown (not just unconfirmed-by-us)

- **Which entity is legally permitted to hold clawback/freeze *keys*** even if it never
  exercises them without issuer instruction — this may itself require a license ASL does
  not have. Flagged in DECISIONS.md open questions; not answered here.
- **Whether "infrastructure that enforces but does not decide" is a real legal category**
  in relevant jurisdictions, or whether operating the enforcement mechanism itself creates
  transfer-agent-like exposure. Counsel question, not a design question.
- **Whether ASL-hosted relayers or ASL-operated transaction submission are acceptable at
  all** — recorded here as an unresolved operating/legal decision, not an assumed ASL
  responsibility. The default working position is that the ASL legal entity does not hold
  production issuer keys or independently initiate regulated actions, but who actually
  submits transactions to the network (issuer-run infrastructure vs. an ASL-operated
  relayer) has not been decided.
- **Whether an expandable/reissuable supply model is ever needed**, and if so what
  instrument/versioning design that requires — out of scope for the current fixed-supply
  ASA model and not assumed to be solved.
- **Whether any of the above division of labor survives contact with a real issuer's**
  own compliance/legal team** — this table is ASL's opening position for interviews, not
  a validated fact. See [assumptions-register.md](assumptions-register.md).

## Change log

- 2026-07-19 — Initial draft, seeded from the authority model in CLAUDE.md/D-0010 and the
  MVP slice in ROADMAP.md. No issuer or counsel input yet.
- 2026-07-19 — Correction pass (founder review of PR #2): fixed the ASA supply model
  (fixed-at-creation, not later "minted"; reserve custody and distribution/redemption
  accounting made explicit); separated ASL-the-company from the on-chain controller
  software it authors for transfer/freeze/clawback; corrected indexing/reconciliation
  ownership (issuer/transfer agent owns the legal record, ASL supplies evidence); removed
  the overly narrow "court order only" framing for clawback.
