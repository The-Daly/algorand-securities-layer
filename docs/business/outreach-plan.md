# Outreach Plan

Status: **plan only — nothing has been sent.** Every message below requires explicit
founder approval before it goes out, per CLAUDE.md's action-confirmation rules. This
document sequences and drafts outreach; it does not authorize it.

**Channels:** public only — company contact forms, public X/Twitter accounts, GitHub
issue/discussion threads where a project accepts them, public Algorand Foundation
forum. No purchased contact lists, no scraped personal emails, no cold LinkedIn
connection spam. No mass automation — every message is sent individually, by the
founder, after reading the recipient's most recent public activity.

**Volume discipline:** no more than 2 new outreach sends per week during Phase 0. This
is a validation effort by one solo founder, not a campaign — quality and follow-through
matter more than count, and CLAUDE.md's stop condition ("no issuer/provider will
engage") can't be tested honestly if outreach is rushed or spammy.

---

## Sequence and rationale

Ordered by the shortlist scores in `target-shortlist.md`, adjusted for realistic
reachability (a lower-scored target with a real contact route is sequenced ahead of a
higher-scored target with no named contact, since the latter isn't actionable yet).

### Wave 1 — developer/application side (lower barrier, faster signal)

Developer prospects are sequenced first: they're more likely to respond quickly via
public channels (GitHub, X) than regulated financial entities, and A-002b evidence is
needed independently of A-002a regardless of order.

1. **CompX Labs** — public X (`@Compxlabs`) or GitHub discussion on `compx-labs`.
2. **Folks Finance** — public docs/GitHub (`docs.folks.finance`) contact path, or X.
3. **Pera Wallet** — GitHub (`perawallet` org) or public X, framed as an ecosystem/
   distribution conversation, not an integration pitch.

### Wave 2 — issuer/provider side (slower, needs more preparation)

Only begin once Wave 1 has produced at least one response (or two weeks have passed
with no response, whichever comes first) — reserve founder time for the harder
regulated-entity outreach rather than sending everything at once.

4. **Quantoz Payments** — contact form at quantoz.com. Best first regulated-issuer
   target: real license, real Algorand commitment, and (unlike Archax) a company whose
   core business is issuance/compliance, so the interview questions map directly.
5. **Archax** — contact form at archax.com. Highest-scored target but also the most
   institutionally distant from a solo pre-revenue founder — send after Quantoz so the
   founder has one completed regulated-entity conversation for calibration first.
6. **Midas** — no named contact found yet; before sending, spend up to 30 minutes of
   founder time locating a real contact (company site, LinkedIn company page, X). Do
   not send to a generic address if none is found — log as "no reachable contact" in
   the evidence log instead of guessing.

### Not scheduled this round

- **Republic, Enel/Conio, Lofty, Meld Gold** — scored lower and/or have a clearer
  "already vertically integrated, low fit" concern per the shortlist. Hold until Wave 1
  and Wave 2 produce results; revisit only if early conversations reveal a reason to
  prioritize them (e.g., someone in Wave 1/2 names one of them as a needed integration).
- **abrdn, Securitize, Tokeny** — explicitly marked "do not contact" in the shortlist
  (abrdn is not the technical decision-maker for the Algorand integration; Securitize/
  Tokeny are competitive-reference points, not prospects).
- **Tinyman, Vestige, Pact** — hold for a possible Wave 3 if Wave 1 developer
  conversations are productive and more DEX-side data points are useful.

---

## Draft messages

Each draft is a starting point — personalize the first line to the recipient's most
recent public activity before sending, and do not send verbatim to multiple targets.

### Draft — developer/application prospects (Wave 1)

> Hi [name/team] — I've been looking at how RWA-adjacent apps on Algorand (saw
> [specific recent activity, e.g. "the Meld Gold/Silver collateral listing" /
> "the Lofty auto-compounding integration"]) actually handle integrating regulated
> assets from different issuers. I'm doing early-stage research (not selling anything
> yet) into whether a common interface across issuers would actually help vs. just add
> a layer — would you be open to a short conversation about what that [specific
> integration] actually took to build? Happy to share notes/findings back, no pitch
> attached.

### Draft — issuer/provider prospects (Wave 2)

> Hi [name/team] — I'm doing early-stage, self-funded research into infrastructure for
> compliant tokenized assets on Algorand (not pitching a product — genuinely trying to
> validate whether one is needed). I saw [specific recent activity, e.g. "EURD's
> launch on Algorand" / "the abrdn fund tokenization with Archax"] and would value 20
> minutes to understand how you currently handle [specific workflow, e.g. compliance
> enforcement / multi-chain integration cost] — not asking for a partnership or
> commitment, just trying to learn from people actually doing this.

---

## Follow-up schedule

- **No response after initial send:** one follow-up at **+10 business days**, brief,
  no new ask.
- **No response after follow-up:** stop. Log as "no response" in the evidence log
  (this is itself a data point, not a null result — repeated no-responses across
  multiple targets is evidence toward the A-002a/A-002b Stop conditions).
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
