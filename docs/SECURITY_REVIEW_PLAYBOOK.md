# Security Review Playbook

## Purpose

This playbook turns security into a release process. It covers hostile outsiders, compromised insiders, malicious providers, careless developers, supply-chain attackers, economic attackers, scammers, and impersonators.

It reduces risk; it cannot guarantee that ASL will never be compromised.

## Threat actors

- External attacker seeking keys, assets, data, or service control
- Compromised or malicious issuer, compliance, corporate-action, or emergency administrator
- Malicious developer attempting to bypass instrument policy
- Ineligible or Sybil wallet attempting credential or geographic-policy bypass
- Provider or webhook sender replaying, forging, reordering, or suppressing events
- Dependency, CI runner, package registry, or maintainer compromise
- Oracle, indexer, RPC, or data-source manipulator
- Economic attacker exploiting pools, prices, timing, rounding, or corporate actions
- Scammer impersonating ASL, an issuer, a support agent, a token, or a website
- Insider accidentally exposing secrets or deploying the wrong configuration

## Attack-surface registry

Every introduced entry point must be added here and reviewed before its roadmap task is complete.

| Surface | Entry points to review | Primary failure modes | Required controls/evidence |
|---|---|---|---|
| GitHub and source | Accounts, apps, branches, PRs, Actions, releases | Account takeover, malicious commit, secret leak, workflow token abuse | MFA, least-privilege app access, protected main, required reviews/checks, pinned actions, secret scanning |
| Developer environment | `.env`, shells, LocalNet wallets, logs, fixtures | Mnemonic/API-key commit, poisoned environment, unsafe copy/paste | Mock keys only, secret patterns, environment templates, clean-clone test |
| Dependencies | npm, AlgoKit, contract/compiler toolchain | Typosquatting, compromised package, malicious install script | Lockfile, dependency review, vulnerability scan, provenance and version policy |
| Build and deployment | CI artifacts, deployer, network config | Wrong network, altered artifact, unauthorized deployment | Reproducible build, signed/tagged release, network assertion, deployment manifest |
| ASA/controller | Every public ABI method, app call, inner transaction | Transfer bypass, unauthorized mint/clawback/freeze, rekey/close abuse, state corruption | Default-frozen asset, least privilege, invariant and adversarial tests, isolated controller |
| Administrative roles | Issuer, compliance, corporate action, guardian, governance | Privilege escalation, role collision, key compromise, permanent pause | Separate roles, rotation/recovery, multisig/institutional custody, timelock where appropriate |
| Compliance credentials | Issue, verify, expire, revoke, cache | Forgery, replay, stale decision, policy confusion, PII leakage | Signatures, nonce/idempotency, expiry, revocation, domain separation, off-chain PII |
| Issuer API | Authentication, subscriptions, redemptions, status | Forged approval, duplicate issue, confused deputy, provider outage | Capability checks, scoped auth, idempotency, reconciliation, fail-closed rules |
| Webhooks | HTTP endpoint, signature, retries, ordering | Spoofing, replay, reordering, event loss, SSRF | Signature and timestamp verification, nonce/idempotency, allowlist where useful, durable queue |
| Public API/SDK | Auth, validation, pagination, signing requests | Injection, authorization bypass, denial of service, unsafe transaction | Schema validation, rate limits, object-level authorization, safe transaction construction |
| Database/indexer | Writes, queries, chain reorg/round handling | Corruption, stale state, injection, false holder or supply data | Least privilege, migrations, reconciliation, deterministic replay, no authority decisions from index alone |
| Oracle/data | Price, NAV, FX, rates, events | Stale/manipulated values, decimal error, unavailable source | Multiple sources where required, freshness, bounds, decimals, circuit breakers, provenance |
| Corporate actions | Snapshot, dividend, split, merger, delisting | Double claim, wrong record owner, pool ownership error, rounding loss | Record-round rule, claim bitmap/idempotency, reconciliation, pooled-asset policy |
| Wallet/UI | Connect, transaction prompt, links, notifications | Blind signing, phishing, address substitution, fake asset | Human-readable intent, verified asset/contract registry, domain warning, no seed phrase collection |
| Monitoring/logging | Events, alerts, dashboards, support access | PII/secret leak, tampering, alert suppression | Structured non-PII logs, integrity, access control, retention, tested alerts |
| Liquidity/economics | Pools, fees, locks, rewards | Manipulation, sandwiching, oracle attack, insolvency, illegal venue activity | Out of MVP; separate economic and regulatory review before implementation |
| Bridges/cross-chain | Mint/burn, relayer, finality, messages | Double mint, validator compromise, replay, inconsistent freezes | Out of MVP; issuer authorization and independent bridge threat model required |
| Brand and support | Domains, social accounts, token listings, support messages | Fake token, fake presale, impersonation, wallet-draining support scam | Verified channels, contract registry, no-DM/no-seed policy, signed announcements, takedown process |

