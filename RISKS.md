# RISKS

Likelihood × Impact each rated Low / Med / High. Review every session; update status as
evidence arrives. Owner = who must act.

| ID | Risk | Likelihood | Impact | Mitigation / test | Owner | Status |
| --- | --- | --- | --- | --- | --- | --- |
| R-0001 | **ASL is a replaceable API wrapper** — thin middleware over 1–2 issuers, no moat, disintermediated when an issuer ships its own SDK. | High | High | Design for cross-provider value from day one; identify a durable advantage (network of adapters, compliance orchestration, reconciliation trust). Competitor analysis (0.1). | Founder | Open |
| R-0002 | **Unvalidated two-sided demand** — zero confirmed issuers and zero confirmed developers asking for this on Algorand. | High | High | Issuer interview script + outreach; get ≥1 credible design-partner signal before building contracts. | Founder | Open |
| R-0003 | **Legal/authority-model viability** — no counterparty can legally perform custody/freeze/clawback/reporting in partnership with an unlicensed infra layer; or mock work drifts toward implying real securities. | Med | High | Legal-question map for counsel; strict mock-only guardrails; written authorization before any real-asset representation. | Founder + counsel | Open |
| R-0004 | **Algorand-specific demand is itself an assumption** — RWA issuer/developer gravity may be on other chains. | Med | High | Test Algorand demand explicitly in interviews; keep control plane chain-neutral (D-0001). | Founder | Open |
| R-0005 | **Process risk: source of truth was empty** — operating model ("read the repo each session") could not function. | High → Low | Med | Bootstrap skeleton (this PR) creates the governance docs. Closes once merged. | Cofounder | Mitigating |
| R-0006 | **Key management / custody security** — any handling of keys or freeze authority is a high-value attack surface. | Med | High | Threat model + key-management model (0.2) before any contract; least-privilege by design. | Founder | Open |
| R-0007 | **Solo builder + $300 budget** — limited capacity to build infra AND validate a two-sided market. | High | Med | Ruthless scope control; evidence before code; kill/pivot gates in ROADMAP. | Founder | Open |

## Watch list

- Regulatory changes affecting tokenized RWAs in target jurisdictions.
- Competitors (Solana/Ethereum RWA platforms, issuer-native SDKs) closing the wedge.
