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
| Authorized supply / minting | Issuer | Issuer, via ASL-provided controlled-ASA infrastructure | ASL infrastructure executes mint actions **only** under issuer-held keys/authority; ASL cannot mint unilaterally | Assumption | This is the crux of "least-privilege" (D-0010) — mechanism for issuer-held authority not yet designed (SEC-003, Critical, Open). |
| Compliant transfer execution | Issuer (sets the rule) | ASL smart-contract layer (enforces the rule) | ASL executes/rejects transfers per issuer-defined policy | Assumption | This is the one place ASL performs a consequential action directly — makes contract correctness a Critical dependency (SEC-002). |
| Wallet freeze | Issuer (legal authority to order it) | ASL infrastructure (technical mechanism), only under issuer instruction | ASL provides the freeze primitive; does not decide when to use it | Assumption | Who is liable for a wrongful freeze, and what recourse a holder has, is an open legal question. |
| Clawback (forced transfer/seizure) | Issuer (only when legally required, e.g. court order) | ASL infrastructure (technical mechanism), only under issuer instruction | Same as freeze — primitive only | Assumption | Clawback is the highest-risk primitive in the system; key-management design for this does not exist yet (SEC-003). |
| Redemption | Issuer | Issuer, via ASL redemption workflow/API | ASL provides the request/workflow plumbing; issuer approves and settles | Assumption | Settlement (moving real money/assets back to holder) is explicitly Issuer's, never ASL's. |
| Dividends / corporate actions (decision & funding) | Issuer | Issuer | ASL provides distribution tooling (given issuer-authorized amounts) | Assumption | ASL "corporate-action distribution" in the product thesis means mechanics, not authorization to declare a dividend. |
| Regulatory reporting (to regulators) | Issuer | Issuer | ASL can supply audit events / transaction history as an input | Assumption | Whether ASL's audit trail is *sufficient* for an issuer's reporting obligations is unconfirmed — needs issuer input. |
| Indexing & reconciliation | ASL | ASL | Core ASL function | Assumption | Lowest-risk function in the table — pure infrastructure, no asset authority implied. |
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
- **Whether any of the above division of labor survives contact with a real issuer's**
  own compliance/legal team** — this table is ASL's opening position for interviews, not
  a validated fact. See [assumptions-register.md](assumptions-register.md).

## Change log

- 2026-07-19 — Initial draft, seeded from the authority model in CLAUDE.md/D-0010 and the
  MVP slice in ROADMAP.md. No issuer or counsel input yet.
