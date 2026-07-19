# PROJECT_STATUS

_Last updated: 2026-07-19_

## Phase

**Phase 0 — validation & design.** No production code. Mock-only. No MainNet.

## Active task

`bootstrap-repo` — establish the repository operating skeleton (this PR). Once merged,
the source-of-truth model (read governance docs each session) becomes functional.

## Last completed work

- **2026-07-19** — Repository created (empty), set to **private**, local clone wired up.
  Skeleton bootstrap in review on branch `claude/bootstrap-repo`.

_(No product, contract, or business-validation deliverables exist yet. Nothing is
marked complete without evidence in the repo.)_

## Thesis snapshot

- **Product (unvalidated):** common infrastructure + developer layer for compliant
  tokenized RWAs on Algorand — the ship, not the cargo.
- **Business (unvalidated):** developers integrate once against a multi-issuer
  abstraction instead of per-issuer; monetize infra/tooling. Primary risk: ASL becomes
  a replaceable API wrapper with no moat.

## Next three actions

1. Merge `claude/bootstrap-repo` so future sessions have a working source of truth.
2. Seed the **critical assumptions register** and **issuer/ASL/developer responsibility
   matrix** (cheapest artifacts that test whether ASL should exist).
3. Draft the **issuer interview script + ideal-customer profile** to gather evidence
   before any smart-contract code.

## Blockers

- None once the skeleton merges. (Before merge: source-of-truth model is non-functional
  because the repo had no files.)

## Budget

| | |
| --- | --- |
| Total | $300 |
| Spent | $0 |
| Remaining | $300 |
