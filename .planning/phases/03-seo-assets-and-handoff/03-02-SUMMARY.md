---
phase: 03-seo-assets-and-handoff
plan: 02
subsystem: seo
tags: [json-ld, structured-data, schema-org, favicon, seo, html]

# Dependency graph
requires:
  - phase: 03-01
    provides: OG/Twitter Card meta tags already in index.html head (insertion point for JSON-LD)
provides:
  - LocalBusiness JSON-LD structured data block in index.html (HomeAndConstructionBusiness type, all four counties)
  - Favicon link tags in both index.html and 404.html
  - 404.html title updated with em dash for consistency
  - Instructions for owner to generate favicon binary files via realfavicongenerator.net
affects: [03-04-handoff, launch-checklist]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "JSON-LD structured data in head after Twitter Card tags, before preconnect links"
    - "Favicon link set: favicon-48.png (48x48), favicon.ico (32x32), apple-touch-icon.png (180x180)"
    - "404.html has favicon links only — no canonical, OG, or JSON-LD"

key-files:
  created: []
  modified:
    - index.html
    - 404.html

key-decisions:
  - "HomeAndConstructionBusiness @type chosen as the most specific schema.org type for home inspectors (no dedicated HomeInspector type exists)"
  - "Omit address field from JSON-LD — service-area business with no public office"
  - "Skip SVG favicon — logo.jpg is a JPEG photo that would need conversion with no quality benefit at icon sizes"
  - "Binary favicon files not generated programmatically — owner directed to realfavicongenerator.net; link tags added and comment left in both HTML files"
  - "404.html gets favicon links only, no canonical/OG/JSON-LD — error pages should not send SEO signals"

patterns-established:
  - "LocalBusiness JSON-LD: use placeholder values [YOUR-PHONE] and [YOUR-EMAIL] consistent with existing codebase bracketed-placeholder pattern"
  - "Favicon generation workflow: link tags in HTML + owner instructions comment pointing to realfavicongenerator.net"

requirements-completed: [SEO-05, SEO-07]

# Metrics
duration: 10min
completed: 2026-04-12
---

# Phase 03 Plan 02: SEO Structured Data and Favicon Summary

**LocalBusiness JSON-LD with HomeAndConstructionBusiness type (all four South Florida counties) and favicon link tags in both index.html and 404.html**

## Performance

- **Duration:** ~10 min
- **Started:** 2026-04-12T23:08:00Z
- **Completed:** 2026-04-12T23:18:43Z
- **Tasks:** 2
- **Files modified:** 2 (index.html, 404.html)

## Accomplishments

- Added valid LocalBusiness JSON-LD block to index.html with HomeAndConstructionBusiness type, all four service counties, eight service types, and placeholder phone/email values
- Added favicon link tags (favicon-48.png, favicon.ico, apple-touch-icon.png) to index.html after the JSON-LD block
- Added same three favicon link tags to 404.html head — the only SEO addition appropriate for an error page
- Updated 404.html title from hyphen to em dash (`&#8212;`) for consistency with main site title style
- Added owner-facing comment in both HTML files pointing to realfavicongenerator.net for binary favicon generation

## Task Commits

Each task was committed atomically:

1. **Task 1: Add LocalBusiness JSON-LD to index.html head** - `af016dd` (feat)
2. **Task 2: Add favicon link tags to index.html and 404.html** - `034e9a5` (feat)

**Plan metadata:** (docs commit — see below)

## Files Created/Modified

- `index.html` - Added JSON-LD structured data block and three favicon link tags in head section
- `404.html` - Added three favicon link tags in head section; updated title to use em dash

## Decisions Made

- Used `HomeAndConstructionBusiness` as the JSON-LD @type. No dedicated `HomeInspector` type exists in schema.org; `HomeAndConstructionBusiness` is the most specific applicable type. `ProfessionalService` is less precise.
- Omitted `address` field from JSON-LD. The business is a service-area business with no public office — adding an address could mislead clients or create consistency issues.
- Skipped SVG favicon variant. `logo.jpg` is a JPEG photo; converting to SVG would produce a raster-embedded SVG with no browser rendering advantage at favicon sizes.
- Binary favicon files (`favicon.ico`, `favicon-48.png`, `apple-touch-icon.png`) not generated programmatically — Claude cannot run realfavicongenerator.net (browser-based tool). Link tags added, comment with instructions left in both HTML files. Owner action required before launch — tracked in LAUNCH-CHECKLIST.md.
- `404.html` receives favicon link tags only — no canonical, OG tags, or JSON-LD. Error pages sending SEO signals is an anti-pattern (see plan research Pitfall 7).

## Deviations from Plan

None — plan executed exactly as written. Task 1 was already committed (af016dd) from a prior partial execution; Task 2 had its HTML changes applied but uncommitted. Both tasks verified against all acceptance criteria before committing.

## Known Stubs

- `favicon.ico`, `favicon-48.png`, `apple-touch-icon.png` — Files do not exist in the repo yet. Link tags in HTML reference them but binary files must be generated by owner using realfavicongenerator.net with logo.jpg as the source. Instructions are in both HTML files as comments and in LAUNCH-CHECKLIST.md. This stub is intentional and documented — favicons will be absent until owner generates them, which will cause the default browser blank-page icon to show. No plan functionality is blocked; this is an owner action item.

## Issues Encountered

None.

## User Setup Required

**Owner action needed before launch:** Generate favicon binary files.

1. Go to https://realfavicongenerator.net
2. Upload `logo.jpg` from the repo root
3. Download the generated package
4. Copy `favicon.ico`, `favicon-48.png`, and `apple-touch-icon.png` to the repo root
5. Commit those files

This step is tracked in `LAUNCH-CHECKLIST.md`.

## Next Phase Readiness

- JSON-LD structured data ready for Google Rich Results validation
- Favicon link tags in place — will function once owner generates binary files
- 404.html is SEO-clean (no spurious canonical/OG/JSON-LD tags)
- Phase 03 Plans 03 and 04 (CNAME and owner handoff docs) are complete per git log

---
*Phase: 03-seo-assets-and-handoff*
*Completed: 2026-04-12*
