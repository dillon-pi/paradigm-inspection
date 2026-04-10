# Paradigm Inspection — Website

## What This Is

A static marketing website for Paradigm Inspection, a South Florida home inspection service company. The site gives potential clients a warm, trustworthy first impression of the business, communicates the services offered, and makes it easy to get in touch. It is hosted on GitHub Pages and designed to be personalized with real content (bio, photos, testimonials) as the business grows.

## Core Value

A potential client who finds this site should come away trusting the inspector and knowing exactly how to reach him — everything else supports that.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with a compelling headline and clear call-to-action (call/email)
- [ ] About section that tells the owner's story and builds trust through experience and credentials
- [ ] Services section covering: residential inspections, commercial inspections, specialty inspections (mold, radon, etc.), and new construction inspections
- [ ] Service area section highlighting Palm Beach, Broward, Miami-Dade, and Monroe counties
- [ ] Contact section with phone, email, and social media links
- [ ] Warm, personal visual design using brand colors (black, cream, warm orange) derived from the logo
- [ ] Logo prominently placed in the header/navigation
- [ ] Mobile-responsive layout (clients will share the URL on their phones)
- [ ] Placeholder content throughout that the owner can easily swap out with real text and photos
- [ ] Fast-loading, lightweight static site (no frameworks required)

### Out of Scope

- Online booking / scheduling system — not needed for v1; owner will handle by phone/email
- Blog or news section — no content to populate it yet; defer to future
- Client portal or login — not a use case for this business type
- Backend / server-side code — static only, GitHub Pages constraint
- Multi-language support — English only for v1

## Context

- **Brand identity:** Logo is black background with cream "PARADIGM" wordmark and warm orange "INSPECTION" sub-text, accompanied by a house+magnifying-glass icon. These three colors (black #0A0A0A, cream ~#F5EDD6, orange ~#E07A2F) form the entire palette.
- **Content status:** Owner is just starting out — no written bio, photos, or testimonials yet. All content sections should be well-structured placeholders that make it obvious what needs to be filled in.
- **Service area:** South Florida — Palm Beach County, Broward County, Miami-Dade County, Monroe County (Keys).
- **Services offered:** Residential home inspections, commercial inspections, specialty inspections (mold, radon, sewer, pool, roof), new construction inspections.
- **Contact methods:** Phone number, email address, social media (exact handles/numbers to be filled in).
- **Hosting:** GitHub Pages — must be pure HTML/CSS/JS, no build tools required unless very lightweight.
- **Primary audience:** Home buyers, sellers, real estate agents in South Florida.

## Constraints

- **Tech Stack:** Static HTML/CSS/JS — no backend, no build tools mandatory; GitHub Pages compatible
- **Content:** All placeholder — must be clearly marked for easy owner replacement
- **Budget:** Not specified — keep dependencies minimal (no paid APIs, no premium fonts behind paywalls)
- **Performance:** Must load fast on mobile; images should be optimized or use placeholders

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Static HTML/CSS/JS (no framework) | GitHub Pages compatible, no build step, easy for non-dev client to understand | — Pending |
| Brand palette from logo (black, cream, orange) | Logo already exists and sets the visual tone | — Pending |
| Placeholder content throughout | Owner is early-stage, content will be added over time | — Pending |
| Phone + email + social as contact (no booking widget) | Simpler to start; owner manages scheduling directly | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-09 after initialization*
