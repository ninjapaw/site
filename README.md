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
npm run check
npm run build
npm run test:e2e
```

The browser suite starts Astro on an isolated local port and runs against a
repository-managed Playwright browser. Install browsers once with
`npx playwright install chromium firefox webkit` when running the full suite
locally. The default CI workflow runs desktop and mobile Chromium smoke tests;
the Firefox and WebKit projects are available for cross-platform verification.

## Azure Static Web Apps

The site is a static Astro build designed for Azure Static Web Apps. The GitHub
Actions workflow builds pull requests, deploys `dev` to the development
environment, and deploys `main` to production. Configure these environment
secrets before enabling deployment:

- `AZURE_STATIC_WEB_APPS_API_TOKEN_DEV`
- `AZURE_STATIC_WEB_APPS_API_TOKEN_PROD`

The Bicep placeholder follows the Cloud Security Dojo naming pattern:
`NP-ninjapaws-site-Dev-CentralUS` and `NP-ninjapaws-site-Prod-CentralUS`.
No Azure resources are provisioned by this repository yet.

## Links

- [Ninja Paws on GitHub](https://github.com/ninjapaw)
- [Ninja Paws Enterprise](https://github.com/enterprises/ninjapaws)
- [M365 Profiles](https://m365profiles.com)
- [Sentinel Optimizer](https://sentineloptimizer.com)

## Project notice

This is an independent community and demo project. It is not a Microsoft or
GitHub product or official guidance. Validate all code, recommendations, and
deployment assets before production use. See [DISCLAIMER.md](DISCLAIMER.md).
