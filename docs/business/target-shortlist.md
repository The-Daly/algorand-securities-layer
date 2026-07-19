# External Validation — Target Shortlist

Status: **desk research only — no outreach sent, no relationship exists with any
organization listed below.** This document is an input to outreach, not evidence of
demand. See [`docs/business/evidence-log.md`](evidence-log.md), which correctly starts
every row as `Not contacted`.

Verified **2026-07-19** unless noted otherwise. No licensing status, partnership,
contact relationship, chain-support claim, or sandbox access is invented — where a
source does not say something, this document says "not stated," not that it's true.
**Absence of a source is absence of evidence, not confirmation of absence** — e.g.
"Algorand not found in sources reviewed" means exactly that, not "confirmed
unsupported."

## Source discipline (correction pass, 2026-07-19)

An earlier draft of this document claimed "all entries use current primary sources."
That claim was wrong — several scored claims relied on trade press, Medium,
aggregators (CoinGecko, DappRadar, LBank), and SEO/blogspam sites (Genfinity,
CryptoPotato, Coinedition). This revision:

- Labels every material source **Primary** or **Secondary** inline.
- **Primary** = the organization's own site/docs/GitHub, an official regulator
  statement, or an Algorand Foundation property (algorand.co, algorand.com,
  algorandtechnologies.com) reporting on its own ecosystem. Wire-service press
  releases distributed verbatim by the company (e.g. PRNewswire) count as Primary.
- **Secondary** = trade press, aggregator sites, coin-data sites, Medium posts not on
  an official company blog, and any source reporting on the claim rather than making
  it directly.
- Any score-relevant claim resting only on a Secondary source is flagged as such and,
  where it could not be corroborated by a Primary source, downgraded to **Unverified**
  or removed from scoring rather than left implicit.

**Scoring model (0–15, three factors scored 0–5 each):**
- **Fit** — does the org's actual activity plausibly need ASL's specific value
  proposition (multi-issuer common interface, compliance-policy orchestration,
  indexing/reconciliation across issuers) rather than a single point integration it can
  already build itself?
- **Reachability** — is there a real, named, public contact route (not just a generic
  `info@` inbox)?
- **Signal strength** — is there public evidence of *ongoing, sustained* Algorand/RWA
  activity (production deployment, repeated announcements, recurring volume), not a
  single one-off launch transaction or press release?

Scores are a prioritization aid for outreach ordering, not a validity claim. A high
score means "worth contacting first," not "will say yes." Scores below were only
changed where new evidence justified it (see the change note at the end of this
document for exactly what moved and why).

---

## Section A — Actionable issuer/provider outreach candidates

Organizations a real outreach message could plausibly reach a decision-maker at, even
if the realistic best outcome is a discovery conversation rather than a partnership.

### 1. Quantoz Payments

