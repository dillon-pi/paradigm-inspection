# Phase 3: SEO, Assets, and Handoff - Context

**Gathered:** 2026-04-12
**Status:** Ready for planning

<domain>
## Phase Boundary

Add all local SEO markup, a favicon, correct GitHub Pages deployment files, and owner documentation so the site can be handed off and launched with confidence. Covers: `<title>`, meta description, Open Graph tags, LocalBusiness JSON-LD, canonical tag, favicon, CNAME, og:image SVG asset, HOW-TO-UPDATE.md, and LAUNCH-CHECKLIST.md. Content creation and visual design are Phase 2 (complete).

</domain>

<decisions>
## Implementation Decisions

### Custom Domain
- **D-01:** Domain is `paradigminspection.org` — commit a `CNAME` file at repo root containing exactly `paradigminspection.org`
- **D-02:** Canonical URL and og:url both resolve to `https://paradigminspection.org`
- **D-03:** All absolute URLs in SEO tags use `https://paradigminspection.org` (no trailing slash)

### OG Social Image
- **D-04:** Create an `og-image.svg` in repo root — branded card: black background (`#0A0A0A`), cream "PARADIGM INSPECTION" heading (Playfair Display style), orange horizontal accent bar (`#E07A2F`), cream body text ("Licensed Home Inspector"), county list, and `paradigminspection.org` domain
- **D-05:** `og:image` meta tag points to `https://paradigminspection.org/og-image.svg`
- **D-06:** SVG dimensions: `width="1200" height="630"` — correct for social sharing
- **D-07:** LAUNCH-CHECKLIST.md notes that the owner can optionally replace with a PNG screenshot of the SVG for maximum platform compatibility, but SVG works as-is on most platforms

### SEO Meta Tags (locked from requirements)
- **D-08:** `<title>`: `Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward & Miami-Dade`
- **D-09:** Meta description: ≤155 chars, includes service types (residential, commercial, specialty) and all four county names
- **D-10:** Open Graph: `og:title`, `og:description`, `og:url`, `og:image`, `og:type: website`
- **D-11:** `<link rel="canonical" href="https://paradigminspection.org">`

### LocalBusiness JSON-LD
- **D-12:** Schema type: `LocalBusiness` (or `HomeAndConstructionBusiness` subtype for better specificity)
- **D-13:** Required fields: `name`, `telephone` (`[YOUR-PHONE]` placeholder), `email` (`[YOUR-EMAIL]` placeholder), `url`, `areaServed` (array: Palm Beach County, Broward County, Miami-Dade County, Monroe County), `serviceType`
- **D-14:** JSON-LD block goes in `<head>` per SEO-05

### Favicon
- **D-15:** Generate favicon from `logo.jpg` — link `<link rel="icon">` tags in `<head>` for standard favicon (32×32), and `<link rel="apple-touch-icon">` (180×180)
- **D-16:** If SVG favicon is feasible from the logo, include `<link rel="icon" type="image/svg+xml">` as well — Claude's discretion based on logo.jpg quality at small sizes
- **D-17:** Favicon files committed to repo root

### HOW-TO-UPDATE.md Scope
- **D-18:** Full onboarding doc — covers everything from zero:
  1. Create a GitHub account
  2. Fork/upload the site files and push to `main`
  3. Enable GitHub Pages (Settings → Pages → Source: main / root)
  4. Connect `paradigminspection.org` domain (DNS A records and CNAME record for www)
  5. Set up Formspree (create account, get form ID, replace `[YOUR-FORMSPREE-ID]`)
  6. Replace every placeholder: phone, email, bio, headshot, testimonials, social handles, license number
- **D-19:** Written for a non-technical owner — GitHub.com UI only (no command line), step-by-step with exact field names and menu paths
- **D-20:** Each section maps to the exact line numbers or HTML comments in `index.html`

### LAUNCH-CHECKLIST.md
- **D-21:** Flat checklist organized by category: Content Placeholders, Deployment, Third-Party Setup (Formspree), Post-Launch Verification
- **D-22:** Post-launch verification steps included: test contact form, paste URL into social preview tool, verify favicon appears, confirm site loads at `https://paradigminspection.org`
- **D-23:** Every `[BRACKETED PLACEHOLDER]` in the codebase gets its own checkbox entry

### Claude's Discretion
- Exact meta description copy (must be ≤155 chars and include required terms)
- JSON-LD serviceType value(s) — use array if multiple apply
- Favicon file sizes beyond 32px and 180px
- Exact DNS record values in HOW-TO-UPDATE.md (use GitHub Pages documented IP addresses)
- HOW-TO-UPDATE.md formatting (headers, numbered steps, screenshot callouts)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements
- `.planning/REQUIREMENTS.md` — Phase 3 requirements: SEO-01 through SEO-07, DEPLOY-02 through DEPLOY-05
- `CLAUDE.md` — Tech stack constraints (static HTML/CSS/JS only, no build tools), what NOT to use

### Phase Goal and Success Criteria
- `.planning/ROADMAP.md` §Phase 3 — Success criteria (5 items), requirement IDs

### Existing Codebase
- `index.html` — Current `<head>` section (missing SEO tags to be added), existing placeholder pattern `[BRACKETED]`, img alt text to audit
- `logo.jpg` — Source asset for favicon generation
- `404.html` — May also need `<title>` and canonical tag updates

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `logo.jpg` — Already in repo root; source for favicon and brand reference for og-image.svg design
- `styles.css` — CSS custom properties available: `--color-black: #0A0A0A`, `--color-cream: #F5EDD6`, `--color-orange: #E07A2F` — use same values in og-image.svg

### Established Patterns
- All placeholders use `[BRACKETED ALL-CAPS]` pattern — JSON-LD telephone/email fields must follow the same convention
- Phase 1 established `.nojekyll` at repo root (already committed per DEPLOY-01)
- No build step — all files are served directly; og-image.svg and favicon files must be at repo root or a documented path

### Integration Points
- `index.html` `<head>` — All SEO tags, JSON-LD script block, and favicon links go here
- `404.html` — Verify it has a `<title>` tag (may need updating to match the main page title pattern)
- `CNAME` — New file at repo root, single line: `paradigminspection.org`
- `og-image.svg` — New file at repo root, linked from og:image meta tag

</code_context>

<specifics>
## Specific Ideas

- Domain is `paradigminspection.org` (confirmed by owner — not .com)
- HOW-TO-UPDATE.md should be written as if the owner has never used GitHub before — no assumed technical knowledge
- og-image.svg layout: black bg, "PARADIGM INSPECTION" large heading, orange horizontal rule, "Licensed Home Inspector" subtitle, county list, domain URL at bottom

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.

</deferred>

---

*Phase: 03-seo-assets-and-handoff*
*Context gathered: 2026-04-12*
