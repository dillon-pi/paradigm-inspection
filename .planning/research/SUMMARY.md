# Research Summary: Paradigm Inspection Website

**Project:** Paradigm Inspection — static marketing website
**Domain:** Local service business, single-page brochure site
**Researched:** 2026-04-09
**Confidence:** HIGH

## Executive Summary

Paradigm Inspection needs a single-page static brochure site — the canonical pattern for a new local home inspection business with one inspector, no reviews yet, and a primary conversion goal of getting prospects to call or email. The established approach is zero-dependency HTML/CSS/JS hosted on GitHub Pages: no build tools, no framework, no backend. This keeps the site trivially maintainable by a non-technical owner and loads fast enough to satisfy Google's Core Web Vitals on mobile.

The recommended build is a 10-section scroll site (nav, hero, services, how-it-works, about, service area, testimonials, realtor callout, contact, footer) with the brand palette of black, cream, and warm orange. The typography pairing of Playfair Display for headings and Inter for body text signals professionalism without fighting the palette. Animations are handled by AOS (scroll-reveal via data attributes) and native CSS transitions — keeping the JS footprint under 50 lines of authored code.

The primary risks are content-side, not technical: launching with placeholder text, missing the license number, using stock photos, and burying the phone number. Technical risks are smaller but real — relative vs. absolute path discipline on GitHub Pages, the missing `.nojekyll` file breaking Jekyll processing, and unoptimized hero images tanking mobile load time. A thorough launch checklist and commented HTML ("EDIT THIS") are as important as the code itself for a handoff to a non-technical owner.

---

## Key Findings

### Recommended Stack

The correct stack for this project is intentionally minimal. No build step, no package manager, no framework. The entire site is three files (`index.html`, `style.css`, `main.js`) plus a flat `assets/` directory. This is not a concession — it is the right architecture for the constraints: GitHub Pages hosting, non-technical owner, single-page content, and a conversion goal of a phone call.

**Core technologies:**
- **HTML5 (semantic):** Page structure — native elements improve accessibility and local SEO at zero cost
- **CSS Custom Properties:** Design tokens for brand colors, type scale, and spacing — makes palette updates trivial without a preprocessor
- **Vanilla JS (ES2020+):** Mobile nav toggle and AOS init — under 50 lines; no framework justified for this interaction surface
- **Playfair Display + Inter (Google Fonts):** Editorial serif for headings, neutral sans for body — established pairing for service industry sites
- **Lucide Icons (CDN ESM):** Feather Icons successor; renders inline SVG that inherits CSS color; no account required
- **AOS 2.3.4 (CDN):** Scroll-reveal via `data-aos` HTML attributes — owner can add animations without touching JS
- **GitHub Pages:** Free static hosting; push to `main` = deployed; automatic HTTPS via Let's Encrypt

**Explicitly excluded:** React/Vue/Svelte (build step, no reuse problem to solve), Next.js/Nuxt (server functions GitHub Pages cannot run), Tailwind Play CDN (labeled "not for production" by Tailwind), Bootstrap (150 KB+ fighting the brand palette), jQuery (87 KB for a 10-line nav toggle), GSAP (overkill; AOS is sufficient), Font Awesome (requires account), Google Analytics GA4 (triggers CCPA cookie banner).

### Expected Features

**Must have (table stakes):**
- Persistent tap-to-call phone number in header (always visible on mobile)
- Hero section with a single, direct CTA above the fold
- All service types named explicitly — residential, commercial, specialty (mold, radon, pool), new construction
- Service area stated by county: Palm Beach, Broward, Miami-Dade, Monroe
- Florida home inspector license number displayed
- Named inspector with an About section (real person, not faceless company)
- Mobile-responsive layout (majority of local search traffic is mobile)
- Page loads under 3 seconds on mobile; HTTPS enforced

**Should have (v1 differentiators):**
- "How It Works" 3-step section (Schedule → Inspect → Report) — reassures first-time buyers
- South Florida climate expertise callout (humidity, mold, hurricane straps)
- Specialty services as distinct named cards, not buried in a list
- Availability/turnaround statement ("Reports delivered within 24 hours")
- Testimonials placeholder section — structured and ready to fill when first reviews arrive
- Professional certification badge (InterNACHI or ASHI, if applicable)
- Realtor-targeted paragraph — high-value referral audience

**Defer to v2+:**
- Online booking widget (backend complexity; owner handles scheduling by phone)
- Blog/news section (no content to populate; empty blog is a trust negative)
- Live chat (requires ongoing staffing; wrong for a one-person operation)
- Pricing page (varies by property; better handled on the call)
- Photo gallery (no photos yet; empty gallery damages trust)
- Social media feed embeds (slow-loading, requires active posting)
- Google Maps iframe (county callout is sufficient; iframe adds load time)
- Multi-page navigation (single-page is simpler, better for local SEO at launch)
- Heavy JS animations or parallax (hurts mobile performance, undermines trust)

