# Paradigm Inspection — Website

## What This Is

A static marketing website for Paradigm Inspection, a South Florida home inspection service company. The site gives potential clients a warm, trustworthy first impression of the business, communicates the services offered, and makes it easy to get in touch. It is hosted on GitHub Pages and designed to be personalized with real content (bio, photos, testimonials) as the business grows.

**v1.0 shipped 2026-04-12.** The site is fully built — placeholder content throughout, ready for the owner to replace before launch.

## Core Value

A potential client who finds this site should come away trusting the inspector and knowing exactly how to reach him — everything else supports that.

## Requirements

### Validated

- ✓ Hero section with compelling headline and clear call-to-action (call/email) — v1.0
- ✓ About section with owner bio, license number, and credentials placeholders — v1.0
- ✓ Services section covering residential, commercial, specialty (mold, radon, sewer, pool, roof), and new construction inspections — v1.0
- ✓ Service area section highlighting Palm Beach, Broward, Miami-Dade, and Monroe counties — v1.0
- ✓ Contact section with phone, email, social links, and Formspree contact form — v1.0
- ✓ Warm visual design using brand colors (black #0A0A0A, cream #F5EDD6, orange #E07A2F) — v1.0
- ✓ Logo in header/navigation — v1.0
- ✓ Mobile-responsive layout (tested at 390px, 768px, 1200px) — v1.0
- ✓ Placeholder content throughout, clearly bracketed for easy replacement — v1.0
- ✓ Fast-loading static site with no frameworks — v1.0
- ✓ Full SEO head block: title, meta description, canonical, Open Graph, Twitter Card — v1.0
- ✓ LocalBusiness JSON-LD schema (HomeAndConstructionBusiness, all 4 counties) — v1.0
- ✓ Favicon link tags in place; binary files deferred to owner action — v1.0
- ✓ CNAME file for custom domain (paradigminspection.org) — v1.0
- ✓ HOW-TO-UPDATE.md (non-technical onboarding guide) + LAUNCH-CHECKLIST.md (57 checkboxes) — v1.0

### Active

*(No active requirements — v1.0 shipped all planned scope. Define next milestone with `/gsd-new-milestone`.)*

### Out of Scope

- Online booking / scheduling system — not needed for v1; owner handles by phone/email
- Blog or news section — no content to populate yet; defer to future
- Client portal or login — not a use case for this business type
- Backend / server-side code — static only, GitHub Pages constraint
- Multi-language support — English only for v1

## Context

**Shipped state (v1.0):**
- ~490 LOC (index.html 399, script.js 33, 404.html 58) + style.css
- Tech stack: Vanilla HTML/CSS/JS, AOS 2.3.4 (scroll-reveal), Lucide 0.460.0 (icons), Google Fonts (Playfair Display + Inter), Formspree (contact form)
- Hosting: GitHub Pages, custom domain via CNAME

**Owner actions required before launch:**
1. Export `og-image.png` using `og-image-export.html` (open in browser → right-click save → commit)
2. Generate favicon files at realfavicongenerator.net using `logo.jpg`, commit 3 files
3. Replace all `[YOUR-*]` bracketed placeholders (phone, email, name, bio, social handles, license number)
4. Set up Formspree account and replace the placeholder form action URL

**Brand identity:** Logo is black background with cream "PARADIGM" wordmark and warm orange "INSPECTION" sub-text, plus a house+magnifying-glass icon. Three colors form the entire palette.

**Service area:** South Florida — Palm Beach County, Broward County, Miami-Dade County, Monroe County (Keys).

## Constraints

- **Tech Stack:** Static HTML/CSS/JS — no backend, no build tools mandatory; GitHub Pages compatible
- **Content:** All placeholder — must be clearly marked for easy owner replacement
- **Budget:** Not specified — keep dependencies minimal (no paid APIs, no premium fonts behind paywalls)
- **Performance:** Must load fast on mobile; images should be optimized or use placeholders

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML/CSS/JS (no framework) | GitHub Pages compatible, no build step, easy for non-dev client to understand | ✓ Good — worked cleanly throughout all 3 phases |
| Brand palette from logo (black, cream, orange) | Logo already exists and sets the visual tone | ✓ Good — consistent, distinctive palette |
| Placeholder content throughout with brackets | Owner is early-stage, content will be added over time | ✓ Good — bracketed pattern made placeholders scannable |
| Phone + email + social as contact (no booking widget) | Simpler to start; owner manages scheduling directly | ✓ Good — appropriate for v1 |
| Formspree for contact form (no backend) | Free tier covers low-volume v1 needs; zero server ops | ✓ Good — clean solution |
| HomeAndConstructionBusiness @type for JSON-LD | No dedicated HomeInspector type in schema.org | ✓ Good — most specific applicable type |
| Omit address from LocalBusiness JSON-LD | Service-area business with no public office | ✓ Good — avoids misleading clients |
| Favicon binaries deferred to owner | Claude cannot run realfavicongenerator.net; link tags added | ✓ Tracked in LAUNCH-CHECKLIST.md |
| og-image.png deferred to owner export | No build tools available; SVG source + export helper provided | ✓ Tracked in LAUNCH-CHECKLIST.md |
| GitHub.com UI only in HOW-TO-UPDATE.md | Owner is non-technical; no CLI assumptions | ✓ Good — appropriate for audience |
| AOS 2.3.4 for scroll-reveal animations | Lightweight, widely used, zero-config | ✓ Good — works well on mobile |
| Lucide 0.460.0 for icons | Stable CDN version; corrected from non-existent 1.8.0 | ✓ Good after code review fix |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-12 after v1.0 milestone*
