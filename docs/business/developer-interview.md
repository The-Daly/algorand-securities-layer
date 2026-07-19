# Developer / Application Interview Script

Status: **script only — zero interviews conducted.** Use this for conversations with
developer/application prospects from [`target-shortlist.md`](target-shortlist.md) (or
any other contact). This script validates **A-002b independently** of issuer-side
conversations — do not treat an issuer's optimism about developers as a substitute for
actually asking developers, and do not treat this as validated by A-002a work.

## Ground rules

- **Do not pitch ASL first.** Discovery before description, same as the issuer script.
- **General excitement about RWAs is not evidence.** If someone says "tokenized
  real-world assets are exciting," that is not a data point — press for a specific,
  nameable integration they would actually build, with a specific issuer/asset type in
  mind.
- **Distinguish "would integrate a specific issuer's SDK" from "wants a multi-issuer
  abstraction."** These are different assumptions (A-002b vs. A-001) and a "yes" to one
  is not a "yes" to the other — see the Pivot condition below, this is a common
  confusion to watch for.
- Log every conversation in [`evidence-log.md`](evidence-log.md), including a
  non-response.

## Section 1 — Current state (no mention of ASL)

1. What are you building on Algorand today, and what problem does it solve for your
   users?
2. Have you integrated any regulated or real-world asset (stablecoin/e-money token,
   tokenized security, tokenized commodity, real estate token, etc.) into your
   product? Which one(s), and how did that integration happen?
3. If yes: walk me through what that integration actually took — whose docs/API did
   you use, how long did it take, what was hardest?
4. If no: what's stopped you from integrating a regulated asset so far — no demand
   from your users, too much compliance complexity, don't know where to start,
   something else?

## Section 2 — What they'd actually build (tests A-002b — press for specificity)

5. If you could integrate any regulated asset today with zero integration cost, which
   asset and which issuer, specifically, would you pick — and what would you build
   with it?
6. Is that interest about one specific issuer's asset, or would you want the same
   capability across multiple issuers' assets through one integration? (Do not lead —
   let them answer before you describe what "multi-issuer" could mean.)
7. What would a regulated-asset integration need to include for you to actually ship
   it — compliance status per holder, transfer-restriction enforcement, audit
   events, something else?

## Section 3 — Integration pain and chain fit

8. For any integration you've done (regulated or not), what's usually the most
   expensive part — the on-chain logic, the compliance/eligibility checking, ongoing
   maintenance as issuer rules change, something else?
9. Have you built or considered building on other chains? If so, how did integrating a
   comparable regulated asset there compare to Algorand?
10. What's your actual custody/compliance concern, if any, about building on top of a
    regulated asset you don't control the rules for? (E.g., liability if you
    mis-enforce a restriction, dependency on an issuer's uptime/behavior.)

## Section 4 — Multi-issuer abstraction, specifically (tests A-001 from the demand side)

11. If two different issuers' regulated assets had completely different integration
    patterns (different APIs, different compliance-check mechanisms), would you
    integrate both anyway, or would you likely pick one and stop?
12. Would a common interface across issuers change what you'd build, or just make an
    integration you'd already do slightly cheaper? (This distinction matters — cheaper
    is not the same as enabling.)

## Section 5 — Close (only if the subject asks about ASL)

13. [Only if asked] One or two sentences: ASL is exploring a common developer
    interface across multiple regulated-asset issuers on Algorand, still validating
    whether that's actually needed. What's your gut reaction?
14. Would you be open to a follow-up conversation as this develops, or to trying an
    early mock integration later? (No commitment ask beyond willingness to talk again.)

## Continue / pivot / stop evidence — tied to A-002b

Copied from `docs/assumptions-register.md` — do not loosen these criteria when logging
results:

- **Continue if:** ≥1 developer/application team (distinct from any issuer contact)
  describes a concrete integration they'd build against a multi-issuer interface, with
  a specific use case — not just general interest in "tokenized RWAs."
- **Pivot if:** Developer interest exists only for a single-issuer integration (they
  want an SDK for one specific token, not a multi-issuer abstraction) — this is the
  single most likely outcome given the developer-prospect research in
  `target-shortlist.md` shows CompX/Folks Finance did custom single-issuer
  integrations, not multi-issuer ones. If this is what you hear, log it as Pivot
  evidence, not as a disappointing non-result — it's a real, useful signal.
- **Stop if:** No developer/application team can articulate a reason to build against
  ASL rather than integrating an issuer's own SDK directly.

## Cross-check note

If both an issuer interview and a developer interview reference the same integration
(e.g., a Folks Finance conversation about the Meld integration, cross-checked against a
Meld Gold conversation about the same integration), log both entries in
`evidence-log.md` and note the cross-reference explicitly — this is the strongest kind
of evidence available (independent corroboration) and should be flagged as such rather
than logged as two unrelated data points.
