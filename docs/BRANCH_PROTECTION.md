# Main-branch protection (required settings)

These protections make the security operating system enforceable rather than advisory.
They are part of the mitigation path for **SEC-008** (the Markdown gate is a procedural
control, not a cryptographic one).

## Required settings on `main`

| Setting | Value |
| --- | --- |
| Require a pull request before merging | **On** |
| Required approvals | **1** |
| Dismiss stale approvals on new commits | **On** |
| Require review from Code Owners | **On** (see [`.github/CODEOWNERS`](../.github/CODEOWNERS)) |
| Require status checks to pass | **On** — required check: **`project-audit`** (runs `npm run check`) |
| Require conversation resolution before merging | **On** |
| Block force pushes | **On** (`allow_force_pushes: false`) |
| Block branch deletion | **On** (`allow_deletions: false`) |
| Include administrators (`enforce_admins`) | **Off** — admins may bypass to merge the initial PR; do not rely on this for routine work |

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
  "required_status_checks": { "strict": false, "contexts": ["project-audit"] },
  "enforce_admins": false,
  "required_pull_request_reviews": {
    "dismiss_stale_reviews": true,
    "require_code_owner_reviews": true,
    "required_approving_review_count": 1
  },
  "restrictions": null,
  "required_conversation_resolution": true,
  "allow_force_pushes": false,
  "allow_deletions": false
}
```

## Apply via the web UI

Settings → Branches → Add branch ruleset / protection rule for `main`, then enable each row
in the table above. Add `project-audit` under "Require status checks to pass."

## Applied status

**NOT yet enforced.** On 2026-07-19 both the classic branch-protection API and the
repository rulesets API returned HTTP 403:

> "Upgrade to GitHub Pro or make this repository public to enable this feature."

Branch protection / rulesets are unavailable on a **private repository on the free plan**.
This is a billing limitation, not a permissions one — the operator has repo admin. To
enforce the settings above, pick one:

1. **Upgrade to GitHub Pro** (paid → needs founder approval and a decision record per
   D-0011), then run the `gh api ... PUT ... /branches/main/protection` command above (or
   the rulesets equivalent). The operator can apply it in seconds once the plan allows.
2. **Keep private + unprotected for now.** CODEOWNERS still *auto-requests* `@The-Daly`
   review on PRs, and the `project-audit` CI still runs on every PR — but neither is
   *required* to merge. Discipline is manual and **SEC-008 stays Open**.
3. Making the repo public would enable free protection, but is rejected — D-0007 keeps it private.

Until one of these is done, required-review and required-check enforcement is **advisory**.
Verify state anytime with:

```bash
gh api repos/The-Daly/algorand-securities-layer/branches/main/protection
```
