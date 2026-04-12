---
phase: 02-content-and-visual-design
plan: "01"
subsystem: frontend
tags: [hero, services, how-it-works, cdn, lucide, aos, buttons, grid]
dependency_graph:
  requires: []
  provides: [hero-section, services-grid, how-it-works-steps, lucide-icons, aos-animations, btn-styles]
  affects: [index.html, styles.css]
tech_stack:
  added:
    - "AOS 2.3.4 (unpkg CDN) — scroll-reveal animation library"
    - "Lucide 1.8.0 (unpkg CDN) — icon library, initialized via lucide.createIcons()"
  patterns:
    - "CSS custom property tokens for all colors, spacing, and typography"
    - "clamp() for fluid hero headline font size"
    - "CSS Grid for 2-column service card layout, 1-column on mobile"
    - "Flexbox for steps list, hero CTAs, icon badges"
    - "data-lucide attributes on i elements rendered to SVG by lucide.createIcons()"
    - "data-aos attributes for scroll-reveal animations"
key_files:
  modified:
    - path: index.html
      summary: "Added AOS CSS link in head; replaced hero/services/how-it-works stubs with full markup; replaced script.js tag with Lucide + AOS + script.js + lucide.createIcons() block"
    - path: styles.css
      summary: "Appended sections 6a-6e: hero gradient, button variants, section-inner wrapper, service card grid with hover, icon badge, step layout"
decisions:
  - "Used h1 (not h2) for hero headline per plan spec — hero is the page-level heading"
  - "Script loading order: Lucide before AOS before script.js, then inline lucide.createIcons() — ensures icons render before page is interactive"
  - "Pinned CDN versions exactly: AOS 2.3.4, Lucide 1.8.0 — matches threat model T-02-01 and T-02-02 acceptance"
  - "All placeholder text uses [BRACKETED] format with HTML comment instructions per plan spec"
metrics:
  duration_minutes: 15
  completed_date: "2026-04-12T12:21:21Z"
  tasks_completed: 2
  tasks_total: 2
  files_modified: 2
---

# Phase 02 Plan 01: Hero, Services, and How It Works Summary

Hero section with dark gradient, cream h1 headline, orange subheadline, and two CTA buttons (solid orange primary + outlined cream secondary); 4-card responsive services grid with orange Lucide icon badges and specialty card listing mold/radon/sewer/pool/roof; 3-step How It Works layout with numbered badges and Lucide icons; AOS and Lucide CDN tags wired in.

## What Was Built

### Task 1: CDN Tags and Hero Section

**index.html — head:**
- Added `<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">` after Google Fonts link

**index.html — before `</body>`:**
- Replaced single `<script src="script.js">` with ordered block:
  1. `<script src="https://unpkg.com/lucide@1.8.0/dist/umd/lucide.min.js">`
  2. `<script src="https://unpkg.com/aos@2.3.4/dist/aos.js">`
  3. `<script src="script.js">`
  4. Inline `<script>lucide.createIcons();</script>`

**index.html — hero section:**
- `<h1 class="hero-headline">` with headline text (not h2)
- `<p class="hero-sub">` with orange subheadline listing service counties
- `<div class="hero-ctas">` with two links: `btn btn--primary` (tel: placeholder) and `btn btn--secondary` (mailto: placeholder)
- `data-aos="fade-up"` on the hero-content wrapper div

**styles.css additions (sections 6a-6c):**
- `.section--hero` — dark gradient override: `linear-gradient(to bottom, #0A0A0A 0%, #1a0e08 60%, #2d1810 100%)`
- `.hero-content` — max-width 760px, centered
- `.hero-headline` — Playfair Display, `clamp(2rem, 5vw, 3.5rem)`, cream color
- `.hero-sub` — Inter 20px, orange color, max-width 600px
- `.hero-ctas` — flex row, centered, wrapping
- `.btn` — shared button base: inline-block, 44px min-height, 44px min-width, transitions
- `.btn--primary` — orange background, white text, orange border
- `.btn--secondary` — transparent background, cream text, cream border
- `.btn:hover` — opacity 0.88, translateY(-2px)
- `.section-inner` — width 100%, max-width 960px

### Task 2: Services Grid and How It Works

**index.html — services section:**
- 4 `.service-card` elements in `.services-grid`, each with:
  - `.service-icon-badge` containing `<i data-lucide="...">` (home, building-2, microscope, hard-hat)
  - `<h3>` heading
  - `<p>` description with bracketed placeholder comment
  - `<a href="#contact" class="card-cta">` link
- `data-aos="fade-up"` on section h2 and each card (with data-aos-delay 0/100/200/300)
- Specialty card explicitly lists: mold, radon, sewer, pool, and roof