### Architecture Approach

The site is a single `index.html` with anchor-based navigation. Each of the 10 sections is a `<section id="...">` element, enabling smooth native scroll (`html { scroll-behavior: smooth; }`). All styles live in one `style.css` (target: under 15 KB uncompressed) organized as CSS custom properties → reset → typography → layout utilities → section components → responsive breakpoints. All JS lives in one `main.js` (nav toggle, AOS init, ~50 lines). The file structure is intentionally flat to minimize confusion for a non-technical owner making edits.

**Major components:**
1. **`index.html`** — Complete site: nav, hero, services, process, about, service-area, testimonials, realtors, contact, footer; all anchor IDs present; HTML comments marking every editable block
2. **`style.css`** — Mobile-first styles with two breakpoints; CSS custom properties for brand tokens; section styles ordered to match HTML document flow
3. **`main.js`** — Nav hamburger toggle; AOS initialization; no other logic
4. **`assets/`** — Logo, hero background, inspector headshot placeholder; images compressed to WebP via Squoosh.app
5. **SEO layer** — Page `<title>`, `<meta description>`, JSON-LD LocalBusiness schema in `<head>`, Open Graph tags, `rel="canonical"`; no separate file, all inline in `index.html`

**Contact approach:** v1 uses `<a href="tel:...">` and `<a href="mailto:...">` links — no form, no third-party dependency, no silent failures. Formspree is the v2 option if a contact form is later requested.

### Critical Pitfalls

1. **Missing `.nojekyll` file** — GitHub Pages auto-runs Jekyll and can break files with underscores in the name. Add an empty `.nojekyll` to the repo root in the very first commit.
2. **Absolute paths breaking on GitHub Pages sub-path** — Use relative paths (`./assets/logo.jpg`) throughout `index.html` from day one, or use a custom domain. Document the convention in a comment at the top of the file.
3. **Launching with placeholder content visible** — Before any push to production, search the codebase for "lorem", "TODO", "[", "placeholder", "YOUR". License number and phone number are hard stops.
4. **Unoptimized hero image causing slow first paint** — Compress hero image under 150 KB (WebP via Squoosh.app). Set explicit `width` and `height` on `<img>` tags. Use `loading="lazy"` on below-the-fold images. Target LCP under 2.5 seconds.
5. **Phone number formatted incorrectly in `tel:` links** — Format as `tel:+15551234567` with no spaces or dashes. Test on both iOS Safari and Android Chrome.
6. **Missing LocalBusiness JSON-LD schema** — This is the single highest-impact SEO action for a local business. Include in `<head>` from the first deployed version, even with placeholder values replaced at launch.
7. **Owner locked out of their own repo** — The GitHub repository must be owned by or transferred to the owner's account before launch. Non-negotiable handoff requirement.

---

## Implications for Roadmap

The single-file architecture and zero-build-step constraint collapse what might otherwise be 6-8 phases into 4 clean, sequential phases. Each phase produces a shippable (if incomplete) artifact.

### Phase 1: Foundation
**Rationale:** Path and deployment conventions must be established before any content is authored. A broken GitHub Pages deployment discovered in Phase 3 wastes all prior work.
**Delivers:** Deployed GitHub Pages site (blank but live at the correct URL), `.nojekyll`, relative path convention documented, CSS custom properties with brand tokens, HTML skeleton with all 10 section stubs and anchor IDs, responsive nav with hamburger toggle, page `<title>` and `<meta>` tags
**Addresses:** Mobile-responsive layout (table stakes), HTTPS (table stakes), fast load baseline
**Avoids:** Absolute path pitfall, missing `.nojekyll` pitfall, missing `meta viewport` pitfall

### Phase 2: Content Sections
**Rationale:** All trust-building content sections are independent of each other and can be built and reviewed in sequence. Getting real copy in place early exposes gaps (missing credentials, no headshot) while there is still time.
**Delivers:** Hero (headline, subheadline, dual CTA), Services (4 card types), How It Works (3-step), About (bio placeholder, license number field, certification badge), Service Area (county list with city examples), Testimonials (3 placeholder cards), Realtor callout, Contact (tel: and mailto: links), Footer
**Addresses:** All table-stakes features; differentiators (How It Works, specialty service cards, realtor section, testimonials placeholder)
**Avoids:** Placeholder text shipped to production (HTML comments flag every editable block), phone number buried, About describing business not person, contact form silently failing

