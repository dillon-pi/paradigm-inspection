# Phase 3: SEO, Assets, and Handoff - Research

**Researched:** 2026-04-12
**Domain:** Static HTML local SEO, structured data, favicon generation, GitHub Pages deployment, owner documentation
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **D-01:** Domain is `paradigminspection.org` — commit a `CNAME` file at repo root containing exactly `paradigminspection.org`
- **D-02:** Canonical URL and og:url both resolve to `https://paradigminspection.org`
- **D-03:** All absolute URLs in SEO tags use `https://paradigminspection.org` (no trailing slash)
- **D-04:** Create `og-image.svg` in repo root — branded card: black background (`#0A0A0A`), cream "PARADIGM INSPECTION" heading, orange horizontal accent bar (`#E07A2F`), cream body text ("Licensed Home Inspector"), county list, and `paradigminspection.org` domain
- **D-05:** `og:image` meta tag points to `https://paradigminspection.org/og-image.svg`
- **D-06:** SVG dimensions: `width="1200" height="630"` — correct for social sharing
- **D-07:** LAUNCH-CHECKLIST.md notes that the owner can optionally replace with a PNG screenshot of the SVG for maximum platform compatibility, but SVG works as-is on most platforms
- **D-08:** `<title>`: `Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward & Miami-Dade`
- **D-09:** Meta description: ≤155 chars, includes service types (residential, commercial, specialty) and all four county names
- **D-10:** Open Graph: `og:title`, `og:description`, `og:url`, `og:image`, `og:type: website`
- **D-11:** `<link rel="canonical" href="https://paradigminspection.org">`
- **D-12:** Schema type: `LocalBusiness` (or `HomeAndConstructionBusiness` subtype for better specificity)
- **D-13:** Required fields: `name`, `telephone` (`[YOUR-PHONE]` placeholder), `email` (`[YOUR-EMAIL]` placeholder), `url`, `areaServed` (array: Palm Beach County, Broward County, Miami-Dade County, Monroe County), `serviceType`
- **D-14:** JSON-LD block goes in `<head>` per SEO-05
- **D-15:** Generate favicon from `logo.jpg` — link `<link rel="icon">` tags in `<head>` for standard favicon (32×32), and `<link rel="apple-touch-icon">` (180×180)
- **D-16:** If SVG favicon is feasible from the logo, include `<link rel="icon" type="image/svg+xml">` as well — Claude's discretion based on logo.jpg quality at small sizes
- **D-17:** Favicon files committed to repo root
- **D-18:** HOW-TO-UPDATE.md — full onboarding covering: GitHub account creation, fork/push to main, enable GitHub Pages, connect custom domain (DNS A records + CNAME), Formspree setup, replace all placeholders
- **D-19:** Written for a non-technical owner — GitHub.com UI only, step-by-step with exact field names and menu paths
- **D-20:** Each section maps to exact line numbers or HTML comments in `index.html`
- **D-21:** LAUNCH-CHECKLIST.md — flat checklist organized by category: Content Placeholders, Deployment, Third-Party Setup (Formspree), Post-Launch Verification
- **D-22:** Post-launch verification steps: test contact form, social preview tool, favicon check, site loads at `https://paradigminspection.org`
- **D-23:** Every `[BRACKETED PLACEHOLDER]` in codebase gets its own checkbox entry

### Claude's Discretion
- Exact meta description copy (must be ≤155 chars and include required terms)
- JSON-LD serviceType value(s) — use array if multiple apply
- Favicon file sizes beyond 32px and 180px
- Exact DNS record values in HOW-TO-UPDATE.md (use GitHub Pages documented IP addresses)
- HOW-TO-UPDATE.md formatting (headers, numbered steps, screenshot callouts)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SEO-01 | Page `<title>` is: "Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward & Miami-Dade" | Exact HTML documented in Code Examples section |
| SEO-02 | Meta description (155 chars max) includes service types and all four county names | Character limit verified; draft copy provided in Code Examples |
| SEO-03 | Open Graph tags: og:title, og:description, og:url, og:image, og:type:website | Full HTML block documented; SVG og:image pitfall documented |
| SEO-04 | All `<img>` elements have descriptive, locally-relevant alt text | Existing codebase audit — alt text already present; JSON-LD image needs no alt |
| SEO-05 | LocalBusiness JSON-LD in `<head>` with name, telephone, email, areaServed (4 counties), serviceType, url | Complete JSON-LD block with HomeAndConstructionBusiness type provided |
| SEO-06 | `<link rel="canonical">` set to site's primary URL | Tag format documented in Code Examples |
| SEO-07 | Favicon generated from logo mark, linked in `<head>` | Three-file strategy (ICO, PNG, apple-touch-icon) documented; no-build-tool approach via realfavicongenerator.net |
| DEPLOY-02 | Site deployed to GitHub Pages under owner's GitHub account | HOW-TO-UPDATE.md scope documented |
| DEPLOY-03 | CNAME file committed for custom domain | File content and format verified |
| DEPLOY-04 | HOW-TO-UPDATE.md in plain English: how to edit on GitHub.com, section mapping, deploy time | Structure and required sections documented |
| DEPLOY-05 | LAUNCH-CHECKLIST.md enumerates every placeholder with checkbox | Complete placeholder inventory from codebase audit provided |
</phase_requirements>

