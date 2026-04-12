---
phase: 03-seo-assets-and-handoff
plan: "01"
subsystem: seo
tags: [html, meta-tags, open-graph, twitter-card, canonical, og-image, svg, social-sharing]

# Dependency graph
requires:
  - phase: 02-content-and-visual-design
    provides: "Completed index.html with all content sections, brand colors in styles.css"
provides:
  - "Complete SEO head block in index.html: title, meta description, canonical, 7 OG tags, 4 Twitter Card tags"
  - "og-image.svg branded social card at repo root (1200x630, black/cream/orange brand colors)"
  - "og-image-export.html helper for owner to generate og-image.png manually"
affects:
  - 03-02-favicon
  - 03-03-deployment
  - 03-04-documentation

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "All absolute URLs in SEO tags use https://paradigminspection.org (no trailing slash)"
    - "og:image points to PNG (not SVG) for Facebook/Twitter/X/iMessage compatibility"
    - "SVG kept as editable source; PNG is the deployed social card asset"

key-files:
  created:
    - og-image.svg
    - og-image-export.html
  modified:
    - index.html

key-decisions:
  - "og:image points to og-image.png (PNG) not og-image.svg — SVG not supported by Facebook, Twitter/X, or iMessage per D-05 and research"
  - "og-image.png requires manual browser export by owner — no build tools available; og-image-export.html provided as helper"
  - "Used HTML entity &#8212; for em dash in title to ensure proper encoding in all browsers"
  - "All SEO tags inserted between viewport meta and Google Fonts preconnect tags, maintaining semantic head structure"

patterns-established:
  - "SEO tags block order: meta description > canonical > Open Graph > Twitter Card"

requirements-completed: [SEO-01, SEO-02, SEO-03, SEO-04, SEO-06]

# Metrics
duration: 6min
completed: 2026-04-12
---

# Phase 03 Plan 01: SEO Meta Tags and Social Card Summary

**Complete SEO head block added to index.html (title, canonical, 7 OG tags, 4 Twitter Card tags) plus branded og-image.svg social card at 1200x630 with black/cream/orange brand colors**

## Performance

- **Duration:** 6 min
- **Started:** 2026-04-12T22:47:44Z
- **Completed:** 2026-04-12T22:49:32Z
- **Tasks:** 2 of 2
- **Files modified:** 3

## Accomplishments

- Updated index.html title to full SEO title including county names (D-08)
- Added 14 SEO tags to index.html head: meta description, canonical, 7 Open Graph tags, 4 Twitter Card tags
- Created og-image.svg with correct 1200x630 dimensions and full brand layout (black background, cream heading, orange accent bar, subtitle, county list, domain)
- All absolute URLs consistently use `https://paradigminspection.org` (no trailing slash, per D-03)
- All img elements verified to have descriptive alt text (none empty or missing)
- og-image-export.html helper provided for owner to generate og-image.png in browser

## Task Commits

Each task was committed atomically:

1. **Task 1: Add SEO meta tags, OG tags, canonical, and Twitter Card to index.html head** - `89eb43a` (feat)
2. **Task 2: Create og-image.svg source and og-image.png deployed asset** - `ed75bd9` (feat)

## Files Created/Modified

- `index.html` - Added 21 lines to head: updated title, meta description, canonical link, 7 OG tags, 4 Twitter Card tags
- `og-image.svg` - Branded social card 1200x630 px; black (#0A0A0A) background, cream (#F5EDD6) PARADIGM INSPECTION heading, orange (#E07A2F) accent bar, Licensed Home Inspector subtitle, county list, paradigminspection.org domain
- `og-image-export.html` - Helper file for owner to open in browser and export og-image.png via right-click or DevTools screenshot

## Decisions Made

- **og:image points to PNG:** D-05 in CONTEXT.md documents that SVG is not supported by Facebook, Twitter/X, or iMessage for og:image. The meta tag points to `og-image.png`; the SVG is the editable source. This matches the plan's intent exactly.
- **og-image.png requires manual export:** No ImageMagick, Inkscape, rsvg-convert, sharp, canvas, or puppeteer available in the execution environment. The plan explicitly anticipated this and directed creation of a helper file (og-image-export.html) and documentation in the summary.
- **em dash encoding:** Used HTML entity `&#8212;` for the em dash in the title and OG/Twitter title tags to ensure consistent rendering across all browsers and social platform scrapers.

## Deviations from Plan

None — plan executed exactly as written. The PNG manual export path was the documented alternative in Task 2's action block ("If the executor cannot open a browser...") and was followed as specified.

## Known Stubs

- **og-image.png** — Not yet generated. The `og:image` meta tag in index.html points to `https://paradigminspection.org/og-image.png`. This file must be created before launch or social sharing will show no image. Steps to generate:
  1. Open `og-image-export.html` in Google Chrome or Firefox
  2. Right-click the image and choose "Save image as..." → save as `og-image.png`
  3. Or use browser DevTools device toolbar at 1200x630 and take a screenshot
  4. Commit `og-image.png` to the repo root
  - This is tracked in the LAUNCH-CHECKLIST.md (Plan 04).

## Issues Encountered

None — all SEO tags inserted cleanly. No conflicts with existing head structure.

## User Setup Required

**Owner action required before launch:** Generate og-image.png from og-image.svg.

Steps:
1. Open `og-image-export.html` in a modern browser (Chrome or Firefox)
2. Right-click the displayed image and choose "Save image as..." → name it `og-image.png`
3. Move `og-image.png` to the repo root folder (same folder as `index.html`)
4. Commit and push the file to GitHub
5. Delete `og-image-export.html` after PNG is committed (it is only a helper)

Alternative: Take a browser DevTools screenshot at exactly 1200x630 pixels.

## Next Phase Readiness

- SEO meta tags and OG/Twitter Card tags are complete and committed
- og-image.svg is the authoritative source for the social card
- og-image.png must be generated by owner before launch (see Known Stubs above)
- Phase 03 Plans 02–04 (favicon, deployment/CNAME, documentation) can proceed in parallel

---
*Phase: 03-seo-assets-and-handoff*
*Completed: 2026-04-12*