**index.html — how-it-works section:**
- 3 `.step` elements in `.steps-list`, each with:
  - `.step-number` div (1, 2, 3)
  - `<i data-lucide="...">` (calendar-check, clipboard-list, file-text)
  - `<h3>` heading (Schedule, Inspect, Report)
  - `<p>` description with bracketed placeholder comment
- `data-aos="fade-up"` on section h2 and each step (with data-aos-delay 0/100/200)

**styles.css additions (sections 6d-6e):**
- `.services-grid` — CSS Grid, `repeat(2, 1fr)`, gap space-xl, max-width 900px
- `@media (max-width: 768px) .services-grid` — `grid-template-columns: 1fr`
- `.service-card` — white background, border-radius 12px, box-shadow, flex column, gap space-md
- `.service-card:hover` — translateY(-4px), elevated shadow
- `.service-icon-badge` — 48px circle, orange background, flex centered
- `.service-icon-badge svg` — 24px, white stroke
- `.service-card h3` — Playfair Display bold
- `.card-cta` — orange, semibold, no underline (underline on hover)
- `.steps-list` — flex row, wrapping, centered, max-width 900px
- `.step` — flex 1 1 220px, max-width 260px, centered column
- `.step-number` — 48px orange circle, white Playfair bold text
- `.step h3` — Playfair Display bold
- `.step > svg` — 32px, orange stroke

## Key CSS Classes Added

| Class | Purpose |
|-------|---------|
| `.hero-headline` | h1 hero heading with fluid clamp font size |
| `.hero-sub` | Orange subheadline paragraph |
| `.hero-ctas` | Flex container for CTA button pair |
| `.btn` | Shared button base styles |
| `.btn--primary` | Solid orange button variant |
| `.btn--secondary` | Outlined cream button variant |
| `.section-inner` | Max-width wrapper for section content |
| `.services-grid` | 2-column CSS Grid for service cards |
| `.service-card` | White elevated card with hover lift |
| `.service-icon-badge` | Orange circle icon container |
| `.card-cta` | Orange text link at card bottom |
| `.steps-list` | Flex row container for process steps |
| `.step` | Individual step: number + icon + heading + text |
| `.step-number` | Orange circle with numeral |

## Verification Results

### Task 1 Automated Verify (all returned 1)
- `aos@2.3.4/dist/aos.css` in index.html: 1
- `lucide@1.8.0/dist/umd/lucide.min.js` in index.html: 1
- `lucide.createIcons` in index.html: 1
- `hero-headline` in index.html: 1
- `btn--primary` in index.html: 1
- `btn--secondary` in index.html: 1
- `linear-gradient` in styles.css: 1
- `hero-headline` in styles.css: 1

### Task 2 Automated Verify
- `service-card` in index.html: 4 (correct — one per service)
- `data-lucide="home"` in index.html: 1
- `data-lucide="microscope"` in index.html: 1
- `mold, radon, sewer, pool` in index.html: 1
- `steps-list` in index.html: 1
- `step-number` in index.html: 3 (correct — one per step)
- `services-grid` in styles.css: 2 (class definition + media query)
- `step-number` in styles.css: 1

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

The following placeholders exist by design and are intentional for owner replacement:

| File | Content | Purpose |
|------|---------|---------|
| index.html hero | `href="tel:[YOUR-PHONE]"` | Owner replaces with real phone number |
| index.html hero | `href="mailto:[YOUR-EMAIL]"` | Owner replaces with real email address |
| index.html services | 4 `<p>` description paragraphs | Owner replaces with personalized service descriptions |
| index.html how-it-works | 3 `<p>` description paragraphs | Owner replaces with actual process descriptions |

All stubs are marked with `<!-- [PLACEHOLDER] ... -->` HTML comments per plan specification. These do not prevent the plan's goal — the sections are fully functional and visually complete with placeholder copy.

## Threat Surface Scan

No new security-relevant surface introduced beyond what is documented in the plan's threat model. CDN scripts (Lucide 1.8.0, AOS 2.3.4) are pinned to exact versions on unpkg.com, consistent with T-02-01 and T-02-02 accept dispositions.

## Self-Check

### Files exist
- `C:/Users/Daddy/Downloads/Projects/paradigm_inspection/index.html` — FOUND
- `C:/Users/Daddy/Downloads/Projects/paradigm_inspection/styles.css` — FOUND
- `C:/Users/Daddy/Downloads/Projects/paradigm_inspection/.planning/phases/02-content-and-visual-design/02-01-SUMMARY.md` — this file

### Commit exists
- `c7a3f40` feat: phase 02 plan 01 — hero, services, how-it-works sections — FOUND

## Self-Check: PASSED