## Review triggers

Run a security review when any of these changes:

- public contract method, ABI, state schema, inner transaction, or asset authority;
- administrator, key, credential, authorization, or recovery path;
- external API, webhook, wallet transaction, oracle, indexer, or database write;
- dependency, compiler, CI workflow, deployment process, network, or secret handling;
- issuer adapter, supply/reconciliation rule, corporate action, or economic calculation;
- public domain, asset identifier, contract registry, support channel, or release artifact.

## Triple-review procedure

### Pass 1: builder review

- Pin the exact branch and commit.
- List changed entry points and trust boundaries.
- State security invariants and assets at risk.
- Add normal, boundary, failure, and authorization tests.
- Test replay, duplication, ordering, stale data, wrong network, and provider outage.
- Record findings even if fixed immediately.

### Pass 2: adversarial review

Use a different reviewer or isolated context. Attempt:

- direct ASA transfer and controller bypass;
- unauthorized mint, reserve distribution, freeze, clawback, role change, or upgrade;
- rekey, close-out, opt-in, group-transaction, fee, and inner-transaction abuse;
- forged, expired, revoked, replayed, cross-policy, or cross-instrument credentials;
- webhook forgery, replay, SSRF, reordering, partial failure, and duplicate processing;
- API object-level authorization bypass, injection, rate abuse, and denial of service;
- supply, decimal, rounding, snapshot, double-claim, and reconciliation failures;
- malicious dependency, workflow, environment, or deployment configuration;
- phishing, fake token, fake support, address substitution, and misleading wallet prompts.

### Pass 3: release review

- Run all automated tests, static checks, dependency checks, secret scans, and `npm run gate:security`.
- Confirm evidence corresponds to the exact release commit.
- Confirm no open Critical or High finding affects the release gate.
- Confirm deployment target, artifact, asset/controller identifiers, and administrator addresses.
- Confirm rollback/pause, monitoring, alerting, and incident owners.
- Require an independent professional audit before MainNet or real regulated assets.

## Severity and release rules

| Severity | Meaning | Rule |
|---|---|---|
| Critical | Direct asset/supply/admin compromise, private-key exposure, compliance bypass, or systemic loss | Stop work on affected release; cannot be accepted |
| High | Practical privilege, integrity, availability, fraud, or sensitive-data compromise | Blocks affected release; cannot remain open for MainNet/real assets |
| Medium | Limited exploit or important defense weakness | Must have owner, deadline, and explicit release decision |
| Low | Hardening or low-impact weakness | Track and schedule |
| Info | Observation without current exploit impact | Record for future design |

## Smart-contract invariants

Before controller implementation, turn each invariant into a property or adversarial test:

- Only issuer-authorized supply can enter circulation.
- Circulating plus reserve plus properly accounted redeemed/burned units reconciles to authorized supply.
- No direct transfer bypasses sender and recipient policy.
- No role can silently acquire another role's authority.
- Emergency pause is instrument-scoped, observable, recoverable, and cannot mint or seize.
- Credential, issuer authorization, webhook, and corporate-action replays are harmless.
- Corporate-action claims cannot be duplicated or redirected.
- One instrument's failure cannot corrupt or pause another instrument.
- Personal identity information never appears on-chain or in committed fixtures/logs.

## Scam and social-engineering controls

- ASL never asks for seed phrases or private keys.
- The mock MVP never asks users to deposit money or purchase a security.
- Publish one canonical registry for official domains, repositories, asset IDs, app IDs, and administrator addresses before public testing.
- Label all mock assets clearly and make them economically worthless.
- Treat unsolicited “issuer,” “auditor,” “investor,” listing, support, and recovery requests as unverified until independently confirmed.
- Verify sensitive instructions through a second channel and require multiple approvers for production changes.
- Never copy addresses or deployment commands from unverified chat messages.

## Incident sequence

1. Preserve evidence and open a private incident record.
2. Pause only the affected instrument or service when authorized.
3. Rotate exposed credentials and revoke affected sessions.
4. Reconcile supply, roles, transactions, provider events, and logs.
5. Notify accountable issuer/security owners through verified channels.
6. Patch on a dedicated branch and run all three review passes.
7. Document impact, timeline, root cause, remediation, and residual risk.
8. Resume only with explicit accountable approval.

## Review record template

Add each review and finding to `SECURITY_AUDIT_LOG.md` with exact commit, scope, reviewer, severity, evidence, remediation owner, target gate, retest result, and final status.
