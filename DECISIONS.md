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
| D-0007 | 2026-07-19 | ASL GitHub repo is **private**. | Keep early strategy/assumptions/roadmap private for now. | **Superseded by D-0013** (repo made public 2026-07-19) |
| D-0008 | 2026-07-19 | Bootstrap workflow: one **empty init commit on `main`**; all real work via `claude/*` branches + PR. | `main` needed a base for PRs; preserves branch+review discipline. | Accepted |
| D-0009 | 2026-07-19 | Package license set to **UNLICENSED** for now. | Repo is now public (D-0013); UNLICENSED = all rights reserved (viewable, not licensed for reuse). No OSS grant decided yet. **Open question** — choose a licence before inviting external contributions. | Proposed |
| D-0010 | 2026-07-19 | **Authority model:** ASL is least-privilege; issuer/regulated provider keeps final authority; ASL cannot unilaterally mint/seize/transfer/rewrite real assets. | Core positioning ("ship, not cargo"). | Proposed — challenge if it over-centralizes, harms DX, or is legally unperformable |
| D-0011 | 2026-07-19 | **Spending approval thresholds:** any single expense > $25 needs founder approval; planned cumulative spend > $75 needs founder approval **and** a recorded decision; total self-funded ceiling remains $300. | Founder-ratified; extends D-0006. | Accepted |
| D-0012 | 2026-07-19 | **`main` branch protection ENFORCED** (API-confirmed once D-0013 made the repo public): PR required, required `project-audit` check with strict "up-to-date", `enforce_admins` **on**, conversation resolution required, force-push and deletion blocked, linear history required. Required approvals set to **0** and CODEOWNER review left **advisory** due to the solo-account limitation (PR #1 is authored by `The-Daly`, which cannot approve its own PR). | Make the security OS enforceable — part of the SEC-008 mitigation path. See `docs/BRANCH_PROTECTION.md`. | Accepted / **enforced** |
| D-0013 | 2026-07-19 | ASL GitHub repo is **public** (founder decision), **superseding D-0007**. **Repository visibility is not a security boundary** — no secrets, keys, private issuer material, PII, or confidential legal documents are committed (verified this session). | Enables free branch protection, secret scanning + push protection, Dependabot alerts, and private vulnerability reporting without spending. | Accepted |

## Open questions requiring qualified counsel (not decided here)

- Who can legally perform freeze/clawback/custody in the ASL model, and under what license?
- Does an "infrastructure layer" that never touches assets/money still incur securities,
  MSB, or transfer-agent obligations in relevant jurisdictions?
- What written authorization is required before any mock is described as tracking a real asset?
