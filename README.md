# Algorand Securities Layer (ASL)

> **ASL is the ship that carries regulated cargo. It is not the regulated cargo.**

ASL aims to become the common infrastructure and developer layer for **compliant
tokenized real-world assets on Algorand** — least-privilege ASA controls, issuer
adapters, compliance-policy orchestration, indexing/reconciliation, audit events,
APIs/SDKs, and (eventually) authorized liquidity integrations.

Developers should be able to build against **one consistent interface** instead of
learning every issuer's internal systems — without ASL pretending every issuer has
identical legal or technical capabilities.

---

## ⚠️ Status & hard guardrails

**Phase:** 0 (validation + design). **Nothing here is production software.**

- ❌ No real securities. **Mock assets only** (starting with `mAAPL`).
- ❌ No customer money. No MainNet deploys. No production bridges or real-money liquidity.
- ✅ LocalNet first, TestNet second.
- ✅ Never represent a real asset without **written issuer authorization and appropriate legal review**.
- ℹ️ Nothing in this repository is legal or investment advice. Regulatory notes exist to
  generate questions for **qualified counsel**, not to answer them.
- 🔓 The repository is **public** (D-0013). **Repository visibility is not a security
  boundary** — no secrets, keys, private issuer material, PII, or confidential legal
  documents are committed. `main` is branch-protected; see [`docs/BRANCH_PROTECTION.md`](docs/BRANCH_PROTECTION.md).

Self-funded budget: **$300 total.** No single item over $25 without the founder's approval;
planned cumulative spend over $75 needs approval and a decision record (D-0011).

---

## Repository map

| File | Purpose |
| --- | --- |
| [`CLAUDE.md`](CLAUDE.md) | Operating manual / cofounder brief — **source of truth** for how work is run. |
| [`PROJECT_STATUS.md`](PROJECT_STATUS.md) | Current phase, active task, last completed work, budget. |
| [`ROADMAP.md`](ROADMAP.md) | Phased task list, Phase 0 deliverables, MVP slice, explicit non-goals. |
| [`DECISIONS.md`](DECISIONS.md) | Decision log (what we chose and why). |
| [`RISKS.md`](RISKS.md) | Risk register. |
| [`CHANGELOG.md`](CHANGELOG.md) | Human-readable change history. |
| [`SECURITY.md`](SECURITY.md) | Security policy + private vulnerability reporting. |
| [`SECURITY_AUDIT_LOG.md`](SECURITY_AUDIT_LOG.md) | Append-only review & findings register (authoritative security record). |
| [`docs/`](docs/README.md) | Phase 0 deliverables, security review playbook, master prompt. |
| [`scripts/`](scripts/) | Dependency-free `session:start`, audit, and release-gate scripts. |

## Working in this repo

```bash
npm run session:start   # print startup checklist + repo/git state
npm run check           # project + security-log structural audits (run this every session)
npm run audit:project   # structural governance-file audit only
npm run audit:security  # security-log structural audit only
npm run gate:security   # mock/TestNet release gate — FAILS while Critical/High findings are open
npm run gate:mainnet    # production release gate — additionally requires an independent audit
```

All scripts are dependency-free Node (>=20). There is nothing to `npm install` yet.
The release gates are **expected to fail** right now — see [`SECURITY_AUDIT_LOG.md`](SECURITY_AUDIT_LOG.md).

## How work is done

Every change: one roadmap task → a `claude/<task-name>` branch → smallest coherent
change → evidence/tests/docs → self red-team → update the tracking docs → PR into `main`.
No force-pushes, no rewriting shared history, no marking work "done" without evidence
in the repo. See [`CLAUDE.md`](CLAUDE.md) for the full process.

## The MVP we are aiming at (and deliberately NOT exceeding)

A single mock vertical slice:

> MockIssuer authorization → verified wallet → `mAAPL` distribution → compliant transfer
> → rejected non-compliant transfer → wallet freeze → redemption → mock dividend →
> indexer reconciliation.

We are **not** building an exchange, bridge, launchpad, oracle network, wallet, or
multi-chain platform.