- **Category:** Infrastructure / issuer (regulated e-money token issuer).
- **Assets offered:** Five MiCA-regulated electronic money tokens (EMTs): EURD, EURQ,
  USDQ, PLNQ, GBPQ. **Primary:** [quantoz.com](https://www.quantoz.com/) (official site,
  fetched 2026-07-19) and [quantoz.com/blog](https://www.quantoz.com/blog/quantoz-payments-becomes-europes-leading-stablecoin-issuer-with-five-licensed-tokens-adding-polish-zloty-and-british-pound) confirm all five tokens and describe them as
  EMTs, not stablecoins or securities.
- **Jurisdictions publicly served:** Netherlands / EEA — licensed as an Electronic
  Money Institution by De Nederlandsche Bank (Dutch Central Bank). **Secondary:**
  [cryptopotato.com](https://cryptopotato.com/quantoz-payments-secures-license-to-issue-eurd-on-algorand-blockchain/) reports the DNB license; not independently
  cross-checked against a DNB register in this pass — treat the specific license
  number/date as Unverified even though the license itself is corroborated by
  Quantoz's own MiCA-compliance claims (Primary).
- **Currently supported chains — corrected:** **Algorand, Ethereum, Polygon, XRPL,
  Xahau, and Stellar** — confirmed via the official Quantoz site (fetched directly,
  2026-07-19: "Ethereum – All four tokens issued; Polygon – EURQ and USDQ available;
  Algorand – EURQ and USDQ supported; Xahau – EURQ issued; XRPL – EURQ and USDQ
  issued; Stellar – EURQ available") and corroborated by Quantoz's own blog post,
  **Primary**: "EURQ is issued as an ERC-20 token on Ethereum and Polygon, and as an
  ASA token on Algorand," with PLNQ/GBPQ "scheduled to join Quantoz' other EMTs on
  Polygon, Stellar, XRPL, Algorand and Xahau." ([quantoz.com/blog](https://www.quantoz.com/blog/quantoz-brings-european-regulated-stablecoins-eurq-and-usdq-to-algorand))
  This corrects the prior draft, which reported only Algorand and left other chains
  Unverified.
- **Folks Finance relationship:** **Not confirmed by any official source found.** No
  mention of Folks Finance on quantoz.com or in Quantoz's own blog posts reviewed.
  Treat any claimed Quantoz↔Folks Finance relationship as Unverified/absent until an
  official source says otherwise.
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter — strengthened:** Quantoz is not just "an issuer
  that also happens to be on Algorand" — it is a regulated issuer that must maintain
  the **same compliance posture for the same MiCA-regulated tokens across six
  different chains simultaneously** (Ethereum, Polygon, Algorand, XRPL, Xahau,
  Stellar). This is a materially stronger test of **A-001** than previously scored:
  Quantoz has almost certainly built (or is building) *something* like a
  cross-chain-consistent compliance/issuance layer internally, and can speak directly
  to whether that was expensive, whether Algorand's integration was harder or easier
  than the others, and whether a third-party layer would have saved real engineering
  time. Reported cumulative volume across the token family exceeds $50B with ~$60M
  daily (**Secondary**, [natlawreview.com](https://natlawreview.com/press-releases/quantoz-becomes-europes-leading-stablecoin-issuer-five-licensed-tokens) republishing Quantoz's own press
  release — treat the figure as Quantoz-sourced but not independently audited).
- **Why ASL might be redundant:** Quantoz already built and operates its own
  multi-chain issuance and settlement stack across six chains without ASL; whatever
  cross-chain consistency problem it has, it has already solved well enough to ship in
  production. ASL would need to prove it removes real *ongoing* cost, not just
  initial integration cost already sunk.
- **Public contact / partnership route:** [quantoz.com](https://www.quantoz.com/) contact page; no
  named business-development contact found. Unverified beyond that.
- **Score — revised:** Fit 5 (was 4 — upgraded: genuinely operates the same compliance
  problem across 6 chains, the strongest A-001 test case found) / Reach 2 / Signal 5
  (was 4 — upgraded: sustained, large, multi-year reported volume vs. the prior
  single-data-point framing) = **12/15** (was 10/15).
- **Assumptions this target can test:** **A-001** (primary — see above), A-002a,
  A-003, A-005.
- **Disqualifying concerns:** Regulated EMI with direct Algorand Foundation
  relationship; may see ASL as unnecessary middleware between it and its own developer
  base rather than useful infrastructure.

### 2. Archax

- **Category:** Broker / custodian / regulated digital-securities exchange.
- **Assets offered:** Tokenized equities (FTSE 100 stocks), UK government debt, money
  market funds (abrdn), UCITS funds (BNY Investments). **Primary:**
  [archax.com/insights](https://archax.com/insights/archax-extends-tokenised-rwa-universe-to-bring-equities-and-government-debt-on-chain) (official Archax site). **Secondary:**
  [crowdfundinsider.com](https://www.crowdfundinsider.com/2026/05/282804-digital-assets-firm-archax-expands-tokenized-asset-offerings-with-bny-investments-ucits-funds/) corroborates the BNY Investments detail.
- **Jurisdictions publicly served:** UK-regulated (FCA-authorized exchange, broker,
  custodian per Archax's own site, **Primary**: [blog.archax.com](https://blog.archax.com/resources/news/algorand-and-archax-partner-for-new-wave-of-sophisticated-financial-products)); products
  described as reaching EEA/global institutional clients.
- **Currently supported chains:** Algorand, Aptos, Arbitrum, Canton, Cardano,
  Ethereum, Etherlink, Hedera, Solana, Stellar, XDC, XRPL. **Secondary:**
  [genfinity.io](https://genfinity.io/2024/12/10/archax-tokenization-growth/) and
  [cointrust.com](https://www.cointrust.com/market-news/archax-to-facilitate-trading-of-tokenized-ftse100-stocks-and-uk-debt-on-ethereum-polygon-and-algorand-blockchains) are the sources for the full chain list — this specific
  claim was not independently re-verified against archax.com directly in this pass and
  should be treated as **Secondary-sourced, plausible but not Primary-confirmed** for
  the full list (individual chain partnerships, e.g. Algorand, are separately
  corroborated by Archax's own blog).
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter:** Archax already operates across ~12 chains and
  many issuers — the closest existing analogue to ASL's "one interface across many
  issuers" thesis, though from the distribution/access side rather than the issuance
  side.
- **Why ASL might be redundant:** Archax already shipped a live, multi-chain product
  (abrdn fund on Algorand via Quantoz's EURD/EURQ) without ASL, working directly with
  Quantoz and the Algorand Foundation. It has its own tokenization engine and
  evidently does not lack the technical capability to add a chain.
- **Public contact / partnership route:** General inquiry via [archax.com](https://archax.com/)
  contact form; no named business-development contact found. Unverified beyond that.
- **Score:** Fit 4 / Reach 2 / Signal 5 = **11/15** (unchanged).
- **Assumptions this target can test:** A-001, A-002a, A-004 (is Algorand credible vs.
  their other ~11 chains).
- **Disqualifying concerns:** UK-regulated institutional exchange; a solo
  pre-revenue founder with a $300 budget and no track record is an improbable vendor
  for this scale of counterparty. Realistic best case from outreach is a discovery
  conversation, not a partnership.

### 3. Meld Gold

- **Category:** Issuer / tokenization provider (vertically integrated).
- **Assets offered:** Gold, silver, and platinum bullion tokens, each redeemable for
  physical metal held across a network of vaults (including Melbourne Mint).
  **Primary:** [meld.gold/token](https://www.meld.gold/token) (official site).
  **Secondary:** [decrypt.co](https://decrypt.co/24206/meld-taps-ethereum-rival-algorand-put-gold-blockchain) for background/history.
- **Jurisdictions publicly served:** Originally an Australian startup; specific
  jurisdictional licensing not itemized in sources reviewed. Unverified detail.
- **Currently supported chains:** Algorand (Primary: meld.gold).
- **API or sandbox evidence:** Not found. Unverified. GOLD and SILVER are listed as
  collateral on Folks Finance — see Folks Finance entry in Section B for the
  **Primary**-sourced confirmation (official Folks Finance docs/forum) of that
  integration, which is the strongest evidence of *some* integration surface existing.
- **Why Algorand/ASL might matter:** The one issuer in this list with
  **Primary-confirmed cross-application usage** (Folks Finance) — a real, sourced
  proof point that issuer supply and developer demand can meet on Algorand (A-002a and
  A-002b together), even though the integration was direct, not through any shared
  layer.
- **Why ASL might be redundant:** Vertically integrated — built and shipped without
  ASL; the Folks Finance integration appears to be direct (issuer-to-app), not through
  any shared compliance/orchestration layer.
- **Public contact / partnership route:** [meld.gold](https://www.meld.gold/) contact channel; no
  named contact found.
- **Score:** Fit 2 / Reach 2 / Signal 4 = **8/15** (unchanged).
- **Assumptions this target can test:** A-001, A-002a, A-002b — ask directly whether
  the Folks Finance integration was costly/custom, and whether a common interface
  would have helped.
- **Disqualifying concerns:** Already vertically integrated, no visible unmet gap.

### 4. Lofty (Lofty AI)

- **Category:** Issuer / tokenization provider (vertically integrated).
- **Assets offered:** Fractional real estate — 148 tokenized U.S. properties across 11
  states reported, with token holders forming a legal DAO per property. **Primary:**
  [algorand.co/case-studies/lofty](https://algorand.co/case-studies/lofty-transform-real-estate-industry) (Algorand Foundation) and
  [lofty.ai/help](https://www.lofty.ai/help/articles/6145729-which-blockchain-is-lofty-ai-using-to-tokenize-properties) (Lofty's own help docs).
- **Jurisdictions publicly served:** U.S. only (all properties reported are
  U.S.-based).
- **Currently supported chains:** Algorand only, per Lofty's own help documentation
  (Primary).
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter:** Longest-running, highest-volume Algorand RWA
  issuer found in this research (3M+ dollars in rental distributions reported,
  Primary/algorand.co) — a real production track record, useful as a base-rate
  reference even if Lofty itself doesn't become a customer.
- **Why ASL might be redundant:** Fully vertically integrated. This is the clearest
  evidence *against* the "issuers want common infrastructure" assumption (A-001) found
  in this research round: the most successful Algorand RWA issuer chose not to use
  shared infrastructure.
- **Public contact / partnership route:** [lofty.ai](https://www.lofty.ai/) support/contact
  channel; no named business-development contact found.
- **Score:** Fit 1 / Reach 2 / Signal 5 = **8/15** (unchanged).
- **Assumptions this target can test:** A-001 — highest-value interview target for
  directly attacking "would you rather build in-house," precisely because Lofty
  already made that choice and can defend it concretely.
- **Disqualifying concerns:** Low product fit — no visible integration gap to sell
  into. Worth an interview for A-001 evidence, not a design-partner prospect.

### 5. Midas

- **Category:** Tokenization provider / issuer.
- **Assets offered:** mTBILL — tokenized certificate referencing short-term U.S.
  Treasury ETFs (e.g., BlackRock IB01, BUIDL), targeted at European retail. **Primary:**
  [algorand.co/blog/midas](https://algorand.co/blog/midas-a-fully-regulated-german-tokenization-platform-launches-the-mtbill-token-on-algorand). **Secondary:**
  [coinedition.com](https://coinedition.com/midas-mtbill-algorand-tbills/) for the yield figure.
- **Jurisdictions publicly served:** Described as serving European retail investors;
  Midas is described as a "fully regulated German tokenization platform" — the
  specific license/regulator was not named in sources reviewed. Unverified detail.
- **Currently supported chains:** Algorand confirmed live (Primary, algorand.co).
  Whether Midas issues mTBILL or other products on other chains was not confirmed —
  Unverified.
- **API or sandbox evidence:** mTBILL is described as "permissionless" and "fully DeFi
  composable" (Primary/algorand.co) — implies a public on-chain integration surface
  exists, but no formal API/sandbox documentation was found. Unverified.
- **Why Algorand/ASL might matter — framing corrected:** The launch announcement
  reported one atomic-swap transaction ($2M USDC↔mTBILL on 2025-05-27). **That is
  launch-day evidence, not proof of sustained trading volume or ongoing demand** — the
  prior draft treated this as "real (if modest) trading volume," which overstates a
  single reported transaction into an activity pattern. No source reviewed reports
  mTBILL trading volume, holder count, or activity *after* the launch date. Treat
  current/ongoing Algorand demand for mTBILL specifically as **Unverified**, while the
  launch itself remains solid Primary-sourced evidence that Midas chose Algorand.
- **Why ASL might be redundant:** Same pattern as Archax/Quantoz — Midas shipped
  without ASL, working directly with the Algorand Foundation.
- **Public contact / partnership route:** Not found in sources reviewed. Unverified.
- **Score — revised:** Fit 3 / Reach 1 / Signal **2** (was 4 — downgraded: single
  launch-day transaction is not sustained-activity evidence) = **6/15** (was 8/15).
- **Assumptions this target can test:** A-002a, A-004 (evidence Algorand was chosen at
  launch — not evidence of sustained demand).
- **Disqualifying concerns:** No named contact found; regulated European entity, same
  scale-mismatch concern as Archax/Quantoz; weakest signal strength of the top-tier
  candidates after correction.

### 6. Enel / Conio (ebitts)

- **Category:** Issuer (Enel, asset owner) + infrastructure/tokenization provider
  (Conio, fintech partner).
- **Assets offered:** Fractional ownership of solar and wind generation assets (73
  assets reported), via two token types representing infrastructure ownership and
  metered energy output. **Primary:** [algorand.co/case-studies/enel](https://algorand.co/case-studies/enel-tokenizing-renewable-energy-assets-on-algorand).
  **Secondary:** [cointelegraph.com](https://cointelegraph.com/news/fractional-ownership-solar-panels-enel-algorand) for press framing.
- **Jurisdictions publicly served:** Italy (Enel customers, per "ebitts" program
  branding and Italian-market press coverage).
- **Currently supported chains:** Algorand (Primary, algorand.co).
- **API or sandbox evidence:** Not found. Unverified.
- **Why Algorand/ASL might matter:** Enel is a large, non-crypto-native regulated
  utility — the kind of "traditional enterprise issuer" ASL's thesis needs to prove it
  can serve. Conio (the implementation partner) is the more relevant contact than Enel
  itself for an infrastructure conversation.
- **Why ASL might be redundant:** Enel used a named implementation partner (Conio) to
  build this — the "who does the technical work" role ASL wants is already filled.
- **Public contact / partnership route:** No named contact found for either Enel's
  tokenization team or Conio; Unverified.
- **Score:** Fit 2 / Reach 1 / Signal 3 = **6/15** (unchanged).
- **Assumptions this target can test:** A-002a (enterprise/non-crypto-native issuer
  demand), A-004.
- **Disqualifying concerns:** Enel is a multinational utility; Conio's willingness to
  discuss a competing/adjacent infrastructure vendor is Unverified and plausibly low.

### Ranked top three — issuer/provider side (revised)

| Rank | Target | Score | Change from prior draft | Why ranked here |
| --- | --- | --- | --- | --- |
| 1 | **Quantoz Payments** | 12/15 | **Up from 10/15, up from rank 2** | Confirmed multi-chain across 6 networks via official primary source — the strongest available A-001 test case: a regulated issuer solving cross-chain compliance consistency today, not hypothetically. |
| 2 | **Archax** | 11/15 | Unchanged, **down from rank 1** | Still the closest structural analogue to ASL's thesis from the distribution side; displaced from #1 only because Quantoz's corrected chain-support data makes it a stronger A-001 test on the issuance side. |
| 3 | **Meld Gold** | 8/15 (tie with Lofty) | Unchanged score, **entered top 3** (displaced Midas) | Only issuer/provider target with a **Primary-confirmed** cross-application integration (Folks Finance) — best available target for testing A-001/A-002a/A-002b together with sourced evidence, not inference. |

**Midas dropped out of the top three** after its Signal score was corrected (8→6):
a single launch-day transaction is not sustained-demand evidence, and treating it as
such was the specific error flagged in this correction pass. Midas remains a
legitimate secondary target for "did Midas choose Algorand and why" (A-004), just not
top-ranked.

**Honest caveat, unchanged:** none of the top three has a visible, unmet integration
gap in public sources — this ranking is "most worth an information-gathering
interview," not "most likely design partner." The strongest evidence against A-001 in
this round remains that the two most operationally successful Algorand-native issuers
found (Lofty, Meld Gold) both vertically integrated instead of using shared
infrastructure.

---

## Section B — Actionable developer/application prospects

### 1. Folks Finance

- **Organization/project:** Folks Finance — Algorand-originated, now multichain DeFi
  lending/borrowing protocol.
- **Current Algorand activity:** Originally the leading Algorand DeFi lending
  protocol; still operates an Algorand app alongside multichain expansion.
  **Primary:** [docs.folks.finance](https://docs.folks.finance/folks-finance-algorand-app-documentation) (official docs).
- **Probable ASL use case:** Consuming a common compliance/eligibility interface to
  safely list additional regulated RWA collateral (beyond Meld gold/silver) from
  multiple issuers without custom-building each integration.
- **Existing issuer/RWA integration — Primary-confirmed:** GOLD and SILVER (Meld Gold
  / Meld Silver) are listed as Folks Finance collateral assets. **Primary sources,
  both on official Folks Finance domains:**
  [forum.folks.finance — "New listing: GOLD and SILVER"](https://forum.folks.finance/t/new-listing-gold-and-silver/378)
  and [docs.folks.finance/developer/contracts](https://docs.folks.finance/developer/contracts) (lists App IDs/Asset IDs for
  the GOLD/SILVER contracts). The EURS integration referenced in the prior draft was
  **not re-verified against an official Folks Finance source in this pass** — treat it
  as Unverified pending a docs/forum citation, separate from the confirmed GOLD/SILVER
  listing.
- **Why a multi-issuer interface could matter:** Folks Finance already paid this
  integration cost once (Meld) and would plausibly repeat custom integration work for
  each additional regulated-asset issuer — the exact repeated-cost pattern ASL's
  thesis targets. This is Unverified as a *stated* pain point; it is an inference from
  the existing integration, not something Folks Finance has said.
- **Public contact route:** [folks.finance](https://folks.finance/) / public docs, GitHub, and
  forum (`docs.folks.finance`, `forum.folks.finance`); no named individual contact
  found.
- **Score:** 4/5 (Algorand activity) + 4/5 (RWA-adjacency, Primary-confirmed) + 2/5
  (reachability, no named contact) = **10/15** (unchanged).
- **Assumptions this target can test:** A-002b directly, and can speak concretely to
  the actual integration cost of onboarding Meld (useful evidence for A-001 too).

### 2. CompX Labs

- **Organization/project:** CompX — Algorand structured-products/yield platform
  (absorbed the earlier xBacked protocol).
- **Current Algorand activity:** Live protocol. **Primary:** [compx.io](https://compx.io/) and
  [compx-documentation.gitbook.io](https://compx-documentation.gitbook.io/compx-documentation) (official docs, fetched directly
  2026-07-19 — confirms xUSD's general description but does **not** list specific
  backing assets on the pages checked).
- **Probable ASL use case:** Onboarding additional regulated RWA collateral/backing
  assets from multiple issuers via a common interface rather than bespoke integration
  per asset.
- **Existing issuer/RWA integration — downgraded, not Primary-confirmed:** The claim
  that xUSD's backing basket includes Meld Gold ($GOLD) and Meld Silver ($SILVER), and
  that CompX separately integrated with Lofty, appears only in **Secondary** sources
  ([coingecko.com](https://www.coingecko.com/en/coins/compx-xusd) coin-profile text) and one **Primary**
  Algorand Foundation mention (algorand.co, in passing, of a CompX↔Lofty
  auto-compounding integration). CompX's own official GitHub org
  (`github.com/compx-labs`) and gitbook documentation were checked directly in this
  pass and **did not surface confirming text** on the pages retrieved — this may be a
  page-selection limitation rather than proof the integration doesn't exist, but it
  means the "two confirmed issuer integrations" claim in the prior draft overstated
  the sourcing. Correct framing: **reported by a coin-data aggregator and partially
  corroborated by an Algorand Foundation source, not confirmed by CompX's own primary
  documentation** as checked in this pass.
- **Why a multi-issuer interface could matter:** If the Meld/Lofty integrations are
  accurate (plausible, given the sourcing above, just not Primary-confirmed), CompX
  would be the single best target to ask "you've now integrated two issuers
  separately — would a common interface have saved meaningful time?" This question is
  worth asking in an interview regardless of documentation gaps — the interview itself
  would resolve the sourcing question.
- **Public contact route:** [compx-labs GitHub](https://github.com/compx-labs), `@Compxlabs` on X,
  [compx.io](https://compx.io/); no named individual contact found.
- **Score — revised:** 4/5 (Algorand activity) + **3/5** (RWA-adjacency — was 5/5;
  downgraded because the strongest version of this claim is not confirmed by CompX's
  own primary documentation) + 2/5 (reachability) = **9/15** (was 11/15).
- **Assumptions this target can test:** A-002b, and potentially A-001 pending
  confirmation of the Meld/Lofty integrations directly in an interview.

### 3. Tinyman

- **Organization/project:** Tinyman — original Algorand AMM/DEX.
- **Current Algorand activity:** Live, established DEX. **Secondary:**
  [tinymanorg.medium.com](https://tinymanorg.medium.com/algorand-defi-powerhouse-tinymans-period-10-710ea26d7a90) (official Tinyman Medium account — treated as
  company-controlled/Primary-adjacent since it is Tinyman's own publishing channel,
  not third-party press).
- **Probable ASL use case:** Listing compliant RWA trading pairs would require
  enforcing transfer restrictions at the AMM level — directly tests whether ASL's
  "compliant transfer execution" primitive (responsibility-matrix.md) is something a
  DEX would actually adopt versus building its own restriction logic.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed in
  sources reviewed. Unverified either way.
- **Why ranked as the third direct demand-validation target instead of Pera Wallet:**
  Tinyman is an **application that would have to actively decide to list and enforce
  rules for a specific issuer's asset** — the same category of decision Folks Finance
  and CompX already made. A wallet (see Pera, Section C) never makes that decision; it
  is a distribution channel that supports whatever assets exist, not an integrator
  with the "which issuer's rules do I enforce" problem ASL is built around. Tinyman's
  raw score (7/15) is lower than Pera's prior score (8/15), but Pera's higher score
  was driven by general ecosystem prominence, not RWA-integration relevance —
  including Pera in the "developer/application demand" ranking conflated a
  distribution stakeholder with an application-demand signal, which this correction
  fixes by moving Pera to Section C.
- **Public contact route:** [tinyman.org](https://tinyman.org/), public Medium/GitHub presence;
  no named contact found.
- **Score:** 4/5 (activity) + 1/5 (no confirmed RWA activity) + 2/5 (reach) = **7/15**
  (unchanged).
- **Assumptions this target can test:** A-005 specifically — good target for the
  compliant-transfer-at-a-DEX question even without confirmed prior RWA work.

### 4. Vestige

- **Organization/project:** Vestige — Algorand DEX aggregator and on-chain
  analytics/data platform.
- **Current Algorand activity:** Live. **Primary:** [vestige.fi](https://vestige.fi/) (official
  site).
- **Probable ASL use case:** Consuming ASL's audit-event/indexing output as a data
  source, or surfacing compliance status in its asset pages — an
  indexing/reconciliation fit rather than a transfer-execution fit.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed.
  Unverified.
- **Public contact route:** [vestige.fi](https://vestige.fi/); no named contact found.
- **Score:** 3/5 + 1/5 + 2/5 = **6/15** (unchanged).
- **Assumptions this target can test:** A-002b, specifically for the
  indexing/reconciliation part of ASL's scope.

### 5. Pact

- **Organization/project:** Pact — Algorand DEX with stable-swap and standard AMM
  pools.
- **Current Algorand activity:** Live. **Secondary:** referenced alongside other
  Algorand DeFi builders in aggregator/roundup sources; not independently re-verified
  against Pact's own site in this pass.
- **Probable ASL use case:** Same category as Tinyman.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed.
  Unverified.
- **Public contact route:** Public site/socials; no named contact found.
- **Score:** 3/5 + 1/5 + 2/5 = **6/15** (unchanged).
- **Assumptions this target can test:** A-005 (secondary data point to Tinyman).

### Ranked top three — developer/application side (revised)

| Rank | Target | Score | Change from prior draft | Why ranked here |
| --- | --- | --- | --- | --- |
| 1 | **Folks Finance** | 10/15 | **Up from rank 2** | Only developer target with a Primary-confirmed (official docs + forum) RWA-issuer integration — the strongest sourced evidence of issuer↔developer connection on Algorand found in this research. |
| 2 | **CompX Labs** | 9/15 | **Down from 11/15, down from rank 1** | Plausible dual-issuer integration (Meld + Lofty), but the strongest version of that claim rests on a coin-data aggregator, not CompX's own documentation — downgraded pending confirmation, still worth an interview to resolve the sourcing gap directly. |
| 3 | **Tinyman** | 7/15 | **New to top 3, replaces Pera Wallet** | Best available *application* (not distribution/wallet) target for testing whether compliant-transfer enforcement is something a DEX would actually adopt — categorically closer to "developer demand for ASL's core primitive" than Pera Wallet, even at a lower raw score. |

**Honest caveat, unchanged:** general Algorand DeFi activity is not developer demand
for ASL specifically. Folks Finance and CompX are ranked highest because they have (or
plausibly have) *already paid an integration cost once* and can speak concretely to
whether repeating it for a second/third issuer was painful — that is a falsifiable
question, not an opinion. CompX's ranking is provisional on confirming the Meld/Lofty
claims directly with CompX; if an interview cannot confirm them, CompX's fit is closer
to Tinyman's (unconfirmed/no direct evidence) than to Folks Finance's.

---

## Section C — Competitive, historical, or base-rate references

**These are not outreach candidates.** They are listed for competitive-analysis and
evidence-base-rate value only, per CLAUDE.md's instruction to compare ASL against
direct issuer integrations and existing platforms. Do not contact any organization in
this section as part of `docs/business/outreach-plan.md`, and do not count them toward
the "5–10 issuer targets" or "≥5 developer prospects" outreach quotas.

### Pera Wallet — distribution/ecosystem stakeholder (not an application-demand signal)

- **Organization/project:** Pera Wallet — Algorand's most widely adopted
  self-custodial wallet.
- **Current Algorand activity:** Core Algorand ecosystem infrastructure; publishes a
  JS SDK for web integration. **Primary:** [github.com/perawallet/pera-wallet](https://github.com/perawallet/pera-wallet)
  (official repo). **Secondary:** [genfinity.io](https://genfinity.io/2025/03/27/pera-wallet-overview-algorand/) for the
  post-quantum/institutional-features claim — not independently re-verified against
  Pera's own site in this pass; treat that specific detail as Unverified.
- **Why it's categorized here, not in Section B:** A wallet supports whatever assets
  exist on-chain; it doesn't decide to integrate a specific issuer's compliance rules
  the way a lending protocol or DEX does. Pera is valuable as a **distribution
  partner** (any ASL-based compliant-asset flow eventually needs holders to actually
  use a wallet) and as an ecosystem-centrality signal, but scoring it alongside Folks
  Finance/CompX/Tinyman in the prior draft conflated "important Algorand stakeholder"
  with "evidence of developer demand for ASL's specific value proposition." That was
  an error this correction fixes.
- **If ever contacted:** Frame as a distribution/GTM conversation, not a
  demand-validation interview, and log any resulting evidence in
  `evidence-log.md` accordingly (do not credit it toward A-002b).

### Republic (Republic Note) — historical, current Algorand status Unverified

- **Category:** Broker / issuer (crowdfunding + digital-securities platform).
- **Original claim:** Republic Note was announced to launch on Algorand.
  **Primary (historical):** [algorand.com/resources/ecosystem-announcements](https://www.algorand.com/resources/ecosystem-announcements/republic-note-to-launch-on-algorand/)
  (Algorand's own announcement) and [republic.co](https://republic.co/blog/introducing-the-note-token-a-digital-security)
  (Republic's own blog) — but both are from the token's original launch period and
  were not re-dated in this pass; treat the launch announcement itself as solid but
  **historical**.
- **Current status — corrected:** A search for current (2025–2026) status turned up
  only a **Secondary**, low-confidence source (an LBank market-data page) suggesting
  Republic Note "has since expanded to the Avalanche blockchain," with a reported
  market cap of $0 and ~$1K daily volume — **that figure pattern is itself a signal
  the data may be stale or the market thin, not a confirmation of anything**. Republic's
  own current site (`republic.com/note`) could not be fetched in this research pass
  (403 response). **No current primary source confirms Republic Note is actively
  deployed or traded on Algorand today.** This corrects the prior draft, which treated
  the original 2021-era launch announcement as if it described current state.
- **Disposition:** Moved out of actionable outreach candidates. If founder interest
  in Republic specifically arises, the first step should be re-verifying current
  chain/status via `republic.com/note` directly (retry the fetch or check manually)
  before any outreach, not resuming outreach on the strength of the original
  announcement.

### abrdn (via Archax / Quantoz) — base-rate reference only, do not contact

- Not the technical decision-maker for the Algorand integration (Archax and Quantoz
  did that work). Useful only as evidence that a large traditional asset manager will
  allow a fund to be represented on Algorand at all (A-004 base rate). **Primary:**
  [prnewswire.com/Archax release](https://www.prnewswire.com/news-releases/archax-makes-abrdn-money-market-fund-accessible-and-transferable-on-algorand-blockchain-using-quantoz-eurd-electronic-money-token-302183395.html) (Archax's own wire release).
  **Do not contact** — not an outreach target.

### Securitize — competitive reference, do not contact

- **Category:** Compliance provider / tokenization provider (competitor pattern).
- **Currently supported chains:** Ethereum, Solana, Polygon, Avalanche, Arbitrum,
  Optimism, Aptos, BNB Chain, per **Primary** sources ([securitize.io](https://securitize.io/),
  [build.avax.network/integrations/securitize](https://build.avax.network/integrations/securitize)). **Algorand does not appear
  in any source reviewed** — this is absence of evidence in the sources checked, not a
  confirmed statement from Securitize that it does not or will not support Algorand.
  The prior draft's "confirmed absence" language overstated this and has been
  corrected.
- **Why it matters:** Proves regulated multi-chain tokenization infrastructure is a
  real, fundable business model (reportedly $4.6B AUM, **Secondary**/atomicwallet.io —
  not independently verified against a Securitize-published AUM figure in this pass).
  Also the clearest test of R-0001: if Securitize adds an Algorand integration, ASL's
  "common interface" pitch is directly undercut by a much better-capitalized
  incumbent.
- **Do not contact** — not an outreach target; feeds the competitor-analysis roadmap
  item (0.1, not yet written) and R-0001 directly.

### Tokeny (ERC-3643) — competitive/design reference, do not contact

- **Category:** Compliance provider (permissioned-token standard/tooling vendor), not
  an issuer.
- **Currently supported chains:** Ethereum / EVM-compatible chains, per **Primary**
  ([tokeny.com/erc3643](https://tokeny.com/erc3643/), [erc3643.org](https://www.erc3643.org/)). No source reviewed
  mentions Algorand support; again, absence of evidence in sources checked, not a
  confirmed non-support statement. ERC-3643 is an Ethereum token-interface standard by
  construction, so porting it to Algorand's ASA model would require a from-scratch
  reimplementation, not a simple chain add — that structural point is a reasonable
  inference from the standard's design, not itself sourced to a Tokeny statement about
  Algorand.
- **Why it matters:** Useful as a "what does a mature compliance-token standard look
  like" design reference for `docs/responsibility-matrix.md`, and as the same R-0001
  redundancy-risk data point as Securitize.
- **Do not contact** — not an outreach target.

---

## Change note (correction pass, 2026-07-19)

Summary of what moved and why, for traceability against the prior draft:

- **Removed** the blanket "all entries use current primary sources" claim; added
  explicit Primary/Secondary labeling throughout.
- **Quantoz Payments:** chain support corrected from "Algorand only, others
  Unverified" to "Algorand, Ethereum, Polygon, XRPL, Xahau, Stellar — Primary
  confirmed." Score raised 10→12/15 (Fit 4→5, Signal 4→5). Moved from rank 2 to
  rank 1.
- **Archax:** unchanged at 11/15; moved from rank 1 to rank 2 (displaced by Quantoz,
  not by any change to Archax's own evidence).
- **Midas:** Signal score corrected 4→2 (a single launch-day $2M transaction is
  launch evidence, not sustained-volume evidence). Score dropped 8→6/15; dropped out
  of the top three.
- **Meld Gold:** unchanged at 8/15; entered the top three (replacing Midas) because it
  has the only Primary-confirmed cross-application integration among issuer targets.
- **Republic:** moved out of actionable candidates entirely into Section C
  (historical/Unverified) — the original 2021-era launch announcement was being read
  as current status without a current primary source confirming it.
- **abrdn, Securitize, Tokeny:** moved into a clearly separated Section C
  (references, do not contact) instead of being numbered alongside actionable
  candidates in one combined list.
- **Securitize/Tokeny chain-support:** "confirmed absence" language removed and
  replaced with "absence of evidence in sources checked."
- **CompX Labs:** RWA-adjacency score corrected 5→3 (the two-issuer-integration claim
  is Secondary-sourced/aggregator-based, not confirmed by CompX's own official
  documentation as checked in this pass). Score dropped 11→9/15; dropped from rank 1
  to rank 2 in the developer ranking.
- **Folks Finance:** unchanged at 10/15; moved to rank 1 in the developer ranking
  (displacing CompX) because its RWA integration is Primary-confirmed via official
  Folks Finance docs and forum, not just an aggregator claim.
- **Pera Wallet:** removed from the ranked developer top three and recategorized into
  Section C as a distribution/ecosystem stakeholder — its high prior score reflected
  general ecosystem prominence, not evidence of application-level demand for ASL's
  compliance/transfer-enforcement value proposition.
- **Tinyman:** entered the developer top three at rank 3 (unchanged score, 7/15) as
  the best available *application* target for compliant-transfer demand-validation,
  on the reasoning that categorical fit for A-002b/A-005 matters more for this
  specific ranking than raw prominence.

## Research method note

Entries above were produced via web search and direct fetches of official sites/docs
against public sources (company sites and documentation, Algorand Foundation
properties, GitHub, and — where no Primary source was available — trade press and
aggregators, explicitly labeled as Secondary) between 2026-07-19 and this correction
pass, same date. No sandbox was accessed, no vendor was contacted, and no non-public
information was used. Where a claim could not be independently corroborated by a
Primary source, it is marked Unverified or explicitly attributed to a Secondary
source rather than presented as confirmed.
