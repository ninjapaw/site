# Ninja Paws HQ

> **Independent community project.** This repository is not a Microsoft product,
> endorsement, or official guidance. Some contributors may be Microsoft employees
> acting in an individual or community capacity. Use at your own risk. See
> [DISCLAIMER.md](DISCLAIMER.md).

Ninja Paws HQ is the public-facing static site for Ninja Paws: an independent
community and consulting-style practice focused on practical security, cloud,
identity, Zero Trust, compliance, and AI work.

## Local development

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`. Build the production output with:

```bash
npm run config:check
npm run check
npm run build
npm run test:e2e
```

The browser suite starts Astro on an isolated local port and runs against a
repository-managed Playwright browser. Install browsers once with
`npx playwright install chromium firefox webkit` when running the full suite
locally. The default CI workflow runs desktop and mobile Chromium smoke tests;
the Firefox and WebKit projects are available for cross-platform verification.

## Deployment configuration

Environment naming, regions, resource groups, and public URLs are declared once
in [`config/deploy.config.json`](config/deploy.config.json) and resolved by
[`scripts/deploy-config.mjs`](scripts/deploy-config.mjs), matching the pattern
used by Sentinel Optimizer and M365 Profiles.

```bash
node scripts/deploy-config.mjs --environment dev
node scripts/deploy-config.mjs --environment dev --check
node scripts/deploy-config.mjs --branch dev --github-env
```

`dev` deploys from the `dev` branch, `prod` deploys from `main`, and each maps
to a separate Azure subscription. Subscription IDs are intentionally left empty
in the committed file; supply them through the `AZURE_SUBSCRIPTION_ID` GitHub
Environment secret or a local environment variable.

| Environment | Branch | Resource group                   | Static Web App                    | Public URL                  |
| ----------- | ------ | -------------------------------- | --------------------------------- | --------------------------- |
| dev         | `dev`  | `NP-NinjaPawsSite-Dev-CentralUS` | `np-ninjapaws-site-dev-centralus` | `https://dev.ninjapaws.org` |
| prod        | `main` | `NP-NinjaPawsSite-CentralUS`     | `np-ninjapaws-site-centralus`     | `https://ninjapaws.org`     |

## Azure Static Web Apps

The site is a static Astro build designed for Azure Static Web Apps.
[`infra/main.bicep`](infra/main.bicep) is the resource-group-scope entry point
and composes [`infra/azure/site/main.bicep`](infra/azure/site/main.bicep), which
provisions the Static Web App through the `avm/res/web/static-site` Azure
Verified Module. Per-environment parameter files live alongside it as
`main.dev.bicepparam` and `main.prod.bicepparam`.

Workflows:

- `lint.yml` builds, type-checks, and runs browser smoke tests on every push and
  pull request, and calls the shared Pawprint Bicep contract.
- `deploy-azure-infrastructure.yml` compiles the templates on every
  infrastructure change and provisions or previews the Static Web App on manual
  dispatch using OIDC federated credentials.
- `deploy.yml` resolves the environment from the branch, builds the site, and
  publishes it to Azure Static Web Apps.
- `promote-dev-to-main.yml` opens the guarded `dev` to `main` promotion pull
  request once `lint.yml` is green.

Configure these per-environment (`dev` and `prod`) GitHub Environment secrets
before enabling deployment:

- `AZURE_STATIC_WEB_APPS_API_TOKEN`
- `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_SUBSCRIPTION_ID`

## Pawprint integration contract

This repository is wired to the shared
[Pawprint](https://github.com/ninjapaw/pawprint) governance surface so
deployment policy and validation behavior stay consistent across Ninja Paws
projects.

- Infrastructure validation consumes
  `ninjapaw/pawprint/.github/workflows/kit-bicep-validate.yml@3e261301bb1a70bcd25f3891117c16ebd8065ca5`,
  which owns Bicep compilation, linting, and committed-ARM drift detection for
  `infra/**`.
- `bicepconfig.json` mirrors the Pawprint linter ruleset so local builds and the
  shared validator agree, including `use-recent-api-versions`.
- Repository-specific checks stay local (Astro type checks, Playwright smoke
  tests), while cross-repo guardrails are centralized in Pawprint.

The Pawprint reference is pinned to an immutable commit SHA so behavior is
deterministic and reviewable. When Pawprint publishes stable release tags for
these kits, migrate the pin to the corresponding tagged release.

## Links

- [Ninja Paws on GitHub](https://github.com/ninjapaw)
- [Ninja Paws Enterprise](https://github.com/enterprises/ninjapaws)
- [M365 Profiles](https://m365profiles.com)
- [Sentinel Optimizer](https://sentineloptimizer.com)

## Project notice

This is an independent community and demo project. It is not a Microsoft or
GitHub product or official guidance. Validate all code, recommendations, and
deployment assets before production use. See [DISCLAIMER.md](DISCLAIMER.md).
