# External Validation — Target Shortlist

Status: **desk research only — no outreach sent, no relationship exists with any
organization listed below.** This document is an input to outreach, not evidence of
demand. See [`docs/business/evidence-log.md`](evidence-log.md), which correctly starts
every row as `Not contacted`.

All entries use current primary sources (company sites, Algorand Foundation
announcements, regulator/press releases) verified on **2026-07-19** unless noted
otherwise. Anything not confirmed by a primary source is marked **Unverified**. No
licensing status, partnership, contact relationship, chain-support claim, or sandbox
access is invented — where a source does not say it, this document says "not stated,"
not that it's true.

**Scoring model (0–15, three factors scored 0–5 each):**
- **Fit** — does the org's actual activity plausibly need ASL's specific value
  proposition (multi-issuer common interface, compliance-policy orchestration,
  indexing/reconciliation across issuers) rather than a single point integration it can
  already build itself?
- **Reachability** — is there a real, named, public contact route (not just a generic
  `info@` inbox)?
- **Signal strength** — is there public evidence of *ongoing* Algorand/RWA activity
  (production deployment, repeated announcements), not a single one-off press release?

Scores are a prioritization aid for outreach ordering, not a validity claim. A high
score means "worth contacting first," not "will say yes."

---

## Part 1 — Issuer / provider targets

### 1. Archax

