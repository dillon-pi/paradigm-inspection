# Roadmap: Paradigm Inspection Website

**Milestone:** v1 — Launch
**Phases:** 3
**Requirements:** 47 mapped
**Granularity:** Coarse
**Last updated:** 2026-04-12

---

## Phases

- [x] **Phase 1: Foundation** — HTML skeleton, brand system, responsive nav, 404 page, and live GitHub Pages deployment (completed 2026-04-11)
- [x] **Phase 2: Content and Visual Design** — All content sections built and styled with full brand treatment (completed 2026-04-12)
- [x] **Phase 3: SEO, Assets, and Handoff** — Local SEO markup, favicon, deployment files, and owner handoff docs (completed 2026-04-12)

---

## Phase Details

### Phase 1: Foundation
**Goal:** A deployed, navigable site shell is live on GitHub Pages with the brand system in place, all section stubs present, and zero broken paths
**Depends on:** Nothing
**Requirements:** SITE-01, SITE-02, SITE-03, SITE-04, SITE-05, SITE-06, SITE-07, SITE-08, NAV-01, NAV-02, NAV-03, NAV-04, DEPLOY-01
**Success Criteria** (what must be TRUE):
  1. Opening the GitHub Pages URL returns a styled page — not a 404, not a Jekyll error, not a blank screen
  2. The sticky header shows the logo, a tap-to-call phone number, and anchor nav links at every scroll position on both mobile and desktop
  3. At 390px width, the nav links collapse to a hamburger icon and the menu opens and closes smoothly with no layout breaks
  4. The brand palette (black, cream, orange) and type pairing (Playfair Display for headings, Inter for body) are applied site-wide via CSS custom properties
  5. All content section stubs exist in index.html with anchor IDs, and a 404.html page exists with the site nav and phone number
**Plans:** 1/1 plans complete
Plans:
- [x] 01-01-PLAN.md — Site shell with brand CSS, responsive sticky header, section stubs, 404 page, and .nojekyll
**UI hint:** yes

---

### Phase 2: Content and Visual Design
**Goal:** Every trust-building content section is visible, styled, and populated with clearly labeled placeholder content that the owner can swap for real content before launch
**Depends on:** Phase 1
**Requirements:** HERO-01, HERO-02, HERO-03, SERV-01, SERV-02, SERV-03, SERV-04, PROC-01, PROC-02, ABOUT-01, ABOUT-02, ABOUT-03, ABOUT-04, AREA-01, AREA-02, AREA-03, SOCIAL-01, SOCIAL-02, SOCIAL-03, CONTACT-01, CONTACT-02, CONTACT-03, CONTACT-04
**Success Criteria** (what must be TRUE):
  1. A visitor scrolling from top to bottom passes through all ten sections — hero, services, how it works, about, service area, testimonials, contact, footer — with no blank or broken areas at any breakpoint
  2. The hero section shows a bold headline, a South Florida subheadline, and two visually distinct CTA buttons (orange "Call Now" and outlined "Send Email") above the fold on both mobile and desktop
  3. The services section displays four named cards (Residential, Commercial, Specialty, New Construction) each with a Lucide icon, benefit-focused description, and contact CTA — the Specialty card explicitly lists mold, radon, sewer, pool, roof
  4. The about section shows a labeled photo placeholder, a bio placeholder with editing prompts, a license number placeholder, a certification badge placeholder, and ends with a call or email CTA
  5. Every editable placeholder — name, phone, email, social handle, license number, review text, city list — is marked with a bracketed instruction so the owner cannot ship placeholder content by accident
**Plans:** 3/3 plans complete
Plans:
- [x] 02-01-PLAN.md — CDN setup, hero section, services grid, and how-it-works steps
- [x] 02-02-PLAN.md — About section with photo placeholder and credentials, service area, and testimonials
- [x] 02-03-PLAN.md — Contact section with Formspree form, footer expansion, AOS init, and visual verification
**UI hint:** yes

---

