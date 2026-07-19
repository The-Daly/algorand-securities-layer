# Main-branch protection (required settings)

These protections make the security operating system enforceable rather than advisory.
They are part of the mitigation path for **SEC-008** (the Markdown gate is a procedural
control, not a cryptographic one).

## Required settings on `main`

| Setting | Value |
| --- | --- |
| Require a pull request before merging | **On** |
| Required approvals | **0** for now — solo account (PR #1 is authored by `The-Daly`, which cannot self-approve). Raise to **1** when a second trusted reviewer is added. |
| Dismiss stale approvals on new commits | **On** |
| Require review from Code Owners | **Advisory** — CODEOWNERS auto-requests review; turn **On** with the required approval once a second reviewer exists. |
| Require status checks to pass | **On** — required check: **`project-audit`** (runs `npm run check`); **strict** (branch must be up to date) |
| Require conversation resolution before merging | **On** |
| Require linear history | **On** (compatible with squash merge) |
| Block force pushes | **On** (`allow_force_pushes: false`) |
| Block branch deletion | **On** (`allow_deletions: false`) |
| Include administrators (`enforce_admins`) | **On** — protection applies to admins too |

**Do not** add `gate:security` or `gate:mainnet` as required PR checks — they intentionally
fail until their applicable findings are resolved. `project-audit` (`npm run check`) is the
structural PR gate. Release gates are run separately, per release candidate.

## Apply via GitHub CLI (requires admin)

```bash
gh api -X PUT repos/The-Daly/algorand-securities-layer/branches/main/protection \
  --input docs/branch-protection.json
```

…where `branch-protection.json` is:

```json
{
  "required_status_checks": { "strict": true, "contexts": ["project-audit"] },
  "enforce_admins": true,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": false,
    "required_approving_review_count": 0
  },
  "restrictions": null,
  "required_conversation_resolution": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_linear_history": true
}
```

## Apply via the web UI

Settings → Branches → Add branch ruleset / protection rule for `main`, then enable each row
in the table above. Add `project-audit` under "Require status checks to pass."

## Applied status

**ENFORCED — API-confirmed on 2026-07-19.** After the founder made the repo **public**
(D-0013), branch protection became available on the free plan and was applied. `GET
.../branches/main` returns `protected: true`, and the protection object matches the JSON
above (strict `project-audit` check, `enforce_admins` on, PR required with 0 approvals,
conversation resolution, no force-push/deletion, linear history).

Also enabled (free on public repos): secret scanning + push protection, Dependabot alerts
and automated security fixes, and private vulnerability reporting. Dependency graph is on by
default for public repositories.

> **Repository visibility is not a security boundary.** Public or private, no secrets, keys,
> private issuer material, PII, or confidential legal documents may ever be committed. Secret
> scanning + push protection are a backstop, not a licence to relax this rule.

**Deferred (solo-account limitation):** one required approval and required CODEOWNER review
must be enabled once a second trusted GitHub reviewer is added — an account cannot approve
its own PR. Tracked as a roadmap task and as SEC-001 residual risk.

Verify state anytime with:

```bash
gh api repos/The-Daly/algorand-securities-layer/branches/main/protection
gh api repos/The-Daly/algorand-securities-layer/branches/main --jq .protected
```
