# Issuer / Provider Interview Script

Status: **script only — zero interviews conducted.** Use this for any conversation with
an issuer, broker, custodian, tokenization provider, or compliance provider from
[`target-shortlist.md`](target-shortlist.md) or any other contact. Log every use in
[`evidence-log.md`](evidence-log.md), even a non-response.

## Ground rules

- **Do not pitch ASL first.** Open with discovery. Only describe ASL if the subject
  asks what we're building, and even then keep it to one or two sentences before
  returning to questions.
- **Non-leading.** Do not ask "would you want a common interface across issuers?" as an
  opener — that primes the answer. Ask about their actual current workflow first and
  let the gap (or its absence) surface on its own.
- **Distinguish "interesting" from "would pay for" from "would switch infrastructure
  for."** General enthusiasm is not evidence (per CLAUDE.md).
- **Every answer gets attributed and dated** in the evidence log, tied back to the
  specific assumption row(s) it informs (A-001, A-002a, A-003, A-004, A-005).
- **No promises.** Do not imply partnership, pricing, timeline, or technical capability
  ASL does not currently have (no working product exists yet).

## Section 1 — Current state (no mention of ASL)

1. Walk me through how you currently issue/administer a tokenized asset end-to-end,
   from the decision to issue through distribution to a holder. Who touches which part?
2. Which parts of that workflow are custom-built by your team, and which are
   outsourced/vendored?
3. What does compliance enforcement (KYC/KYB, sanctions screening, eligibility) look
   like in practice today — real-time on-chain, off-chain gatekeeping, or a mix?
4. How do you currently handle a required freeze or clawback? Who has to approve it,
   and how long does it take end-to-end?
5. How do corporate actions (dividends, redemptions, other distributions) get executed
   today? What breaks or gets manual when volume/complexity increases?
6. If you support more than one chain, or have considered it: what did adding a new
   chain actually cost you — engineering time, compliance re-review, ongoing
   maintenance?
7. Where do things go wrong or get expensive in this stack today? (Let them name the
   pain point rather than suggesting one.)

## Section 2 — Integration cost and build-vs-buy (tests A-001)

8. If a third party offered infrastructure for the pieces you just described, what
   would you actually still need to build or control yourselves, and why?
9. Have you evaluated any third-party tokenization/compliance infrastructure vendors?
   What made you build in-house instead, or what would make you switch?
10. If you operate on more than one chain today, or plan to: is the integration cost
    per chain mostly one-time, or does it recur (ongoing maintenance, compliance
    re-review, monitoring)?

## Section 3 — Chain choice (tests A-004)

11. Have you evaluated Algorand specifically? What factored into that (cost, finality,
    throughput, compliance-relevant ASA features, ecosystem, something else)?
12. If you're not currently live on Algorand: what would have to be true for you to
    consider it?
13. If you are live on Algorand: what's kept you there, and has anything made you
    reconsider?

## Section 4 — Regulatory responsibility split (tests A-003, A-005)

14. In your current model, who legally holds final authority for issuance,
    eligibility policy, freeze, and clawback — and is any of that delegated to
    infrastructure/software that isn't your own legal entity?
15. If a technical vendor's software executed transfer-restriction logic you defined
    (without the vendor deciding the rules), does that change your compliance/legal
    exposure, or your vendor's? Has counsel weighed in on that distinction?
16. What would make you *not* trust a third-party enforcement layer with that role,
    even if it never held custody or signing keys?

## Section 5 — Developer-side distribution (tests A-002b, cross-checks issuer view)

17. Do developers/apps outside your own team currently integrate with your issued
    assets? If so, how did that integration happen — direct partnership, open API,
    something else?
18. If you wanted more third-party apps building against your issued assets, what's
    stopping that today?

## Section 6 — Close (only if the subject asks about ASL)

19. [Only if asked] One or two sentences: ASL is exploring least-privilege
    infrastructure so issuers keep final authority while developers get one consistent
    interface across issuers — still validating whether that's needed. What's your gut
    reaction?
20. Would you be open to a follow-up conversation as this develops? (Do not ask for a
    commitment beyond a future conversation — no design-partner ask in this script.)

## Continue / pivot / stop evidence — tied to assumptions

Record verbatim or closely paraphrased answers in `evidence-log.md`, then evaluate
against these triggers (copied from `docs/assumptions-register.md` — do not restate
looser criteria here):

- **A-001** — *Continue* if the subject names a specific cross-provider capability
  (not mere convenience) they'd still want from a third party even after building
  in-house. *Pivot* if only single-issuer conveniences are named. *Stop* if they'd
  rather build everything or already have a gap-free in-house equivalent.
- **A-002a** — *Continue* if this is a credible design-partner-level signal (not just
  polite interest). *Pivot* if interest exists only for a narrower wedge. *Stop* if
  they won't engage or don't see the problem as painful.
- **A-003 / A-005** — *Continue* only if a qualified source (ideally counsel, but a
  compliance officer's informal view is directional) indicates the enforce-but-don't-
  decide split is performable for **real production**, not just mock/TestNet. *Pivot*
  if a specific capability (e.g., freeze) must move fully to the issuer. *Stop* if no
  legal party can perform the model as designed.
- **A-004** — *Continue* if they confirm Algorand is a live/plausible option and name
  concrete reasons (cost, throughput, ASA compliance features). *Pivot* if demand is
  real but chain-agnostic. *Stop* if they won't consider Algorand regardless of what
  ASL builds.

A single interview is one data point, not a verdict. Do not mark any assumption-register
row `Supported` from one conversation — the register requires a named source and
should accumulate evidence across multiple interviews before a status change.
