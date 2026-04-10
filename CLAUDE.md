<!-- GSD:project-start source:PROJECT.md -->
## Project

**Paradigm Inspection — Website**

A static marketing website for Paradigm Inspection, a South Florida home inspection service company. The site gives potential clients a warm, trustworthy first impression of the business, communicates the services offered, and makes it easy to get in touch. It is hosted on GitHub Pages and designed to be personalized with real content (bio, photos, testimonials) as the business grows.

**Core Value:** A potential client who finds this site should come away trusting the inspector and knowing exactly how to reach him — everything else supports that.

### Constraints

- **Tech Stack:** Static HTML/CSS/JS — no backend, no build tools mandatory; GitHub Pages compatible
- **Content:** All placeholder — must be clearly marked for easy owner replacement
- **Budget:** Not specified — keep dependencies minimal (no paid APIs, no premium fonts behind paywalls)
- **Performance:** Must load fast on mobile; images should be optimized or use placeholders
<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->
## Technology Stack

## Recommended Stack
### Core
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 | — | Page structure | Native, zero dependency, GitHub Pages serves it directly. Semantic elements improve accessibility and SEO at no cost. |
| CSS Custom Properties | — | Design tokens (colors, spacing, type scale) | CSS variables make brand color swaps trivial. No preprocessor needed. |
| Vanilla JavaScript (ES2020+) | — | Mobile nav toggle, smooth scroll, scroll-reveal init | No interactive state beyond a hamburger menu. Vanilla JS handles this in under 50 lines. Zero runtime overhead. |
### Styling
### Fonts & Icons
#### Fonts
- **Playfair Display** — High-contrast serif with editorial warmth. Used for section headings and the hero headline. Signals quality and professionalism. Pairs naturally with the cream background. Weights: 400, 700.
- **Inter** — Neutral, highly legible sans-serif optimized for screens. Used for all body text, nav links, labels, and CTA buttons. Weights: 400, 500, 600.
#### Icons
### Animation / Interactions
### Deployment
| Layer | Tool | Why |
|-------|------|-----|
| Hosting | GitHub Pages | Free, zero ops burden |
| Custom domain | CNAME file in repo root | GitHub Pages supports apex and www subdomains |
| HTTPS | Automatic | GitHub Pages enforces HTTPS with Let's Encrypt |
| CI/CD | None needed | Push to `main` branch auto-deploys |
| Image optimization | Squoosh.app (free browser tool) | Owner can compress photos to WebP without installing software |
## What NOT to Use
| Tool | Reason to Avoid |
|------|-----------------|
| React / Vue / Svelte | Requires a build step. A brochure site has no component-reuse problem worth solving. |
| Next.js / Nuxt | Generates server-side functions GitHub Pages cannot run. Wrong deployment target. |
| Tailwind CSS (Play CDN) | Tailwind's own docs label Play CDN "not for production." Build version requires Node.js. |
| Bootstrap | 150 KB+ of opinionated CSS that fights the black/cream/orange palette. |
| jQuery | No DOM complexity. Mobile nav toggle is 10 lines of vanilla JS. jQuery adds 87 KB for zero benefit. |
| GSAP | Overkill for scroll-reveal on a brochure site. AOS does the job at 1/10th the complexity. |
| Font Awesome | Requires account registration for CDN kit. Lucide is a direct, better replacement. |
| Google Analytics (GA4) | Requires a cookie consent banner under CCPA. Skip in v1 or use Plausible (privacy-first). |
## Confidence Levels
| Choice | Confidence | Notes |
|--------|-----------|-------|
| Vanilla HTML/CSS/JS | HIGH | Canonical answer given the constraints |
| No Tailwind / No Bootstrap | HIGH | Tailwind Play CDN is explicitly not-for-production per Tailwind's docs |
| Playfair Display + Inter | MEDIUM | Well-established pairing for service industry sites |
| Lucide Icons | MEDIUM | Stable; verify current version at jsdelivr.com before use |
| AOS 2.3.4 | MEDIUM | Last major release 2021, widely used — check unpkg.com/aos for newer versions |
| GitHub Pages + .nojekyll | HIGH | Official GitHub documentation |
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
