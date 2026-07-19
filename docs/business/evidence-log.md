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
- **Strength:** Weak (unprompted opinion, no commitment) / Medium (specific, concrete
  answer to a direct question) / Strong (named commitment, referral, or repeatable
  action — e.g., agreeing to a follow-up call, sharing internal data).
- **Next action:** what happens next for this target.

## Current status — all targets `Not contacted`

| ID | Target | Date | Channel | Assumptions tested | Response/rejection | Exact signal | Strength | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| EV-001 | CompX Labs | — | — | A-001, A-002b | Not contacted | — | — | Wave 1 outreach, pending founder approval of draft message |
| EV-002 | Folks Finance | — | — | A-002a (cross-ref), A-002b | Not contacted | — | — | Wave 1 outreach, pending founder approval |
| EV-003 | Pera Wallet | — | — | A-002b | Not contacted | — | — | Wave 1 outreach, pending founder approval |
| EV-004 | Quantoz Payments | — | — | A-002a, A-003, A-005 | Not contacted | — | — | Wave 2 outreach, pending founder approval and Wave 1 result |
| EV-005 | Archax | — | — | A-001, A-002a, A-004 | Not contacted | — | — | Wave 2 outreach, pending founder approval and Wave 1 result |
| EV-006 | Midas | — | — | A-002a, A-004 | Not contacted | — | — | Contact route not yet found; locate before sending |
| EV-007 | Tinyman | — | — | A-005 | Not contacted | — | — | Held for possible Wave 3 |
| EV-008 | Vestige | — | — | A-002b | Not contacted | — | — | Held for possible Wave 3 |
| EV-009 | Pact | — | — | A-005 | Not contacted | — | — | Held for possible Wave 3 |
| EV-010 | Republic | — | — | A-002a, A-004 | Not contacted | — | — | Not scheduled this round |
| EV-011 | Enel / Conio | — | — | A-002a, A-004 | Not contacted | — | — | Not scheduled this round |
| EV-012 | Lofty | — | — | A-001 | Not contacted | — | — | Not scheduled this round (candidate for A-001 "build vs. buy" interview if reached) |
| EV-013 | Meld Gold | — | — | A-001, A-002a, A-002b | Not contacted | — | — | Not scheduled this round |
| EV-014 | abrdn | — | — | A-004 | Not contacted | — | — | Do not contact (not the technical decision-maker) |
| EV-015 | Securitize | — | — | R-0001 (competitive) | Not contacted | — | — | Not an outreach target — competitive reference only |
| EV-016 | Tokeny | — | — | R-0001 (competitive) | Not contacted | — | — | Not an outreach target — competitive reference only |

## Register hygiene

- A row moves out of `Not contacted` only when an actual message has been sent (with
  founder approval, per `outreach-plan.md`) or an actual interview has occurred.
- Desk research updates to `target-shortlist.md` do not change any row here.
- Do not mark any assumption `Supported` or `Testing` in `docs/assumptions-register.md`
  based on this log while every row remains `Not contacted` — see the explicit
  instruction against this in this session's scope.