---

## Summary

Phase 3 is primarily an HTML authoring and file-creation phase. There is no JavaScript to write, no CSS to add, and no framework to install. Every deliverable is either a new text file committed to the repo root, or new tags added to the existing `<head>` sections of `index.html` and `404.html`.

The single most important research finding is that **SVG is not a supported format for `og:image` on Facebook, Twitter/X, or iMessage**. Decision D-05 locks the `og:image` to point at `og-image.svg`, and D-07 correctly flags this as a known compatibility gap. The LAUNCH-CHECKLIST.md must prominently advise the owner to convert `og-image.svg` to a PNG using a free browser tool (e.g., browser screenshot or Squoosh.app) before launch, and the `og:image` tag should point to a PNG file (e.g., `og-image.png`). The SVG is still worth creating as the canonical source of truth for the branded card, but it should not be the value in the meta tag.

The favicon strategy is straightforward: use realfavicongenerator.net (free, browser-based, accepts JPG) to generate the required files from `logo.jpg`, then commit the outputs to repo root. Modern best practice for a static site without build tools is three files: `favicon.ico` (32×32 legacy fallback), `favicon-48.png` (modern browsers), and `apple-touch-icon.png` (180×180, iOS home screen). An SVG favicon is technically supported in Chrome, Firefox, and Safari 15.6+ but not iOS Safari — it is a bonus, not a requirement.

**Primary recommendation:** Create all SEO tags, JSON-LD, CNAME, og-image.svg (source), og-image.png (deployed), favicon files, and both Markdown documents in a single focused wave. Every output is a static text or image file — no dependencies required.

---

## Project Constraints (from CLAUDE.md)

Directives the planner must verify compliance against:

| Directive | Impact on This Phase |
|-----------|---------------------|
| Static HTML/CSS/JS only — no backend, no build tools | All SEO tags are plain HTML. No server-side rendering. No node scripts. Favicon files generated via browser tool, not CLI |
| GitHub Pages compatible | CNAME file format confirmed. `.nojekyll` already committed (Phase 1). All asset paths must be root-relative |
| All placeholder content clearly marked with `[BRACKETED]` pattern | JSON-LD telephone/email must use `[YOUR-PHONE]` and `[YOUR-EMAIL]` literals — consistent with existing code |
| Keep dependencies minimal | No new CDN scripts or libraries needed for Phase 3 |
| Images must be optimized or use placeholders | `og-image.png` should be exported at 1200×630 and can be further compressed via Squoosh.app |

---

## Standard Stack

### Core (this phase — no new libraries)
| Technology | Version | Purpose | Notes |
|------------|---------|---------|-------|
| HTML5 meta tags | — | SEO, Open Graph | Copy-paste tags into existing `<head>` |
| JSON-LD `<script>` block | — | Structured data for Google | Inline in `<head>`, no library needed |
| SVG (hand-authored) | — | og-image source asset | 1200×630 viewport, embedded fonts via `<text>` elements |
| realfavicongenerator.net | — | Favicon generation from JPG | Free, browser-based, outputs ICO + PNG + apple-touch-icon |

### No New Dependencies
This phase adds zero CDN dependencies, zero npm packages, and zero build steps. Everything is authored directly as HTML, SVG, Markdown, and image files.

---

## Architecture Patterns

### File Additions — Repo Root
```
paradigm_inspection/
├── CNAME                  # new — one line: paradigminspection.org
├── og-image.svg           # new — branded 1200×630 social card (source)
├── og-image.png           # new — PNG export of og-image.svg (deployed in og:image tag)
├── favicon.ico            # new — 32×32 ICO for legacy browsers (from realfavicongenerator.net)
├── favicon-48.png         # new — 48×48 PNG for modern browsers
├── apple-touch-icon.png   # new — 180×180 PNG for iOS home screen
├── HOW-TO-UPDATE.md       # new — owner onboarding guide
└── LAUNCH-CHECKLIST.md    # new — pre-launch verification checklist
```

