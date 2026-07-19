# Outreach Plan

Status: **plan only — nothing has been sent.** Every message below requires explicit
founder approval before it goes out, per CLAUDE.md's action-confirmation rules. This
document sequences and drafts outreach; it does not authorize it.

**Channels:** public only — company contact forms, public X/Twitter accounts, GitHub
issue/discussion threads where a project accepts them, public Algorand Foundation
forum. No purchased contact lists, no scraped personal emails, no cold LinkedIn
connection spam. No mass automation — every message is sent individually, by the
founder, after reading the recipient's most recent public activity.

**Volume discipline — corrected:** the prior draft of this plan capped outreach at 2
sends/week and serialized issuer outreach behind developer outreach ("Wave 1" then
"Wave 2"). Both were wrong. A-002a (issuer/provider demand) and A-002b
(developer/application demand) are separate assumptions in
`docs/assumptions-register.md` that must be tested **independently** — waiting for
developer responses before contacting issuers doesn't protect quality, it just costs
weeks and makes the two sides' evidence arrive staggered rather than comparably. This
plan now runs both sides **in parallel from the first batch**. Volume stays small
because a solo founder can only have so many real conversations at once, not because
of an arbitrary weekly cap — each batch is sized to what the founder can actually
follow up on personally, and a new batch starts only once the founder has capacity,
not on a fixed calendar.

---

## Batch 1 — parallel, four messages total

Two developer/application messages and two issuer/provider messages, sent
individually (not as a mail-merge), each requiring separate founder approval of the
final message text before it goes out. Selected from the corrected rankings in
`target-shortlist.md` (Sections A and B) — the highest-scored reachable target in each
category, plus the second-highest, so both sides get more than one shot in this first
round.

**Developer/application side:**
1. **Folks Finance** (10/15, rank 1 of Section B) — public docs/GitHub/forum contact
   path (`docs.folks.finance`, `forum.folks.finance`), or X. Primary-confirmed GOLD/
   SILVER integration gives this message a specific, verifiable hook.
2. **CompX Labs** (9/15, rank 2 of Section B) — public X (`@Compxlabs`), GitHub
   discussion on `compx-labs`, or `compx.io`. The message should ask directly about
   the Meld/Lofty integrations rather than assume them, since the shortlist correction
   found those claims only Secondary-sourced — the conversation itself resolves the
   sourcing gap.

**Issuer/provider side:**
3. **Quantoz Payments** (12/15, rank 1 of Section A) — contact form at quantoz.com.
   Now the top-ranked issuer/provider target after the shortlist correction confirmed
   Quantoz operates the same MiCA-regulated tokens across six chains — the strongest
   available A-001 test case, not just an A-003/A-005 one.
4. **Archax** (11/15, rank 2 of Section A) — contact form at archax.com. Most
   institutionally distant from a solo pre-revenue founder of the four, but still the
   closest structural analogue to ASL's "one interface across many issuers" thesis
   from the distribution side.

**Why these four and not the next-ranked ones:** Meld Gold (issuer, 8/15) and Tinyman
(developer, 7/15) are the next candidates in each section and are reasonable Batch 2
choices, but four simultaneous new conversations is already a full load for a solo
founder to personalize and follow up on properly — starting smaller and adding a
second batch once Batch 1 has responses (or has clearly stalled) keeps outreach
quality high without re-imposing an arbitrary send-rate cap.

### Held for a later batch

- **Meld Gold, Lofty, Enel/Conio** — issuer/provider targets scored lower and/or
  carry a clear "already vertically integrated, low fit" concern per the shortlist.
  Meld Gold is the strongest of these (Primary-confirmed cross-application usage) and
  the most likely Batch 2 addition.
- **Tinyman, Vestige, Pact** — developer/application targets held for a later batch;
  Tinyman is the most likely addition given its categorical fit for A-005
  (compliant-transfer-at-a-DEX).
- **Midas** — no named contact found yet; before sending, spend up to 30 minutes of
  founder time locating a real contact. Do not send to a generic address if none is
  found — log as "no reachable contact" in the evidence log instead of guessing. Its
  Signal score was also corrected downward in this pass (a single launch transaction
  is not sustained-demand evidence), so it's a lower priority than before regardless.
- **Republic** — moved to Section C (historical/Unverified) in the shortlist
  correction; do not resume outreach on the strength of the original 2021-era
  announcement. If founder interest arises, re-verify current Algorand status via a
  primary source first.

### Not scheduled — do not contact

**abrdn, Securitize, Tokeny** — explicitly marked "do not contact" in
`target-shortlist.md` Section C (competitive/historical/base-rate references, not
outreach candidates). Do not count these toward any outreach quota or batch.

---

## Draft messages

Each draft is a starting point — personalize the first line to the recipient's most
recent public activity before sending, and do not send verbatim to multiple targets.
Per this plan's approval rule, the founder approves the **final, personalized** text
of each message individually — these drafts are not pre-approved templates.

### Draft — developer/application prospects (Folks Finance, CompX Labs)

> Hi [name/team] — I've been looking at how RWA-adjacent apps on Algorand (saw
> [specific recent activity, e.g. "the Meld Gold/Silver collateral listing" /
> "the Lofty auto-compounding integration"]) actually handle integrating regulated
> assets from different issuers. I'm doing early-stage research (not selling anything
> yet) into whether a common interface across issuers would actually help vs. just add
> a layer — would you be open to a short conversation about what that [specific
> integration] actually took to build? Happy to share notes/findings back, no pitch
> attached.

### Draft — issuer/provider prospects (Quantoz Payments, Archax)

> Hi [name/team] — I'm doing early-stage, self-funded research into infrastructure for
> compliant tokenized assets on Algorand (not pitching a product — genuinely trying to
> validate whether one is needed). I saw [specific recent activity, e.g. "EURQ/USDQ's
> launch on Algorand" / "the abrdn fund tokenization with Quantoz's EURD"] and would
> value 20 minutes to understand how you currently handle [specific workflow, e.g.
> keeping compliance consistent across the chains you support] — not asking for a
> partnership or commitment, just trying to learn from people actually doing this.

---

## Follow-up schedule

- **No response after initial send:** one follow-up at **+10 business days**, brief,
  no new ask.
- **No response after follow-up:** stop for that target. Log as "no response" in the
  evidence log. **Corrected framing:** a no-response is weak evidence about *that
  channel or that specific message* — a wrong contact route, a bad subject line, an
  inbox nobody checks — not direct evidence that the market doesn't want ASL. Treat a
  pattern across *many* targets and *multiple* channels as more informative than any
  single non-response; see the tightened strength definitions in
  `evidence-log.md`.
- **Response received (positive or negative):** log immediately in
  `evidence-log.md`, tie to the relevant assumption row(s), and — if positive —
  schedule the actual interview using `issuer-interview.md` or
  `developer-interview.md` as appropriate. Any interview scheduling message is itself
  outreach and needs no additional approval beyond this plan's blanket approval
  requirement, since it's a direct continuation of an already-approved thread — but the
  *content* of what's said still follows the ground rules in both interview scripts
  (no pitching first, no promises).
- **Negative/decline response:** log it in full. A clear "no" with a stated reason is
  higher-quality evidence than silence — do not treat declines as failures to hide.

## What this plan does not authorize

- No message is sent without the founder explicitly approving that specific message,
  in chat, before it goes out — a prior approval of this plan's structure is not a
  standing authorization to send.
- No claims of partnership, licensing status, technical capability, or product
  availability beyond what's true today (no working product exists).
- No spend of any kind — this plan requires $0 (public channels only).
