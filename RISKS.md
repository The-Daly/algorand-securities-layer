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
| R-0008 | **Unresolved security findings** — 7 open Critical/High in `SECURITY_AUDIT_LOG.md` (GitHub protections, threat model/invariants, key custody, supply chain, professional-audit funding, anti-scam, incident response) block the mock/TestNet and MainNet release gates. | High | High | Drive each finding to Closed via the three-pass review before its target gate; `gate:security` / `gate:mainnet` enforce this automatically. | Founder + tech lead | Open |
| R-0009 | **Divergent parallel repo state** — a second, more-built version of ASL exists outside this branch (founder-supplied archive with extra docs/CI/templates). Risk of confusion, conflicting decisions, or lost work if efforts fork. | Med | Med | Consolidate on `main` via PR #1; harvest remaining useful archive files as explicit follow-up tasks; treat GitHub `main` as the single source of truth. | Founder + cofounder | Open |

> **Security-specific risks** are tracked in detail (with owner, target gate, and retest
> evidence) in [`SECURITY_AUDIT_LOG.md`](SECURITY_AUDIT_LOG.md). R-0008 is the summary pointer.

## Watch list

- Regulatory changes affecting tokenized RWAs in target jurisdictions.
- Competitors (Solana/Ethereum RWA platforms, issuer-native SDKs) closing the wedge.
