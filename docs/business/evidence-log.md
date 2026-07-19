# Evidence Log

Status: **empty of outreach evidence — every target below starts as `Not contacted`.**
Desk research (`target-shortlist.md`) is not demand evidence and is not logged here as
if it were. This log only records what happens once real outreach or interviews begin.

Append-only, same discipline as `SECURITY_AUDIT_LOG.md` and
`docs/assumptions-register.md`: add rows and update status, never delete or rewrite
history. When an entry produces evidence relevant to an assumption-register row, update
that row's `Evidence to date` field in `docs/assumptions-register.md` and reference the
evidence-log row ID here for traceability.

## Log format

| ID | Target | Date | Channel | Assumptions tested | Response/rejection | Exact signal | Strength | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |

- **ID:** `EV-NNN`, sequential.
- **Target:** organization + named contact if any, from `target-shortlist.md`.
- **Date:** the date of the contact attempt or response, not the log-entry date.
- **Channel:** exact channel (e.g., "X DM," "archax.com contact form," "GitHub
  discussion #N").
- **Assumptions tested:** which of A-001 / A-002a / A-002b / A-003 / A-004 / A-005.
- **Response or rejection:** verbatim or closely paraphrased; note if no response.
- **Exact signal:** the specific, falsifiable thing they said or did — not an
  interpretation. ("Said they'd rather build in-house" is a signal; "seemed
  interested" is not.)
- **Strength — corrected definitions.** The prior version of this log conflated
  "getting a reply" with "getting evidence" and treated silence as if it pointed
  toward the Stop condition. Both were wrong; corrected below.

### Strength definitions (corrected)

- **Weak:** An unprompted opinion with no commitment attached ("that sounds
  interesting," general enthusiasm about RWAs, a like/retweet). **Also Weak: no
  response.** A non-response is evidence about *that channel or message* — wrong
  contact route, bad timing, an inbox nobody checks — not direct evidence the market
  doesn't want ASL. A pattern across many targets and multiple channels is more
  informative than any single non-response; do not read one Weak/no-response entry as
  progress toward a Stop condition on its own.
- **Medium:** A specific, concrete answer to a direct question — e.g., a real
  description of current workflow, a stated reason for a chain choice, a named
  integration cost. **Also Medium: agreeing to a call or a follow-up conversation.**
  Willingness to talk is not itself demand evidence — it's access to gather demand
  evidence. Do not log a scheduled call as Strong; log what's actually *said* on
  the call as Weak/Medium/Strong per this scale, separately.
- **Strong:** Requires something with real cost or commitment behind it, e.g.:
  - concrete integration pain described with numbers (time, engineering cost,
    dollars, headcount);
  - willingness to share internal requirements, workflow documentation, or
    architecture detail;
  - offering sandbox/API access;
  - a referral to the actual technical or compliance decision-maker;
  - stated design-partner or pilot interest, specifically (not general interest);
  - an agreed, scheduled *technical* follow-up (e.g., a scoping call with an
    engineer, not just "let's talk again sometime").
- **Next action:** what happens next for this target.

## Current status — all targets `Not contacted`

Targets and assumption mappings below reflect the corrected shortlist and outreach
plan (see `target-shortlist.md` Sections A/B/C and `outreach-plan.md`).

| ID | Target | Date | Channel | Assumptions tested | Response/rejection | Exact signal | Strength | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV-001 | Folks Finance | — | — | A-002a (cross-ref), A-002b | Not contacted | — | — | Batch 1 (developer side), pending founder approval of final message |
| EV-002 | CompX Labs | — | — | A-001, A-002b | Not contacted | — | — | Batch 1 (developer side), pending founder approval — message should ask directly about the Meld/Lofty integrations since those claims are only Secondary-sourced |
| EV-003 | Quantoz Payments | — | — | A-001, A-002a, A-003, A-005 | Not contacted | — | — | Batch 1 (issuer side), pending founder approval — top-ranked issuer/provider target after shortlist correction |
| EV-004 | Archax | — | — | A-001, A-002a, A-004 | Not contacted | — | — | Batch 1 (issuer side), pending founder approval |
| EV-005 | Meld Gold | — | — | A-001, A-002a, A-002b | Not contacted | — | — | Held for Batch 2; strongest issuer candidate after Batch 1 |
| EV-006 | Tinyman | — | — | A-005 | Not contacted | — | — | Held for Batch 2; strongest developer candidate after Batch 1 |
| EV-007 | Lofty | — | — | A-001 | Not contacted | — | — | Held for a later batch (candidate for A-001 "build vs. buy" interview if reached) |
| EV-008 | Enel / Conio | — | — | A-002a, A-004 | Not contacted | — | — | Held for a later batch |
| EV-009 | Midas | — | — | A-002a, A-004 | Not contacted | — | — | Contact route not yet found; locate before sending. Signal score corrected downward (launch-day transaction only) — lower priority than before |
| EV-010 | Vestige | — | — | A-002b | Not contacted | — | — | Held for a later batch |
| EV-011 | Pact | — | — | A-005 | Not contacted | — | — | Held for a later batch |
| EV-012 | Pera Wallet | — | — | Distribution/GTM only — not credited toward A-002b | Not contacted | — | — | Recategorized as a distribution/ecosystem stakeholder, not a demand-validation target; if ever contacted, frame as GTM, not integration demand |
| EV-013 | Republic | — | — | A-002a, A-004 (historical only) | Not contacted | — | — | Moved to Historical/Unverified in shortlist — do not contact on the strength of the original 2021-era announcement; re-verify current Algorand status via a primary source first if founder interest arises |
| EV-014 | abrdn | — | — | A-004 (base rate only) | Not contacted | — | — | Do not contact — not the technical decision-maker |
| EV-015 | Securitize | — | — | R-0001 (competitive) | Not contacted | — | — | Not an outreach target — competitive reference only |
| EV-016 | Tokeny | — | — | R-0001 (competitive) | Not contacted | — | — | Not an outreach target — competitive reference only |

## Register hygiene

- A row moves out of `Not contacted` only when an actual message has been sent (with
  founder approval, per `outreach-plan.md`) or an actual interview has occurred.
- Desk research updates to `target-shortlist.md` do not change any row here.
- Do not mark any assumption `Supported` or `Testing` in `docs/assumptions-register.md`
  based on this log while every row remains `Not contacted` — see the explicit
  instruction against this in this session's scope.
- Do not read a single Weak entry (including a single no-response) as movement toward
  any assumption's Stop condition. Stop conditions require a pattern across multiple
  independent targets, not one data point.