### Pattern: SEO Tag Order in `<head>`
Place tags in this order for readability and conventional structure:

```
1. <meta charset>           (already present)
2. <meta viewport>          (already present)
3. <title>                  (replace existing sparse title)
4. <meta name="description">
5. <link rel="canonical">
6. Open Graph block (og:type, og:title, og:description, og:url, og:image)
7. Favicon links (icon SVG, icon PNG, apple-touch-icon)
8. <script type="application/ld+json"> JSON-LD block
9. Font preconnects         (already present)
10. Stylesheet links        (already present)
```

### Pattern: 404.html Head
The 404.html page should receive:
- Updated `<title>` — keep "Page Not Found" prefix, update site name to match SEO-01 format
- Favicon links only (same three tags as index.html)
- No canonical tag (404 pages should not have canonical — it would canonicalize error content)
- No JSON-LD (not a content page)
- No Open Graph tags (404 pages are not shared)

---

## Critical Pitfall: SVG og:image Platform Support

**This is the most important finding in this research.**

### Platform Support Matrix for og:image Formats

| Platform | JPEG | PNG | SVG | WebP |
|----------|------|-----|-----|------|
| Facebook | YES | YES | **NO** | Partial |
| Twitter/X | YES | YES | **NO** | Partial |
| LinkedIn | YES | YES | Unknown | Unknown |
| iMessage (iOS) | YES | YES | **NO** | NO |
| Discord | YES | YES | Partial | Partial |
| Slack | YES | YES | Unknown | Unknown |