### Phase 3: SEO, Assets, and Handoff
**Goal:** The site has all local SEO markup, a favicon, correct GitHub Pages deployment files, and owner documentation so it can be handed off and launched with confidence
**Depends on:** Phase 2
**Requirements:** SEO-01, SEO-02, SEO-03, SEO-04, SEO-05, SEO-06, SEO-07, DEPLOY-02, DEPLOY-03, DEPLOY-04, DEPLOY-05
**Success Criteria** (what must be TRUE):
  1. Pasting the site URL into a social share preview tool shows the correct title, meta description, and a branded fallback image — not a blank card
  2. A browser tab shows a favicon derived from the logo mark rather than the default blank-page icon
  3. Viewing page source shows a LocalBusiness JSON-LD block in `<head>` with name, telephone, email, all four counties in areaServed, and the canonical site URL
  4. The repo root contains `.nojekyll` and the site resolves at its final URL without a Jekyll error; CNAME is committed if a custom domain is configured
  5. A non-technical owner can open HOW-TO-UPDATE.md and identify exactly which lines to edit for each section, and LAUNCH-CHECKLIST.md lists every placeholder with a checkbox so nothing ships unreplaced
**Plans:** 4/4 plans complete
Plans:
- [x] 03-01-PLAN.md — SEO meta tags, OG tags, canonical link, and og-image social card
- [x] 03-02-PLAN.md — LocalBusiness JSON-LD and favicon generation
- [x] 03-03-PLAN.md — CNAME deployment file and .nojekyll verification
- [x] 03-04-PLAN.md — HOW-TO-UPDATE.md and LAUNCH-CHECKLIST.md owner documentation

---

## Progress

| Phase | Name | Status | Completed |
|-------|------|--------|-----------|
| 1 | 1/1 | Complete   | 2026-04-11 |
| 2 | 3/3 | Complete   | 2026-04-12 |
| 3 | 4/4 | Complete   | 2026-04-12 |

---

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SITE-01 | Phase 1 | Pending |
| SITE-02 | Phase 1 | Pending |
| SITE-03 | Phase 1 | Pending |
| SITE-04 | Phase 1 | Pending |
| SITE-05 | Phase 1 | Pending |
| SITE-06 | Phase 1 | Pending |
| SITE-07 | Phase 1 | Pending |
| SITE-08 | Phase 1 | Pending |
| NAV-01 | Phase 1 | Pending |
| NAV-02 | Phase 1 | Pending |
| NAV-03 | Phase 1 | Pending |
| NAV-04 | Phase 1 | Pending |
| DEPLOY-01 | Phase 1 | Pending |
| HERO-01 | Phase 2 | Pending |
| HERO-02 | Phase 2 | Pending |
| HERO-03 | Phase 2 | Pending |
| SERV-01 | Phase 2 | Pending |
| SERV-02 | Phase 2 | Pending |
| SERV-03 | Phase 2 | Pending |
| SERV-04 | Phase 2 | Pending |
| PROC-01 | Phase 2 | Pending |
| PROC-02 | Phase 2 | Pending |
| ABOUT-01 | Phase 2 | Pending |
| ABOUT-02 | Phase 2 | Pending |
| ABOUT-03 | Phase 2 | Pending |
| ABOUT-04 | Phase 2 | Pending |
| AREA-01 | Phase 2 | Pending |
| AREA-02 | Phase 2 | Pending |
| AREA-03 | Phase 2 | Pending |
| SOCIAL-01 | Phase 2 | Pending |
| SOCIAL-02 | Phase 2 | Pending |
| SOCIAL-03 | Phase 2 | Pending |
| CONTACT-01 | Phase 2 | Pending |
| CONTACT-02 | Phase 2 | Pending |
| CONTACT-03 | Phase 2 | Pending |
| CONTACT-04 | Phase 2 | Pending |
| SEO-01 | Phase 3 | Pending |
| SEO-02 | Phase 3 | Pending |
| SEO-03 | Phase 3 | Pending |
| SEO-04 | Phase 3 | Pending |
| SEO-05 | Phase 3 | Pending |
| SEO-06 | Phase 3 | Pending |
| SEO-07 | Phase 3 | Pending |
| DEPLOY-02 | Phase 3 | Pending |
| DEPLOY-03 | Phase 3 | Pending |
| DEPLOY-04 | Phase 3 | Pending |
| DEPLOY-05 | Phase 3 | Pending |

**Coverage:**
- v1 requirements: 47 total
- Mapped to phases: 47
- Unmapped: 0

Note: REQUIREMENTS.md stated 40 requirements but the actual count is 47. The traceability table in REQUIREMENTS.md has been updated to match.

---

*Roadmap created: 2026-04-09*
