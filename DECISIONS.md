# DECISIONS

Append-only decision log. Each entry: what we decided, why, and status. Supersede rather
than delete. `Proposed` decisions are defaults inherited from the founder brief and remain
open to challenge.

| ID | Date | Decision | Rationale | Status |
| --- | --- | --- | --- | --- |
| D-0001 | 2026-07-19 | Build on **Algorand first**; keep the control plane **chain-neutral**. | Focus one chain; preserve optionality (Solana/others later). | Accepted |
| D-0002 | 2026-07-19 | **One chain at a time** — no simultaneous multi-chain build. | Avoid spreading a $300 budget and one builder across chains. | Accepted |
| D-0003 | 2026-07-19 | Stack: **TypeScript + AlgoKit + Algorand TypeScript**. | Founder default; strong Algorand tooling. | Accepted |
| D-0004 | 2026-07-19 | **LocalNet first, TestNet second, no MainNet.** | Phase 0/1 is validation, not production. | Accepted |
| D-0005 | 2026-07-19 | **Mock assets only** (start `mAAPL`); never represent a real asset without written issuer authorization + legal review. | Avoid securities-law exposure during validation. | Accepted |
| D-0006 | 2026-07-19 | Budget **$300 total**; no single item > $25 without founder approval. | Hard self-funded constraint. | Accepted |
| D-0007 | 2026-07-19 | ASL GitHub repo is **private**. | Keep early strategy/assumptions/roadmap private for now. | Accepted |
| D-0008 | 2026-07-19 | Bootstrap workflow: one **empty init commit on `main`**; all real work via `claude/*` branches + PR. | `main` needed a base for PRs; preserves branch+review discipline. | Accepted |
| D-0009 | 2026-07-19 | Package license set to **UNLICENSED** for now. | Repo is private; no OSS grant decided yet. **Open question** — revisit before any public release. | Proposed |
| D-0010 | 2026-07-19 | **Authority model:** ASL is least-privilege; issuer/regulated provider keeps final authority; ASL cannot unilaterally mint/seize/transfer/rewrite real assets. | Core positioning ("ship, not cargo"). | Proposed — challenge if it over-centralizes, harms DX, or is legally unperformable |

## Open questions requiring qualified counsel (not decided here)

- Who can legally perform freeze/clawback/custody in the ASL model, and under what license?
- Does an "infrastructure layer" that never touches assets/money still incur securities,
  MSB, or transfer-agent obligations in relevant jurisdictions?
- What written authorization is required before any mock is described as tracking a real asset?
