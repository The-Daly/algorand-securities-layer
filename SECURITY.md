# ASL Security Policy

ASL is currently a mock-only research and development project. It is not approved for real securities, customer funds, MainNet, production keys, or real-money liquidity.

## Report a vulnerability privately

Do not open a public issue containing an exploit, secret, private key, personal information, or vulnerability details.

Use a [private GitHub security advisory](https://github.com/The-Daly/algorand-securities-layer/security/advisories/new). Include the affected commit, component, reproduction steps, impact, and any suggested mitigation. If private reporting is unavailable, report only that a private security channel is needed; do not disclose the vulnerability publicly.

## Security promises we do not make

- Passing tests does not make ASL secure.
- Mock-asset safety does not establish production safety.
- Documentation review is not an independent smart-contract audit.
- ASL will not claim production readiness while a release-blocking finding remains open.
- Repository visibility is not a security boundary: no secrets, keys, private issuer
  material, PII, or confidential legal documents may be committed whether the repository
  is public or private.

## Release boundaries

Open Critical or High findings block the affected release gate. MainNet or real regulated assets additionally require issuer authorization, qualified legal review, institutional key-management procedures, incident response, continuous monitoring, and an independent professional security review.

The live record is [SECURITY_AUDIT_LOG.md](SECURITY_AUDIT_LOG.md). The review procedure is [docs/SECURITY_REVIEW_PLAYBOOK.md](docs/SECURITY_REVIEW_PLAYBOOK.md).