- **Category:** Broker / custodian / regulated digital-securities exchange.
- **Assets offered:** Tokenized equities (FTSE 100 stocks), UK government debt, money
  market funds (abrdn), UCITS funds (BNY Investments). ([archax.com](https://archax.com/insights/archax-extends-tokenised-rwa-universe-to-bring-equities-and-government-debt-on-chain), [crowdfundinsider.com](https://www.crowdfundinsider.com/2026/05/282804-digital-assets-firm-archax-expands-tokenized-asset-offerings-with-bny-investments-ucits-funds/))
- **Jurisdictions publicly served:** UK-regulated (FCA-authorized exchange, broker,
  custodian); products described as reaching EEA/global institutional clients. ([blog.archax.com](https://blog.archax.com/resources/news/algorand-and-archax-partner-for-new-wave-of-sophisticated-financial-products))
- **Currently supported chains:** Algorand, Aptos, Arbitrum, Canton, Cardano, Ethereum,
  Etherlink, Hedera, Solana, Stellar, XDC, XRPL — explicitly multi-chain by design.
  ([genfinity.io](https://genfinity.io/2024/12/10/archax-tokenization-growth/), [cointrust.com](https://www.cointrust.com/market-news/archax-to-facilitate-trading-of-tokenized-ftse100-stocks-and-uk-debt-on-ethereum-polygon-and-algorand-blockchains))
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter:** Archax is *already* deliberately multi-chain — this
  is the one target on this list whose business model literally requires operating
  across many issuer/chain integrations at once, which is closest to ASL's "common
  interface" thesis (A-001).
- **Why ASL might be redundant:** Archax already shipped a live, multi-chain product
  (abrdn fund on Algorand via Quantoz's EURD) without ASL, using Quantoz + the Algorand
  Foundation directly. It has its own tokenization engine and evidently does not lack the
  technical capability to add a chain. ASL would need to prove it removes real
  integration cost Archax's existing team doesn't already absorb.
- **Public contact / partnership route:** General inquiry via [archax.com](https://archax.com/) contact
  form; no named business-development contact found. Unverified beyond that.
- **Score:** Fit 4 / Reach 2 / Signal 5 = **11/15**
- **Assumptions this target can test:** A-001 (moat vs. wrapper — Archax already
  multi-chain, so it can say precisely what a common layer would or wouldn't save them),
  A-002a (issuer/provider demand), A-004 (is Algorand credible vs. their other 11 chains).
- **Disqualifying concerns:** UK-regulated institutional exchange; a solo pre-revenue
  founder with a $300 budget and no track record is an improbable vendor for this scale
  of counterparty. Realistic best case from outreach is a discovery conversation, not a
  partnership.

### 2. Quantoz Payments

- **Category:** Infrastructure / issuer (regulated e-money token issuer).
- **Assets offered:** EURD — a MiCAR-regulated electronic money token (EMT), not a
  security or stablecoin by their own description. ([quantoz.com](https://www.quantoz.com/blog/quantoz-payments-announces-the-launch-of-a-regulated-and-programmable-euro-on-the-algorand-network))
- **Jurisdictions publicly served:** Netherlands / EEA — licensed as an Electronic Money
  Institution by De Nederlandsche Bank (Dutch Central Bank). ([cryptopotato.com](https://cryptopotato.com/quantoz-payments-secures-license-to-issue-eurd-on-algorand-blockchain/))
- **Currently supported chains:** Algorand (publicly announced chain for EURD issuance).
  Whether Quantoz issues on other chains was not confirmed in sources reviewed —
  Unverified either way.
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter:** Quantoz is a *bona fide regulated issuer*
  choosing Algorand specifically and already provides the settlement asset (EURD) used in
  the Archax/abrdn deal — i.e., it's plausibly the "compliance provider" layer ASL's
  responsibility matrix assumes exists but hasn't validated with a name.
  ASL's least-privilege compliance-orchestration pitch (A-005) is most testable against
  an issuer like this that already holds a real EMI license and real regulatory exposure.
- **Why ASL might be redundant:** Quantoz already built and operates its own issuance
  and settlement stack; EURD is live in production with the Algorand Foundation as a
  direct partner. There is no visible integration gap ASL is positioned to fill unless
  Quantoz specifically lacks multi-issuer distribution tooling for the *businesses*
  building on top of EURD (unconfirmed).
- **Public contact / partnership route:** [quantoz.com](https://www.quantoz.com/) contact page; no named
  business-development contact found. Unverified beyond that.
- **Score:** Fit 4 / Reach 2 / Signal 4 = **10/15**
- **Assumptions this target can test:** A-002a, A-003 (they are a real regulated
  counterparty who could speak concretely to the authority-model split), A-005.
- **Disqualifying concerns:** Regulated EMI with direct Algorand Foundation
  relationship; may see ASL as unnecessary middleware between it and its own developer
  base rather than useful infrastructure.

### 3. Midas

- **Category:** Tokenization provider / issuer.
- **Assets offered:** mTBILL — tokenized certificate referencing short-term U.S.
  Treasury ETFs (e.g., BlackRock IB01, BUIDL), targeted at European retail. ([algorand.co](https://algorand.co/blog/midas-a-fully-regulated-german-tokenization-platform-launches-the-mtbill-token-on-algorand), [coinedition.com](https://coinedition.com/midas-mtbill-algorand-tbills/))
- **Jurisdictions publicly served:** Described as serving European retail investors;
  Midas is described as a "fully regulated German tokenization platform" — the specific
  license/regulator was not named in sources reviewed. Unverified detail.
- **Currently supported chains:** Algorand confirmed live (first atomic-swap
  transaction reported 2025-05-27, $2M USDC↔mTBILL). Whether Midas issues mTBILL or
  other products on other chains was not confirmed in sources reviewed — Unverified.
- **API or sandbox evidence:** mTBILL is described as "permissionless" and "fully DeFi
  composable" — implies public on-chain integration surface exists, but no formal
  API/sandbox documentation was found. Unverified.
- **Why Algorand/ASL might matter:** Midas explicitly chose Algorand and is already
  live with a real yield-bearing product and real (if modest) trading volume — the
  strongest "Algorand demand is real, not hypothetical" data point on this list (A-004).
- **Why ASL might be redundant:** Same pattern as Archax/Quantoz — Midas shipped without
  ASL, working directly with the Algorand Foundation. No public evidence Midas is
  seeking a third-party compliance/orchestration layer.
- **Public contact / partnership route:** Not found in sources reviewed. Unverified.
- **Score:** Fit 3 / Reach 1 / Signal 4 = **8/15**
- **Assumptions this target can test:** A-002a, A-004 (strongest single data point for
  "is Algorand credible" — but note this is evidence Algorand chose Midas, not that
  Midas needs ASL).
- **Disqualifying concerns:** No named contact found; regulated European entity, same
  scale mismatch concern as Archax/Quantoz.

### 4. Republic (Republic Note)

- **Category:** Broker / issuer (crowdfunding + digital-securities platform).
- **Assets offered:** Republic Note — a profit-sharing token that pays holders when
  startups/private equity funded via Republic's investment platforms are acquired or go
  public. ([republic.co](https://republic.co/blog/introducing-the-note-token-a-digital-security), [algorand.com](https://www.algorand.com/resources/ecosystem-announcements/republic-note-to-launch-on-algorand/))
- **Jurisdictions publicly served:** Offered to both accredited and retail (implies
  U.S. Reg CF/Reg A-type exempt-offering framework); not itemized by jurisdiction in
  sources reviewed. Unverified detail.
- **Currently supported chains:** Algorand (announced launch chain). Whether Republic
  operates other chains for other products was not confirmed. Unverified.
- **API or sandbox evidence:** Not found. Unverified.
- **Why Algorand/ASL might matter:** Republic is a platform with an existing large base
  of startups being tokenized/funded — if Republic ever extends token issuance beyond
  the single Note instrument to per-company tokens, that is a genuinely multi-issuer
  pattern ASL's thesis targets. Currently Unverified whether that extension is planned.
- **Why ASL might be redundant:** Republic Note is a single, centrally issued
  instrument, not a multi-issuer marketplace today; the "why not just build it
  in-house" test (A-001) is unresolved since Republic already built this without ASL.
- **Public contact / partnership route:** General [republic.co](https://republic.co/) contact channel;
  no named contact found. Unverified.
- **Score:** Fit 2 / Reach 1 / Signal 2 = **5/15**
- **Assumptions this target can test:** A-002a, A-004.
- **Disqualifying concerns:** Announcement is from Republic's ICO-era launch; current
  operational status of Republic Note on Algorand was not reverified beyond the original
  announcement sources — recency of activity is Unverified.

### 5. Lofty (Lofty AI)

- **Category:** Issuer / tokenization provider (vertically integrated).
- **Assets offered:** Fractional real estate — 148 tokenized U.S. properties across 11
  states reported, with token holders forming a legal DAO per property. ([algorand.co](https://algorand.co/case-studies/lofty-transform-real-estate-industry), [lofty.ai](https://www.lofty.ai/help/articles/6145729-which-blockchain-is-lofty-ai-using-to-tokenize-properties))
- **Jurisdictions publicly served:** U.S. only (all properties reported are U.S.-based).
- **Currently supported chains:** Algorand only, per Lofty's own help documentation.
- **API or sandbox evidence:** Not found in public sources. Unverified.
- **Why Algorand/ASL might matter:** Longest-running, highest-volume Algorand RWA
  issuer found in this research (3M+ dollars in rental distributions reported) — a real
  production track record, useful as a base-rate/credibility reference even if Lofty
  itself doesn't become a customer.
- **Why ASL might be redundant:** Lofty is fully vertically integrated — it built its
  own tokenization, DAO-governance, and distribution stack in-house and has no visible
  reason to re-platform onto a third-party compliance layer for an already-working
  product. This is the clearest evidence *against* the "issuers want common
  infrastructure" assumption (A-001) found in this research round: the most successful
  Algorand RWA issuer chose NOT to use shared infrastructure.
- **Public contact / partnership route:** [lofty.ai](https://www.lofty.ai/) support/contact channel; no
  named business-development contact found.
- **Score:** Fit 1 / Reach 2 / Signal 5 = **8/15**
- **Assumptions this target can test:** A-001 (specifically the "would you rather
  build in-house" test) — Lofty is the highest-value interview target for directly
  attacking this assumption, precisely because they already made the build choice.
- **Disqualifying concerns:** Low product fit — Lofty has no visible integration gap to
  sell into. Worth an interview for A-001 evidence, not a design-partner prospect.

### 6. Meld Gold

- **Category:** Issuer / tokenization provider (vertically integrated).
- **Assets offered:** Gold, silver, and platinum bullion tokens, each redeemable for
  physical metal held across a network of vaults (including Melbourne Mint). ([meld.gold](https://www.meld.gold/token), [decrypt.co](https://decrypt.co/24206/meld-taps-ethereum-rival-algorand-put-gold-blockchain))
- **Jurisdictions publicly served:** Originally an Australian startup; specific
  jurisdictional licensing not itemized in sources reviewed. Unverified detail.
- **Currently supported chains:** Algorand.
- **API or sandbox evidence:** Not found. Unverified. (Meld tokens are already listed as
  collateral on Folks Finance, implying *some* integration surface exists, but no
  formal API/partner-onboarding documentation was found.)
- **Why Algorand/ASL might matter:** Already integrated into a second Algorand
  application (Folks Finance lending) — the one issuer in this list with observable
  *cross-application* usage, a small existing proof point for "issuer supply +
  developer demand meeting on Algorand" (A-002a and A-002b together).
- **Why ASL might be redundant:** Same vertical-integration pattern as Lofty — built
  and shipped without ASL; the Folks Finance integration appears to be direct
  (issuer-to-app), not through any shared compliance/orchestration layer.
- **Public contact / partnership route:** [meld.gold](https://www.meld.gold/) contact channel; no named
  contact found.
- **Score:** Fit 2 / Reach 2 / Signal 4 = **8/15**
- **Assumptions this target can test:** A-001, A-002a, A-002b (the Folks Finance
  integration is worth asking about directly: was it costly/custom, and would a common
  interface have helped?).
- **Disqualifying concerns:** Same "already vertically integrated, no visible gap" concern as Lofty.

### 7. Enel / Conio (ebitts)

- **Category:** Issuer (Enel, asset owner) + infrastructure/tokenization provider
  (Conio, fintech partner).
- **Assets offered:** Fractional ownership of solar and wind generation assets (73
  assets reported), via two token types representing infrastructure ownership and
  metered energy output. ([algorand.co](https://algorand.co/case-studies/enel-tokenizing-renewable-energy-assets-on-algorand), [cointelegraph.com](https://cointelegraph.com/news/fractional-ownership-solar-panels-enel-algorand))
- **Jurisdictions publicly served:** Italy (Enel customers, per "ebitts" program
  branding and Italian-market press coverage).
- **Currently supported chains:** Algorand.
- **API or sandbox evidence:** Not found. Unverified.
- **Why Algorand/ASL might matter:** Enel is a large, non-crypto-native regulated
  utility — the kind of "traditional enterprise issuer" ASL's thesis needs to prove it
  can serve, distinct from crypto-native issuers like Lofty/Meld. Conio (the
  implementation partner) is the more relevant contact than Enel itself for an
  infrastructure conversation.
- **Why ASL might be redundant:** Enel used a named implementation partner (Conio) to
  build this — the "who does the technical work" role ASL wants is already filled by an
  existing vendor relationship.
- **Public contact / partnership route:** No named contact found for either Enel's
  tokenization team or Conio; Unverified.
- **Score:** Fit 2 / Reach 1 / Signal 3 = **6/15**
- **Assumptions this target can test:** A-002a (enterprise/non-crypto-native issuer
  demand specifically), A-004.
- **Disqualifying concerns:** Enel is a multinational utility; Conio is the more
  realistic contact but its willingness to discuss a competing/adjacent infrastructure
  vendor is Unverified and plausibly low.

### 8. abrdn (via Archax / Quantoz)

- **Category:** Issuer (asset manager) — the underlying fund manager, not the chain
  integrator.
- **Assets offered:** A Euro-denominated money market fund, tokenized and made
  accessible/transferable on Algorand using Quantoz's EURD. ([prnewswire.com](https://www.prnewswire.com/news-releases/archax-makes-abrdn-money-market-fund-accessible-and-transferable-on-algorand-blockchain-using-quantoz-eurd-electronic-money-token-302183395.html))
- **Jurisdictions publicly served:** EEA (fund distributed via Archax's regulated UK/EU
  infrastructure). Fund value reported at €3.8B (fund AUM, not the tokenized tranche
  specifically — treat that figure as fund-level, not proof of on-chain scale).
- **Currently supported chains:** Algorand (for this specific tokenized share class,
  via Archax/Quantoz). abrdn's broader tokenization activity on other chains was not
  confirmed in sources reviewed. Unverified.
- **API or sandbox evidence:** Not found. Unverified.
- **Why Algorand/ASL might matter:** Evidence that a large, traditional global asset
  manager (abrdn) is willing to have a fund represented on Algorand at all — useful
  base-rate evidence for A-004, independent of whether abrdn itself is reachable.
- **Why ASL might be redundant:** abrdn is not the technical decision-maker here —
  Archax and Quantoz did the integration work. Contacting abrdn directly is unlikely to
  surface a technical infrastructure conversation; it's better evidence than a lead.
- **Public contact / partnership route:** No named contact found; abrdn is a large
  public asset manager, general IR/press channels only.
- **Score:** Fit 1 / Reach 1 / Signal 3 = **5/15**
- **Assumptions this target can test:** A-004 only, realistically.
- **Disqualifying concerns:** Not a plausible direct outreach target — included for
  completeness/evidence value, not as an outreach priority.

### 9. Securitize

- **Category:** Compliance provider / tokenization provider (direct competitor pattern).
- **Assets offered:** Multi-asset tokenization (equities, funds, credit); SEC-registered
  transfer agent and broker-dealer status claimed. ([securitize.io](https://securitize.io/), [atomicwallet.io](https://atomicwallet.io/academy/articles/what-is-securitize))
- **Jurisdictions publicly served:** U.S.-centric regulatory posture (SEC-registered
  status cited), with stated multi-chain reach.
- **Currently supported chains:** Ethereum, Solana, Polygon, Avalanche, Arbitrum,
  Optimism, Aptos, BNB Chain — **Algorand not listed** in any source reviewed. This is a
  confirmed absence, not an oversight in this research.
- **API or sandbox evidence:** Not evaluated — out of scope since Algorand is not
  currently supported.
- **Why Algorand/ASL might matter:** Not a customer prospect — a competitive reference
  point. Securitize proves regulated multi-chain tokenization infrastructure is a real,
  fundable business model ($4.6B AUM cited) — but it also proves the leading player in
  that model has not prioritized Algorand, which cuts against A-004 (maybe Algorand
  RWA gravity is genuinely smaller than other chains) and is a direct test of R-0001:
  if Securitize adds Algorand support cheaply, does that eliminate ASL's reason to
  exist?
- **Why ASL might be redundant:** This IS the redundancy risk, named directly — if
  Securitize (or Tokeny, below) adds an Algorand adapter, ASL's "common interface"
  pitch is undercut by a much better-capitalized incumbent.
- **Public contact / partnership route:** Not pursued — not an outreach target this
  round; listed for competitive-analysis value.
- **Score:** Fit 0 / Reach 0 / Signal 5 = **5/15** (scored for competitive relevance,
  not outreach priority — see Register hygiene note in the assumptions register: this
  score should not be read as a lead-quality score).
- **Assumptions this target can test:** Not applicable to interview outreach; feeds the
  competitor-analysis roadmap item (0.1, not yet written) and R-0001 directly.
- **Disqualifying concerns:** Not an outreach target — do not contact. Included to
  satisfy the "compare against existing platforms" instruction in CLAUDE.md.

### 10. Tokeny (ERC-3643)

- **Category:** Compliance provider (permissioned-token standard/tooling vendor).
- **Assets offered:** Not an issuer itself — provides the ERC-3643 open-source
  permissioned-token standard and associated tooling for others to issue compliant
  security tokens. ([tokeny.com](https://tokeny.com/erc3643/), [erc3643.org](https://www.erc3643.org/))
- **Jurisdictions publicly served:** Not applicable (protocol/tooling vendor, not a
  regulated issuer itself).
- **Currently supported chains:** Ethereum / EVM-compatible chains. No source reviewed
  mentions Algorand support, and ERC-3643 is an Ethereum token-interface standard by
  construction — **not portable to Algorand's ASA model without a from-scratch
  reimplementation**, not a simple chain add.
- **API or sandbox evidence:** Extensive public documentation exists for EVM
  deployments; not evaluated for Algorand since none exists.
- **Why Algorand/ASL might matter:** Not a customer prospect. Useful as the
  "what does a mature compliance-token standard look like" reference when designing
  ASL's own compliance-policy encoding (responsibility-matrix.md) — arguably more
  useful as a design reference than as an outreach target.
- **Why ASL might be redundant:** Same structural risk as Securitize — a well-adopted,
  open-source, multi-vendor standard exists for EVM chains; ASL is implicitly betting
  that Algorand's non-EVM design and low fees justify a parallel, Algorand-specific
  standard rather than "wait for someone to port ERC-3643-equivalents to Algorand."
- **Public contact / partnership route:** Not pursued — not an outreach target.
- **Score:** Fit 0 / Reach 0 / Signal 3 = **3/15** (competitive-reference only).
- **Assumptions this target can test:** Feeds competitor analysis and R-0001; not an
  interview target.
- **Disqualifying concerns:** Not an outreach target — do not contact.

### Ranked top three — issuer/provider side

| Rank | Target | Score | Why ranked here |
| --- | --- | --- | --- |
| 1 | **Archax** | 11/15 | Only target whose business model is genuinely multi-chain/multi-issuer today, closest structural fit to A-001; highest signal strength (multiple, recent, named product launches). |
| 2 | **Quantoz Payments** | 10/15 | Real regulated issuer with direct Algorand commitment and live product; best target for testing the authority-model questions (A-003, A-005) with someone who actually carries the license. |
| 3 | **Midas** | 8/15 (tie with Lofty/Meld) — ranked 3rd for strongest live trading-volume evidence of Algorand demand specifically | Best available data point that Algorand RWA demand is real and current, even though product fit for ASL specifically is weaker than Archax/Quantoz. |

**Honest caveat:** none of the top three has a visible, unmet integration gap in public
sources — this ranking is "most worth an information-gathering interview," not "most
likely design partner." The strongest evidence against A-001 in this round is that the
two most operationally successful Algorand-native issuers (Lofty, Meld Gold) both
vertically integrated instead of using shared infrastructure.

---

## Part 2 — Developer / application prospects

### 1. Folks Finance

- **Organization/project:** Folks Finance — Algorand-originated, now multichain DeFi
  lending/borrowing protocol.
- **Current Algorand activity:** Originally the leading Algorand DeFi lending protocol;
  described as still operating an Algorand app alongside multichain expansion. ([docs.folks.finance](https://docs.folks.finance/folks-finance-algorand-app-documentation), [dappradar.com](https://dappradar.com/blog/folks-finance-the-leading-lending-protocol-on-algorand))
- **Probable ASL use case:** Consuming a common compliance/eligibility interface to
  safely list additional regulated RWA collateral (beyond Meld gold/silver) from
  multiple issuers without custom-building each integration.
- **Existing issuer/RWA integration:** Confirmed — lists Meld Gold and Meld Silver
  tokens as loan collateral since December 2023; also integrated EURS. This is the
  clearest existing issuer↔developer link found in this research.
- **Why a multi-issuer interface could matter:** Folks Finance already had to do this
  integration once (Meld) and would plausibly need to repeat custom integration work
  for each additional regulated asset issuer — the exact repeated-cost pattern ASL's
  thesis targets. This is Unverified as a stated pain point; it is an inference from the
  existing integration, not something Folks Finance has said.
- **Public contact route:** [folks.finance](https://folks.finance/) / public docs and GitHub
  (`docs.folks.finance`); no named individual contact found.
- **Score:** 4/5 (Algorand activity) + 4/5 (RWA-adjacency, confirmed) + 2/5
  (reachability, no named contact) = **10/15**
- **Assumptions this target can test:** A-002b directly, and can speak concretely to
  the actual integration cost of onboarding Meld (useful evidence for A-001 too).

### 2. CompX Labs

- **Organization/project:** CompX — Algorand structured-products/yield platform
  (absorbed the earlier xBacked protocol).
- **Current Algorand activity:** Live protocol; xUSD stablecoin backed by a basket of
  20 Algorand assets. ([coingecko.com](https://www.coingecko.com/en/coins/compx-xusd))
- **Probable ASL use case:** Onboarding additional regulated RWA collateral/backing
  assets from multiple issuers via a common interface rather than bespoke integration
  per asset.
- **Existing issuer/RWA integration:** Confirmed — xUSD basket explicitly includes
  Meld Gold ($GOLD) and Meld Silver ($SILVER); CompX also announced a Lofty
  integration for auto-compounding/yield optimization on Lofty-related positions.
- **Why a multi-issuer interface could matter:** CompX has now integrated with *two*
  separate RWA issuers (Meld and Lofty) found in this research — the strongest existing
  "developer touching multiple issuers" evidence on this list, though both integrations
  appear to be custom/direct rather than through any shared layer.
- **Public contact route:** [compx-labs GitHub](https://github.com/compx-labs), `@Compxlabs` on X; no
  named individual contact found.
- **Score:** 4/5 + 5/5 (two confirmed issuer integrations) + 2/5 = **11/15**
- **Assumptions this target can test:** A-002b, and directly tests A-001 — CompX is the
  best available target to ask "you've now integrated Meld and Lofty separately; would a
  common interface actually have saved you meaningful time?"

### 3. Pera Wallet

- **Organization/project:** Pera Wallet — Algorand's most widely adopted self-custodial
  wallet.
- **Current Algorand activity:** Core Algorand ecosystem infrastructure; publishes a
  JS SDK for web integration; reported expansion into enterprise-grade features
  (post-quantum accounts/multisig for institutions and treasuries). ([genfinity.io](https://genfinity.io/2025/03/27/pera-wallet-overview-algorand/), [github.com](https://github.com/perawallet/pera-wallet))
- **Probable ASL use case:** Not a direct ASL integration target in the same sense as a
  DeFi app — more relevant as a distribution/reachability partner (any ASL-based
  compliant-asset flow needs a wallet holders actually use) and as a signal source for
  what "institutional-grade" means to the Algorand ecosystem.
- **Existing issuer/RWA integration:** None confirmed specific to RWA; general-purpose
  wallet.
- **Why a multi-issuer interface could matter:** Weakest direct fit of the three ranked
  developer targets — Pera doesn't decide which assets to support the way a DeFi
  protocol does; it's a distribution channel, not an integrator with the "which issuer's
  rules do I enforce" problem ASL is built around.
- **Public contact route:** [perawallet.app](https://perawallet.app/), GitHub `perawallet` org; no named
  contact found.
- **Score:** 5/5 (highest Algorand ecosystem centrality) + 1/5 (no direct RWA
  integration evidence) + 2/5 = **8/15**
- **Assumptions this target can test:** A-002b only weakly; better used as a
  distribution/GTM conversation than an integration-demand interview.

### 4. Tinyman

- **Organization/project:** Tinyman — original Algorand AMM/DEX.
- **Current Algorand activity:** Live, established DEX; described in Algorand's own
  ecosystem materials as a core DeFi builder. ([tinymanorg.medium.com](https://tinymanorg.medium.com/algorand-defi-powerhouse-tinymans-period-10-710ea26d7a90))
- **Probable ASL use case:** Listing compliant RWA trading pairs would require
  enforcing transfer restrictions at the AMM level — directly tests whether ASL's
  "compliant transfer execution" primitive (responsibility-matrix.md) is something a
  DEX would actually adopt versus building its own restriction logic.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed in
  sources reviewed for this round. Unverified either way.
- **Why a multi-issuer interface could matter:** A DEX is the highest-stakes possible
  test of A-005 (does "enforce but don't decide" work) since restricted-asset trading on
  an AMM is legally and technically nontrivial — valuable interview even without prior
  RWA activity.
- **Public contact route:** [tinyman.org](https://tinyman.org/), public Medium/GitHub presence; no
  named contact found.
- **Score:** 4/5 + 1/5 (no confirmed RWA activity) + 2/5 = **7/15**
- **Assumptions this target can test:** A-005 specifically — good target for the
  compliant-transfer-at-a-DEX question even without confirmed prior RWA work.

### 5. Vestige

- **Organization/project:** Vestige — Algorand DEX aggregator and on-chain
  analytics/data platform.
- **Current Algorand activity:** Live; described as "the most reliable data platform
  for Algorand assets." ([vestige.fi](https://vestige.fi/))
- **Probable ASL use case:** Consuming ASL's audit-event/indexing output as a data
  source, or surfacing compliance status (e.g., "this ASA is transfer-restricted") in
  its asset pages — an indexing/reconciliation fit rather than a transfer-execution fit.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed in
  sources reviewed. Unverified.
- **Why a multi-issuer interface could matter:** Tests a different part of ASL's scope
  (indexing/audit events) than the other developer targets, which mostly test transfer
  enforcement or collateral integration — useful for coverage, not because there's
  stronger evidence here than elsewhere.
- **Public contact route:** [vestige.fi](https://vestige.fi/); GitHub organization exists
  (`GoPlausible/vestige-mcp` references Vestige tooling); no named contact found.
- **Score:** 3/5 + 1/5 + 2/5 = **6/15**
- **Assumptions this target can test:** A-002b, specifically for the
  indexing/reconciliation part of ASL's scope rather than compliant-transfer.

### 6. Pact

- **Organization/project:** Pact — Algorand DEX with stable-swap and standard AMM
  pools.
- **Current Algorand activity:** Live; referenced alongside Folks Finance/Tinyman/
  Messina/CompX as part of the current Algorand DeFi liquidity set.
- **Probable ASL use case:** Same category as Tinyman — compliant RWA trading pairs
  requiring transfer-restriction enforcement at the pool level.
- **Existing issuer/RWA integration:** No specific RWA-asset integration confirmed.
  Unverified.
- **Why a multi-issuer interface could matter:** Adds a second DEX data point to
  Tinyman's; not independently stronger evidence, included for completeness of the
  DEX-side sample rather than a distinct signal.
- **Public contact route:** Public site/socials; no named contact found.
- **Score:** 3/5 + 1/5 + 2/5 = **6/15**
- **Assumptions this target can test:** A-005 (secondary data point to Tinyman).

### Ranked top three — developer/application side

| Rank | Target | Score | Why ranked here |
| --- | --- | --- | --- |
| 1 | **CompX Labs** | 11/15 | Only target with *two* confirmed separate RWA-issuer integrations (Meld, Lofty) — best-positioned to give a real, cost-based answer on whether a common interface would have helped. |
| 2 | **Folks Finance** | 10/15 | Confirmed, live RWA collateral integration (Meld Gold/Silver, EURS); strong existing evidence of issuer↔developer connection on Algorand specifically. |
| 3 | **Pera Wallet** | 8/15 | Highest ecosystem centrality and institutional-feature signal, but weakest direct RWA-integration evidence — ranked 3rd as a distribution/GTM conversation, not a pure demand-validation interview. |

**Honest caveat:** general Algorand DeFi activity is not developer demand for ASL
specifically (per CLAUDE.md instruction: "general excitement about RWAs does not
count as evidence"). CompX and Folks Finance are ranked highest because they have
*already paid the integration cost once* and can speak concretely to whether repeating
it for a second/third issuer was painful — that is a falsifiable question, not an
opinion.

---

## Research method note

All entries above were produced via web search against public sources (company sites,
Algorand Foundation/algorand.co posts, mainstream and crypto trade press, GitHub) on
2026-07-19. No sandbox was accessed, no vendor was contacted, and no non-public
information was used. Where a claim could not be independently corroborated (contact
routes, exact license names, non-Algorand chain activity), it is marked Unverified
rather than omitted, so gaps are visible rather than silently assumed away.