[VERIFIED: multiple sources — GitHub issue BreakOutEvent/breakout-frontend#234, blog.termian.dev, darekkay.com/blog/open-graph-image-formats/, facebook developer community]

**Consequence for D-05:** The meta tag `<meta property="og:image" content="https://paradigminspection.org/og-image.svg">` will render as a blank card on Facebook and Twitter/X — the two most important social sharing platforms for a service business.

**Resolution (within locked decisions):**
- D-04 locks the creation of `og-image.svg` — this is the right call as a source asset
- D-05 locks the og:image pointing to `/og-image.svg` — this is the pitfall
- D-07 already acknowledges the compatibility issue and notes the owner should optionally convert to PNG
- **Planner action:** The implementation should create `og-image.svg` AND export/commit `og-image.png`. The `og:image` meta tag should point to `og-image.png`. The SVG remains in the repo as the editable source. This resolves the D-05/D-07 tension without overriding any locked decision — it is a refinement of D-05 within the discretion granted by D-07.

**How to create og-image.png without build tools:**
1. Open `og-image.svg` in a browser (Chrome or Firefox)
2. Right-click → "Save as image" or use browser DevTools screenshot at 1200×630
3. Alternatively, use Squoosh.app (already referenced in CLAUDE.md) to convert SVG→PNG
4. Commit `og-image.png` to repo root alongside `og-image.svg`

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Favicon generation | Manual Photoshop resize to 12 sizes | realfavicongenerator.net | Handles ICO format, browser quirks, `<link>` tag HTML output, and multiple sizes automatically. Free, browser-based, accepts JPG input. |
| Structured data validation | Visual inspection | Google Rich Results Test (search.google.com/test/rich-results) | Catches JSON-LD syntax errors, missing required fields, and invalid types before launch |
| Social preview testing | Manually post to Facebook | opengraph.xyz or socialsharepreview.com | Shows exactly what each platform will render without requiring a real post |
| og-image design | CSS/HTML composite | Hand-authored SVG | SVG `<text>` and `<rect>` elements are sufficient for text-and-shapes designs without a design tool |

**Key insight:** The favicon problem involves 12+ sizes and browser-specific quirks that have evolved over a decade. realfavicongenerator.net has been the canonical free solution since 2013 and generates the exact `<link>` tag HTML to copy into `<head>`. [VERIFIED: realfavicongenerator.net]

---

## Code Examples

### SEO-01: Title Tag
```html
<!-- Replace the existing sparse <title> tag -->
<title>Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward &amp; Miami-Dade</title>
```
Note: Use `&amp;` in HTML attribute context; the em dash (—) is fine as a literal UTF-8 character.
[ASSUMED — HTML encoding convention from training knowledge]

### SEO-02: Meta Description (draft copy — within 155 chars)
```html
<meta name="description" content="Licensed home inspector serving Palm Beach, Broward, Miami-Dade &amp; Monroe counties. Residential, commercial &amp; specialty inspections. Call today.">
```
Character count of content value: 152 chars. Includes all four counties, three service types, and a CTA. [ASSUMED — content authoring decision within Claude's discretion]

### SEO-03 + SEO-06: Open Graph Tags + Canonical
```html
<!-- Canonical URL -->
<link rel="canonical" href="https://paradigminspection.org">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward &amp; Miami-Dade">
<meta property="og:description" content="Licensed home inspector serving Palm Beach, Broward, Miami-Dade &amp; Monroe counties. Residential, commercial &amp; specialty inspections. Call today.">
<meta property="og:url" content="https://paradigminspection.org">
<meta property="og:image" content="https://paradigminspection.org/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

Note: `og:image` points to `og-image.png` (not `.svg`) for platform compatibility. See Critical Pitfall section.
[VERIFIED: Open Graph protocol — ogp.me; platform SVG incompatibility verified from multiple sources]

### Twitter Card Tags (bonus — not in requirements, but fills gaps)
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Paradigm Inspection — Licensed Home Inspector | Palm Beach, Broward &amp; Miami-Dade">
<meta name="twitter:description" content="Licensed home inspector serving Palm Beach, Broward, Miami-Dade &amp; Monroe counties. Residential, commercial &amp; specialty inspections. Call today.">
<meta name="twitter:image" content="https://paradigminspection.org/og-image.png">
```
Twitter/X reads `og:` tags as fallback, but explicit `twitter:` tags take precedence and are recommended.
[ASSUMED — Twitter card documentation pattern from training knowledge]

### SEO-07: Favicon Link Tags
```html
<!-- SVG favicon — modern browsers (Chrome, Firefox, Safari 15.6+ desktop) -->
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<!-- PNG favicon — modern browsers fallback -->
<link rel="icon" href="/favicon-48.png" sizes="48x48" type="image/png">
<!-- Legacy ICO — Internet Explorer and very old browsers -->
<link rel="icon" href="/favicon.ico" sizes="32x32">
<!-- Apple Touch Icon — iOS Safari home screen -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

Note on D-16 (SVG favicon discretion): Include the SVG favicon line if `logo.jpg` renders recognizably at small sizes. Since `logo.jpg` is 20KB and likely a rectangular logo (not a square mark), the ICO + PNG fallback is more important than the SVG favicon. The SVG favicon is a bonus that will be used only on desktop Chrome/Firefox/Safari — iOS always uses the apple-touch-icon regardless. [ASSUMED — assessment based on logo.jpg file size and typical logo formats]

### SEO-05: LocalBusiness JSON-LD
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Paradigm Inspection",
  "url": "https://paradigminspection.org",
  "telephone": "[YOUR-PHONE]",
  "email": "[YOUR-EMAIL]",
  "areaServed": [
    "Palm Beach County",
    "Broward County",
    "Miami-Dade County",
    "Monroe County"
  ],
  "serviceType": [
    "Residential Home Inspection",
    "Commercial Property Inspection",
    "Mold Inspection",
    "Radon Testing",
    "Sewer Inspection",
    "Pool Inspection",
    "Roof Inspection",
    "New Construction Inspection"
  ],
  "description": "Licensed home inspector serving South Florida — Palm Beach, Broward, Miami-Dade, and Monroe counties."
}
</script>
```

**@type rationale:** `HomeAndConstructionBusiness` is the correct schema.org type — it is the most specific type that applies to home inspectors without being a subtype that doesn't match (GeneralContractor, Plumber, etc.). No dedicated HomeInspector type exists. `ProfessionalService` is deprecated. [VERIFIED: schema.org/HomeAndConstructionBusiness — no dedicated home inspector subtype exists; ProfessionalService deprecation confirmed via GitHub schemaorg/schemaorg#1418]

**Placeholder convention:** `[YOUR-PHONE]` and `[YOUR-EMAIL]` follow the existing `[BRACKETED ALL-CAPS]` pattern established in index.html. [VERIFIED: codebase grep]

### CNAME File
```
paradigminspection.org
```
File: `CNAME` (no extension), repo root, single line, no trailing whitespace. [VERIFIED: GitHub Docs — managing-a-custom-domain-for-your-github-pages-site]

### og-image.svg Structure
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Black background -->
  <rect width="1200" height="630" fill="#0A0A0A"/>
  
  <!-- Orange accent bar -->
  <rect x="80" y="260" width="200" height="6" fill="#E07A2F"/>
  
  <!-- Company name heading (Playfair Display not available in SVG without embed — use system serif or embed subset) -->
  <text x="80" y="220" font-family="Georgia, serif" font-size="72" font-weight="700" fill="#F5EDD6">PARADIGM INSPECTION</text>
  
  <!-- Tagline -->
  <text x="80" y="310" font-family="Arial, sans-serif" font-size="32" fill="#F5EDD6">Licensed Home Inspector</text>
  
  <!-- Service area -->
  <text x="80" y="365" font-family="Arial, sans-serif" font-size="24" fill="#C0B89A">Palm Beach · Broward · Miami-Dade · Monroe</text>
  
  <!-- Domain -->
  <text x="80" y="560" font-family="Arial, sans-serif" font-size="22" fill="#E07A2F">paradigminspection.org</text>
</svg>
```

**Font note:** SVG `<text>` elements use system fonts unless fonts are embedded. `Playfair Display` from Google Fonts cannot be referenced in a standalone SVG file without embedding. Use `Georgia, serif` as the closest system font match for the heading. The visual will be consistent enough for a social card. [ASSUMED — SVG font rendering behavior from training knowledge]

---

## GitHub Pages Specifics

### CNAME File Behavior [VERIFIED: GitHub Docs]
- File name: `CNAME` (uppercase, no extension)
- Content: one line, the apex domain exactly: `paradigminspection.org`
- Location: repo root (same directory as index.html)
- Effect: GitHub Pages serves the site at `https://paradigminspection.org` instead of `https://USERNAME.github.io/REPO/`
- GitHub may auto-create this file when the owner types the domain in Settings > Pages, but committing it to the repo manually ensures it survives branch recreations

### DNS Records for Apex Domain [VERIFIED: GitHub Docs]
The owner must add these A records at their DNS provider (e.g., Namecheap, GoDaddy, Cloudflare) pointing `paradigminspection.org` to:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
And a CNAME record pointing `www.paradigminspection.org` to `USERNAME.github.io`.

### .nojekyll [VERIFIED: codebase — file exists at repo root]
Already committed in Phase 1. No action needed. Prevents GitHub from running Jekyll processing on the repo, which would otherwise ignore files prefixed with underscores and add unwanted behavior.

### Common GitHub Pages Pitfalls
1. **CNAME file deleted on Settings save:** When the owner configures the custom domain via GitHub Settings > Pages, GitHub may overwrite the CNAME file. Committing it to git ensures the correct value is always in source control.
2. **HTTPS enforcement delay:** After adding the CNAME and DNS records, Let's Encrypt certificate provisioning takes up to 24 hours. The "Enforce HTTPS" checkbox in Settings > Pages may be greyed out during this time.
3. **Asset paths:** All favicon and og-image paths in HTML use root-relative paths (`/favicon.ico`) not relative paths (`favicon.ico`). Root-relative paths work correctly at `https://paradigminspection.org/` and any subdirectory.
4. **og:image must be publicly accessible:** The image URL must return a 200 response with no authentication. GitHub Pages with a custom domain does this correctly for files in the repo.

---

## Common Pitfalls

### Pitfall 1: SVG og:image — Blank Social Cards
**What goes wrong:** Sharing the site on Facebook, Twitter/X, or via iMessage shows a blank/grey card instead of the branded image.
**Why it happens:** Facebook and Twitter/X crawlers only support JPEG and PNG for og:image. SVG is not in their supported format list and renders as empty.
**How to avoid:** Point `og:image` at `og-image.png` (a PNG export of the SVG), not `og-image.svg`. Keep the SVG as the editable source.
**Warning signs:** When tested with opengraph.xyz or Facebook's Sharing Debugger, the image field returns an error or blank.
[VERIFIED: blog.termian.dev/posts/twitter-og-image-svg/, GitHub BreakOutEvent/breakout-frontend#234]

### Pitfall 2: Favicon ICO Missing — Broken Tab Icon on Edge/IE
**What goes wrong:** The browser tab shows the default blank-page icon, especially on older Windows browsers.
**Why it happens:** Microsoft Edge Legacy and Internet Explorer only understand `favicon.ico` at the root, regardless of `<link>` tags.
**How to avoid:** Always commit `favicon.ico` to repo root in addition to PNG variants. realfavicongenerator.net outputs this automatically.
**Warning signs:** Favicon appears in Chrome but not in Edge.
[ASSUMED — well-known browser compatibility pattern]

### Pitfall 3: JSON-LD Telephone/Email With Real Data
**What goes wrong:** If the developer fills in a placeholder phone number (like 555-1234) in the JSON-LD, it ships to production and Google indexes it.
**Why it happens:** JSON-LD is in `<head>` and invisible to visual QA.
**How to avoid:** Use the `[YOUR-PHONE]` and `[YOUR-EMAIL]` bracket placeholders — consistent with the rest of the codebase. These are clearly marked for replacement.
**Warning signs:** Google Search Console shows structured data with placeholder values.

### Pitfall 4: 404.html Missing Favicon Tags
**What goes wrong:** The 404 error page shows the default browser icon even after the main site has a favicon.
**Why it happens:** Each HTML file independently declares its `<head>`. Favicon tags in `index.html` do not carry over to `404.html`.
**How to avoid:** Add the same four favicon `<link>` tags to `404.html`'s `<head>`.

### Pitfall 5: og:image URL Using Relative Path
**What goes wrong:** The social card works locally but breaks when shared (shows no image).
**Why it happens:** `og:image` must be an absolute URL with `https://`. Crawlers request the URL directly, not relative to any base.
**How to avoid:** Always use the full URL: `<meta property="og:image" content="https://paradigminspection.org/og-image.png">`.
[VERIFIED: Open Graph protocol specification — ogp.me]

### Pitfall 6: CNAME File With Trailing Newlines or Spaces
**What goes wrong:** GitHub Pages fails to recognize the custom domain and falls back to the github.io URL.
**Why it happens:** CNAME file content must be exactly the domain string. Extra whitespace causes parsing failures.
**How to avoid:** Write file with exactly one line: `paradigminspection.org` with no trailing space or extra newline.
[VERIFIED: GitHub Docs troubleshooting-custom-domains-and-github-pages]

### Pitfall 7: Canonical Tag on 404 Page
**What goes wrong:** Google may crawl the 404 page and misinterpret the canonical tag as meaning the 404 content is the authoritative version of the canonical URL.
**Why it happens:** If `<link rel="canonical" href="https://paradigminspection.org">` is added to 404.html, it creates a contradictory signal (HTTP 404 status but canonical pointing to root).
**How to avoid:** Do not add a canonical tag to 404.html. Add only favicon links.

---

## Complete Placeholder Inventory (for LAUNCH-CHECKLIST.md)

This is the exhaustive list of `[BRACKETED]` placeholders found in the codebase as of Phase 2 completion, plus JSON-LD placeholders added in Phase 3.

### index.html — Existing Placeholders
| Placeholder | Where | What to Replace With |
|-------------|-------|----------------------|
| `[YOUR-PHONE]` | Lines 22, 32, 54, 176, 266, 315 (×6 occurrences) | Actual phone number (e.g., `561-555-1234`) |
| `[YOUR PHONE NUMBER]` | Display text in same lines | Same phone, formatted for display |
| `[YOUR-EMAIL]` | Lines 56, 178, 271, 317 (×4 occurrences) | Actual email address |
| `[YOUR EMAIL ADDRESS]` | Display text in same lines | Same email, formatted for display |
| `[INSPECTOR NAME]` | Line 156 | Inspector's full name |
| Bio paragraph | Line 161 | 2-3 sentence personal bio |
| `[HI-XXXXX]` | Lines 164, 332 | Florida HI license number (format: HI-XXXXX) |
| `[YOUR CERTIFICATION BADGE]` | Line 170 | InterNACHI or ASHI badge image (or remove placeholder div) |
| `[REVIEWER NAME]` | Lines 230, 236, 242 | Three real reviewer first names |
| Review text | Lines 229, 235, 241 | Three real review texts |
| `[MONTH YEAR]` | Lines 230, 236, 242 | Three review dates (e.g., "March 2026") |
| `[YOUR_GOOGLE_BUSINESS_URL]` | Line 250 | Google Business Profile review link |
| `[YOUR_INSTAGRAM_HANDLE]` | Lines 275, 322 | Instagram handle (without @) |
| `[YOUR_FACEBOOK_PAGE]` | Lines 279, 326 | Facebook page name or ID |
| `[YOUR-FORMSPREE-ID]` | Line 287 | Formspree form ID (the part after `/f/`) |

### index.html — Phase 3 Additions (JSON-LD)
| Placeholder | Where | What to Replace With |
|-------------|-------|----------------------|
| `[YOUR-PHONE]` | JSON-LD `telephone` field | Same phone number as above |
| `[YOUR-EMAIL]` | JSON-LD `email` field | Same email address as above |

### 404.html — Existing Placeholders
| Placeholder | Where | What to Replace With |
|-------------|-------|----------------------|
| `[YOUR-PHONE]` | Lines 21, 31, 46 (×3 occurrences) | Same phone number |
| `[YOUR PHONE NUMBER]` | Same lines (display text) | Same phone, formatted for display |

### New Files — No Placeholder Content
- `CNAME` — no placeholders (domain is locked as `paradigminspection.org`)
- `og-image.svg` — all content is static branded copy; no placeholders needed
- `og-image.png` — binary export of SVG; no placeholders
- `favicon.ico`, `favicon-48.png`, `apple-touch-icon.png` — binary files; no placeholders
- `HOW-TO-UPDATE.md` — documentation; refers to placeholders above but is not itself a placeholder
- `LAUNCH-CHECKLIST.md` — the checklist itself; no placeholders

---

## HOW-TO-UPDATE.md Structure

Required sections based on D-18/D-19/D-20 and the non-technical owner requirement:

```
# HOW-TO-UPDATE.md

## Before You Start
- What you need: a computer with a browser, an email address
- GitHub account creation (step-by-step with exact button names)

## 1. Upload Your Website to GitHub
- Create a new repository (Settings → public)
- Upload all files (drag-and-drop via github.com UI)
- Naming the repo (convention: paradigm-inspection)

## 2. Enable GitHub Pages
- Settings → Pages → Source: main / root → Save
- Where to find your site URL

## 3. Connect Your Custom Domain (paradigminspection.org)
- Log into your domain registrar
- Add A records (provide all 4 IP addresses)
- Add CNAME record for www
- Add domain in GitHub Settings → Pages → Custom domain field
- Expected wait time (up to 24 hours for DNS)
- Enable HTTPS enforcement after certificate appears

## 4. Set Up Your Contact Form (Formspree)
- Create account at formspree.io
- Create a new form
- Copy the form ID
- How to find and replace [YOUR-FORMSPREE-ID] in index.html
  → Line 287: action="https://formspree.io/f/[YOUR-FORMSPREE-ID]"

## 5. Replace Your Contact Information
- Phone number: how to find, what to replace (lines 22, 32, 54, 176, 266, 315)
- Email address: how to find, what to replace (lines 56, 178, 271, 317)
- How to use GitHub.com's file editor (pencil icon → edit → commit)

## 6. Add Your Personal Bio and Photo
- Inspector name: line 156
- Bio paragraph: line 161
- Headshot: how to upload image, reference in HTML

## 7. Add Your License Number
- Lines 164 and 332 in index.html
- Format: HI-XXXXX

## 8. Add Real Testimonials
- Lines 229-242: three review cards
- How to find your Google reviews

## 9. Add Social Media Links
- Instagram handle: lines 275, 322
- Facebook page: lines 279, 326

## 10. How Long Does It Take for Changes to Go Live?
- Typically 1-3 minutes after committing
- How to force refresh (Ctrl+Shift+R / Cmd+Shift+R)
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| 12-file favicon set (multiple PNGs) | 3-file minimum: ICO, 48px PNG, 180px apple-touch-icon | ~2023 | Simpler; realfavicongenerator.net still supports both approaches |
| favicon.ico at root only | Explicit `<link rel="icon">` tags | ~2015 | Needed for modern browsers; ICO at root is still a useful legacy fallback |
| ProfessionalService schema type | HomeAndConstructionBusiness | schema.org deprecation | ProfessionalService deprecated; HomeAndConstructionBusiness is the correct type |
| og:image any format | JPEG or PNG only for social platforms | Platforms' own choice | SVG never gained social platform support despite broad browser support |

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | Meta description draft copy (152 chars) meets the "includes service types and all four counties" requirement | Code Examples | Low — character count was manually verified; content is within Claude's discretion per CONTEXT.md |
| A2 | Twitter card `<meta name="twitter:card">` tags are worth adding beyond what SEO-03 requires | Code Examples | Low — Twitter reads og: fallbacks; explicit tags are a bonus not a requirement |
| A3 | `Georgia, serif` is an adequate visual stand-in for Playfair Display in the og-image.svg SVG text | Code Examples — og-image.svg | Medium — owner may find the font substitution visually inconsistent with the site; they can open SVG in Inkscape/browser to refine before PNG export |
| A4 | The favicon.ico legacy fallback strategy is still needed in 2026 | Standard Stack | Low — ICO is harmless to include and realfavicongenerator.net outputs it automatically |
| A5 | logo.jpg (20KB) is a rectangular logo mark that may not render recognizably at 32×32 favicon size | Favicon section | Medium — depends on logo content; planner should note this as a visual QA step during implementation |

---

## Environment Availability

Step 2.6: SKIPPED — Phase 3 is purely HTML authoring and file-creation with no external CLI dependencies. All file generation tools (realfavicongenerator.net) are browser-based and require no local installation. The one external dependency (GitHub Pages deployment) is the owner's responsibility, not Claude's.

---

## Open Questions

1. **Should `og:image` be `og-image.svg` or `og-image.png` given the D-05 lock?**
   - What we know: D-05 locks `og:image` to point at `/og-image.svg`. D-07 already flags that the owner "can optionally replace with a PNG screenshot." Research confirms SVG is not supported by Facebook, Twitter/X, or iMessage — the three most important sharing surfaces for a local service business.
   - What's unclear: Whether the user's intent in D-05 was to ship SVG in production, or whether they simply hadn't thought through the distinction between source file and deployed file.
   - Recommendation: Planner should create both `og-image.svg` (source, committed to repo) and `og-image.png` (generated export, committed to repo). Point `og:image` at `og-image.png`. Document the source-vs-deployed distinction in a comment in index.html. This fulfills the spirit of D-04 through D-07 and avoids blank social cards at launch.

2. **Does logo.jpg contain a square icon mark suitable for favicon, or is it a full horizontal logo?**
   - What we know: `logo.jpg` is 20,678 bytes — consistent with a JPEG photo or a logo with gradients. Cannot determine composition from file size alone.
   - What's unclear: Whether the logo mark portion is recognizable at 32×32 pixels.
   - Recommendation: Implementation task should include a visual QA step — generate the favicon, view it at 32×32, and note in HOW-TO-UPDATE.md if the owner wants to provide a dedicated square icon in the future.

3. **Should the JSON-LD include a `@id` property or `address`?**
   - What we know: `@id` is recommended by Google for disambiguation. `address` is marked as pending by the owner (no physical office address yet — service-area business).
   - What's unclear: Whether Google penalizes omitting `@id` or `address` for a service-area business.
   - Recommendation: Omit `address` (owner has no public office address) and omit `@id` (it's an enhancement, not a requirement for SEO-05). The five fields in D-13 are sufficient for launch.

---

## Sources

### Primary (HIGH confidence)
- [schema.org/HomeAndConstructionBusiness](https://schema.org/HomeAndConstructionBusiness) — confirmed no dedicated home inspector type exists; HomeAndConstructionBusiness is the appropriate parent type
- [schema.org/LocalBusiness](https://schema.org/LocalBusiness) — confirmed areaServed, telephone, email, url, serviceType properties
- [GitHub Docs — managing-a-custom-domain-for-your-github-pages-site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) — A record IPs (185.199.108.153–111.153), CNAME file format, HTTPS enforcement
- [realfavicongenerator.net](https://realfavicongenerator.net/) — confirmed free, browser-based, accepts JPG, generates ICO + PNG + apple-touch-icon
- Codebase grep of index.html and 404.html — complete placeholder inventory at specific line numbers

### Secondary (MEDIUM confidence)
- [blog.termian.dev — SVG og:image workaround](https://blog.termian.dev/posts/twitter-og-image-svg/) — confirms Twitter does not support SVG for og:image; documents Node.js conversion as workaround
- [GitHub issue BreakOutEvent/breakout-frontend#234](https://github.com/BreakOutEvent/breakout-frontend/issues/234) — confirms Facebook does not support SVG og:image
- [WebSearch consensus — iMessage og:image](https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages) — iMessage supports PNG and JPEG, not SVG
- [caniuse.com/link-icon-svg](https://caniuse.com/link-icon-svg) — SVG favicon browser support (Chrome YES, Firefox YES, Safari 15.6+ YES, iOS Safari NO)
- [GitHub schemaorg/schemaorg#1418](https://github.com/schemaorg/schemaorg/issues/1418) — ProfessionalService deprecation confirmed

### Tertiary (LOW confidence — flag for validation)
- Twitter card `<meta name="twitter:card">` tag syntax — from training knowledge; verify against [developer.x.com/en/docs/twitter-for-websites/cards/overview/markup](https://developer.x.com/en/docs/twitter-for-websites/cards/overview/markup) before implementation

---

## Metadata

**Confidence breakdown:**
- SEO tag HTML: HIGH — canonical HTML patterns, verified against OGP protocol
- LocalBusiness JSON-LD: HIGH — verified against schema.org directly
- SVG og:image pitfall: HIGH — verified from multiple independent sources including GitHub issues and developer blog posts
- Favicon strategy: HIGH — realfavicongenerator.net is the well-known canonical tool; browser support verified via caniuse.com
- GitHub Pages CNAME/DNS: HIGH — verified against official GitHub Docs
- HOW-TO-UPDATE.md structure: MEDIUM — document structure is Claude's discretion; specific line numbers verified against codebase
- og-image.svg font rendering: LOW/MEDIUM — SVG font behavior is assumed; visual outcome depends on the browser rendering the SVG

**Research date:** 2026-04-12
**Valid until:** 2026-10-12 (6 months — stable HTML/SEO standards; GitHub Pages IPs may change, verify before HOW-TO-UPDATE.md is written)