### Phase 3: Visual Polish
**Rationale:** Visual hierarchy, spacing, and animation are layered on top of working content — not designed in isolation. This order means design decisions are informed by actual copy length.
**Delivers:** Typography scale (Playfair Display + Inter loaded via Google Fonts), color application (black/cream/orange palette with orange accent-only discipline), spacing system, hover states (CSS transitions), AOS scroll-reveal animations, mobile-first responsive breakpoints tested at 390px, Lucide icon integration, footer as trust anchor (not dead end)
**Avoids:** Brand color dilution (fourth color), overuse of orange, weak mobile hierarchy, CTA button saying "Learn More", equal-weight card layout burying primary service

### Phase 4: Assets, SEO, and Handoff
**Rationale:** Assets (logo, images) and SEO markup require final content decisions (domain name, phone, license number) that may not be known earlier. Handoff documentation is the last deliverable before the owner takes over.
**Delivers:** Logo integrated (WebP, with descriptive `alt` text), hero image (real or solid-color fallback), inspector headshot (real or clearly labeled placeholder), JSON-LD LocalBusiness schema, Open Graph tags, `rel="canonical"`, favicon, `CNAME` file (if custom domain), `HOW-TO-UPDATE.md`, `LAUNCH-CHECKLIST.md`, cache-busting version strings on CSS/JS, `404.html`
**Avoids:** Missing schema markup, no canonical URL, images with no alt text, NAP inconsistency, owner unable to update site, social links remaining `href="#"` at launch, credentials section blank at launch

### Phase Ordering Rationale

- Phase 1 before everything: a broken deployment path would silently corrupt all subsequent work
- Phase 2 before Phase 3: design decisions (card width, heading sizes) depend on actual copy length and section count
- Phase 3 before Phase 4: image dimensions and favicon require the visual system to be settled
- Assets and handoff last: final domain and credentials are often the last pieces an owner provides

### Research Flags

Phases with standard, well-documented patterns (no additional research needed):
- **Phase 1:** GitHub Pages + `.nojekyll` + relative paths are thoroughly documented; no ambiguity
- **Phase 2:** Section structure and copywriting patterns for local service businesses are well-established
- **Phase 3:** CSS custom properties, Google Fonts loading, AOS, and Lucide are all stable, documented libraries

Phases that may benefit from validation during planning:
- **Phase 4 (SEO schema):** The exact `@type` value for a home inspection business (`HomeAndConstructionBusiness` vs. `LocalBusiness` with `serviceType`) should be verified against current schema.org documentation at implementation time
- **Phase 4 (Formspree, if added):** Free tier limits (50 submissions/month) and form spam behavior should be confirmed before recommending to owner

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Vanilla HTML/CSS/JS + GitHub Pages is the canonical answer; no-framework decision is confirmed by explicit Tailwind Play CDN warning in Tailwind's own docs |
| Features | HIGH | Section structure and feature tiers are consistent with well-established local service business patterns |
| Architecture | HIGH | Single-page anchor scroll is unambiguous for this content volume and non-technical owner constraint |
| Pitfalls | HIGH | Technical pitfalls (`.nojekyll`, relative paths, `tel:` format) sourced from GitHub Pages official docs and browser compatibility data |

**Overall confidence:** HIGH

### Gaps to Address

- **Inspector credentials:** License number format (FL HI-XXXXX), certification body (InterNACHI vs. ASHI vs. none), and whether a certification badge image is available — needed before About section copy is finalized
- **Contact information:** Final phone number and email address for `tel:` and `mailto:` links — needed before any section is marked "done"
- **Domain decision:** Whether a custom domain will be used (and what it is) affects CNAME setup, canonical URL, and Open Graph tags — needed before Phase 4
- **Real photography:** Owner headshot and property photos dramatically improve conversion; the build plan should include a clear placeholder strategy and explicit handoff instruction for when real photos arrive
- **Google Business Profile status:** Whether the owner has claimed and verified GBP — the site should link to it in the footer, and the launch checklist should gate on it being complete

---

## Sources

See individual research files for full source detail:
- `.planning/research/STACK.md` — technology selection, CDN URLs, CSS architecture
- `.planning/research/FEATURES.md` — feature tiers, section order recommendation
- `.planning/research/ARCHITECTURE.md` — file structure, component breakdown, SEO markup, mobile-first notes
- `.planning/research/PITFALLS.md` — design, technical, content, local SEO, and client handoff pitfalls

### Primary (HIGH confidence)
- GitHub Pages official documentation — `.nojekyll`, CNAME, HTTPS enforcement, CDN caching
- Tailwind CSS official documentation — Play CDN "not for production" warning
- schema.org — LocalBusiness JSON-LD structure

### Secondary (MEDIUM confidence)
- Lucide Icons (jsdelivr.com) — verify current version at implementation time; last confirmed stable
- AOS 2.3.4 (unpkg.com) — last major release 2021; widely used; check for newer versions at build time
- Playfair Display + Inter pairing — established in service industry site patterns; MEDIUM because font trends shift

---

*Research completed: 2026-04-09*
*Ready for roadmap: yes*
