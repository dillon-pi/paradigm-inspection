# Requirements: Paradigm Inspection Website

**Defined:** 2026-04-09
**Core Value:** A potential client who finds this site should come away trusting the inspector and knowing exactly how to reach him.

---

## v1 Requirements

### Site-Wide

- [ ] **SITE-01**: Site is a single-page scroll layout with sticky header navigation and smooth anchor links to each section
- [ ] **SITE-02**: Site uses brand color palette: black (#0A0A0A), cream (#F5EDD6), warm orange (#E07A2F) — no additional colors introduced
- [ ] **SITE-03**: Site uses Playfair Display (headings) and Inter (body) from Google Fonts
- [ ] **SITE-04**: Site is fully mobile-responsive — tested at 390px, 768px, and 1200px breakpoints
- [ ] **SITE-05**: Logo (logo.jpg) appears in the sticky header and footer
- [ ] **SITE-06**: Phone number is visible in the header at all scroll positions as a tap-to-call `tel:` link
- [ ] **SITE-07**: All touch targets are minimum 44×44px (WCAG 2.1)
- [ ] **SITE-08**: All HTML sections include clear comments marking editable placeholder content

### Navigation

- [ ] **NAV-01**: Header includes logo, phone number (tap-to-call), and anchor navigation links
- [ ] **NAV-02**: Navigation collapses to a hamburger menu on mobile (≤768px)
- [ ] **NAV-03**: Hamburger menu opens/closes smoothly via vanilla JavaScript toggle
- [ ] **NAV-04**: A `404.html` page exists with site navigation and phone number

### Hero

- [ ] **HERO-01**: Hero section spans full viewport height with a bold headline, subheadline mentioning South Florida service area, and two CTA buttons (Call Now / Send Email)
- [ ] **HERO-02**: Hero background uses a brand-color CSS gradient (no stock photo — real photo is a future enhancement)
- [ ] **HERO-03**: CTA buttons are visually distinct (primary: orange; secondary: outlined) and link to `tel:` and `mailto:` respectively

### Services

- [ ] **SERV-01**: Services section displays four service cards: Residential Inspections, Commercial Inspections, Specialty Inspections, New Construction Inspections
- [ ] **SERV-02**: Each service card includes a Lucide icon, a heading, a short benefit-focused description, and a CTA link to the contact section
- [ ] **SERV-03**: Specialty inspections card explicitly lists the specialty types: mold, radon, sewer, pool, roof
- [ ] **SERV-04**: Services grid is 2-column on tablet, 1-column on mobile

### How It Works

- [ ] **PROC-01**: "How It Works" section displays a numbered 3-step process: Schedule → Inspect → Report
- [ ] **PROC-02**: Each step includes a number, icon, heading, and 1–2 sentence description

### About

- [ ] **ABOUT-01**: About section includes a placeholder photo area (labeled "YOUR PHOTO HERE"), a bio placeholder with editing prompts, and the owner's name
- [ ] **ABOUT-02**: About section displays Florida HI license number (placeholder: "License #[HI-XXXXX] — replace before launch")
- [ ] **ABOUT-03**: About section includes a certification badge placeholder for InterNACHI/ASHI (with instructions to add the badge when certified)
- [ ] **ABOUT-04**: About section ends with a CTA (Call or Email)

### Service Area

- [ ] **AREA-01**: Service area section names all four counties: Palm Beach, Broward, Miami-Dade, Monroe
- [ ] **AREA-02**: Service area section lists representative cities per county (Boca Raton, Delray Beach, Fort Lauderdale, Miami, Key West, etc.)
- [ ] **AREA-03**: Service area copy includes a brief mention of South Florida-specific inspection concerns (humidity, mold, hurricane straps)

### Social Proof

- [ ] **SOCIAL-01**: Testimonials section displays three placeholder review cards with bracketed prompts ("[5-star Google review from recent client]")
- [ ] **SOCIAL-02**: Each testimonial card includes a placeholder name, placeholder date, star rating display, and review text
- [ ] **SOCIAL-03**: Testimonials section includes a "Review Us on Google" link placeholder (labeled with instructions)

### Contact

- [ ] **CONTACT-01**: Contact section includes a prominent tap-to-call phone link and a mailto email link
- [ ] **CONTACT-02**: Contact section includes a Formspree-powered contact form with fields: Name, Email, Phone, Message, and a Submit button
- [ ] **CONTACT-03**: Contact section includes social media links (Instagram, Facebook) with placeholder URLs (`https://instagram.com/YOUR_HANDLE_HERE`)
- [ ] **CONTACT-04**: Footer repeats phone number, email, social links, license number, and copyright

### Local SEO

- [ ] **SEO-01**: Page `<title>` is: "Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward & Miami-Dade"
- [ ] **SEO-02**: Meta description (155 chars max) includes service types and all four county names
- [ ] **SEO-03**: Open Graph tags are set: `og:title`, `og:description`, `og:url`, `og:image` (branded 1200×630 fallback using CSS/text)
- [ ] **SEO-04**: All `<img>` elements have descriptive, locally-relevant `alt` text
- [ ] **SEO-05**: LocalBusiness JSON-LD schema is included in `<head>` with name, telephone, email, areaServed (all four counties), serviceType, and url
- [ ] **SEO-06**: `<link rel="canonical">` tag is set to the site's primary URL
- [ ] **SEO-07**: Favicon is generated from the logo mark and linked in `<head>`

### Deployment & Handoff

- [ ] **DEPLOY-01**: `.nojekyll` file is present in repo root (disables Jekyll on GitHub Pages)
- [ ] **DEPLOY-02**: Site is deployed to GitHub Pages under the owner's GitHub account
- [ ] **DEPLOY-03**: `CNAME` file is committed if a custom domain is configured
- [ ] **DEPLOY-04**: `HOW-TO-UPDATE.md` is written in plain English explaining: how to edit files on GitHub.com, what each section maps to in `index.html`, and how long changes take to go live
- [ ] **DEPLOY-05**: `LAUNCH-CHECKLIST.md` enumerates every placeholder with a checkbox: license number, phone, email, social handles, owner bio, headshot, testimonials

---

## v2 Requirements

### Enhancements (deferred — not in current roadmap)

- **ENH-01**: Real inspector headshot replaces placeholder in About section
- **ENH-02**: Real testimonials replace placeholder review cards
- **ENH-03**: Google Analytics or Plausible analytics (privacy-first, no cookie banner)
- **ENH-04**: Google Business Profile review badge embedded
- **ENH-05**: Scheduling widget (e.g., Calendly embed) in contact section
- **ENH-06**: Separate service detail pages if SEO expansion is desired

---

## Out of Scope

| Feature | Reason |
|---------|--------|
| Online booking system | Owner handles scheduling by phone/email — not needed for v1 |
| Blog / news section | No content to populate; empty blog hurts credibility |
| Client portal / login | Not a use case for this business type |
| Backend / server-side code | GitHub Pages constraint; Formspree covers contact form needs |
| Multi-language support | English only for v1 |
| Social media feed embeds | Slow, requires active posting, clutters the page |
| Pricing page | Pricing varies by property; better handled in a call |
| Photo gallery | No photos yet; an empty gallery is a trust negative |
| Heavy JS animations / parallax | Hurts mobile performance; AOS scroll reveals are sufficient |
| Google Analytics in v1 | Requires CCPA cookie consent banner in Florida — skip for now |

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

---
*Requirements defined: 2026-04-09*
*Last updated: 2026-04-09 after roadmap creation (traceability updated; requirement count corrected from 40 to 47)*
