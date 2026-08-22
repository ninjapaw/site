# Ninja Paws Public Site Deployment Plan

Status: Ready for Validation

## Scope

- Target repository: `ninjapaw/site`
- Application: public Ninja Paws consulting and professional-services site
- Deployment target: Azure Static Web Apps
- Environments: `dev.ninjapaws.org` for development and production domain to be confirmed

## Proposed Architecture

- Astro with Node.js tooling and static output
- One responsive landing page with anchored sections: capabilities, featured
	projects, learning and AI, approach, and contact
- Static project cards linking to public repositories and deployed project sites
- CSS and inline SVG branding owned by Ninja Paws; no Microsoft or GitHub marks
	used as Ninja Paws branding
- Azure Static Web Apps as the hosting target, with GitHub Actions deployment
- Development hostname: `dev.ninjapaws.org`
- Production hostname: pending confirmation
- No live AI API in v1; AI content will link to the relevant projects and explain
	safe, evidence-backed use. A future AI service can be added behind a separate
	API and privacy review.

## Content Direction

- Position Ninja Paws as an independent consulting and professional-services
	practice focused on cloud security, identity, Zero Trust, Microsoft security,
	compliance, cost optimization, and practical AI.
- Link to `ninjapaw` GitHub projects, the enterprise profile, `m365profiles.com`,
	`sentineloptimizer.com`, the Cloud Security Dojo, Pawprint, and Zero Trust
	Insights where the links are verified.
- Include clear independent-project, Microsoft, GitHub, licensing, and
	production-use disclaimers.
- Use a contact link rather than collecting sensitive data in a static form.

## Validation

- Node dependency installation and Astro build
- Link, accessibility, and static output checks
- Mobile and desktop browser verification
- Azure Static Web Apps configuration validation
- Azure readiness validation before deployment

## Implementation Status

- Astro static site implemented in `src/pages/index.astro`.
- Responsive visual system implemented in `src/styles/global.css`.
- Local Node.js development and static build scripts are configured.
- GitHub Actions deploys `dev` and `main` through separate Static Web Apps
	deployment tokens and GitHub environments.
- Bicep placeholder is included under `infra/`; no Azure deployment was run.
- Production hostname remains `ninjapaws.org` pending DNS and Static Web Apps
	custom-domain configuration.
