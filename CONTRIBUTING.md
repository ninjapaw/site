# Contributing

## Before You Start

This project is an independent community site. Contributions must not imply
Microsoft endorsement and must preserve the independent-project notice. Do not
submit tenant data, customer data, credentials, access tokens, or other
sensitive material.

## Local Validation

```bash
npm ci
npm run config:check
npm run check
npm run build
npm run test:e2e
```

Infrastructure changes must also compile locally before review:

```bash
npm run infra:build
```

`bicepconfig.json` mirrors the Pawprint linter ruleset, so a clean local build
matches the shared validator in CI.

## Deployment Configuration

Environment naming, regions, resource groups, and public URLs live in
[`config/deploy.config.json`](config/deploy.config.json). Change values there
rather than hard-coding them in workflows or Bicep. Leave `subscriptionId`
empty in the committed file and supply it through a GitHub Environment secret.

## Pull Requests

Keep pull requests focused. Describe the user-visible change and call out any
infrastructure or deployment impact. Do not commit generated output, `.env`
files, Azure credentials, or environment-specific secrets.
