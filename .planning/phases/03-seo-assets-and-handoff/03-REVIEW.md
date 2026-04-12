---
phase: 03-seo-assets-and-handoff
reviewed: 2026-04-12T00:00:00Z
depth: standard
files_reviewed: 7
files_reviewed_list:
  - og-image.svg
  - og-image-export.html
  - index.html
  - 404.html
  - CNAME
  - HOW-TO-UPDATE.md
  - LAUNCH-CHECKLIST.md
findings:
  critical: 1
  warning: 4
  info: 3
  total: 8
status: issues_found
---

# Phase 03: Code Review Report

**Reviewed:** 2026-04-12
**Depth:** standard
**Files Reviewed:** 7
**Status:** issues_found

## Summary

This phase delivered SEO meta tags, Open Graph/Twitter Card markup, JSON-LD structured data, an SVG social sharing image with export helper, a CNAME file, a 404 page, and owner-facing handoff documentation. The overall quality is high — the markup is semantically correct, the structured data schema is appropriate, and the documentation is clear and thorough.

There are four issues that require action before launch: one Critical (broken JSON-LD structured data with literal placeholder values that will be indexed and may trigger a Google Search Console warning), one Warning about a wrong Lucide CDN version that will silently break all icons, and two Warnings about stale line numbers in the handoff docs that will confuse the owner. There are also three minor Info items.

---

## Critical Issues

### CR-01: JSON-LD Structured Data Contains Live Placeholder Values

**File:** `index.html:35-36`
**Issue:** The `LocalBusiness` JSON-LD block sets `"telephone": "[YOUR-PHONE]"` and `"email": "[YOUR-EMAIL]"` as literal string values. When Google crawls the page before the owner fills these in, it ingests invalid structured data. Google Search Console will report schema errors, and the invalid data may suppress the rich result entirely. Unlike HTML placeholders (which are only visible to human visitors), structured data is read by crawlers the moment the page goes live.
**Fix:** Either remove the `telephone` and `email` fields entirely until real values are available, or wrap the entire `<script type="application/ld+json">` block in a comment instructing the owner not to publish until replaced:

```html
<!-- OWNER: Fill in "telephone" and "email" below before going live, then remove this comment -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Paradigm Inspection",
  "url": "https://paradigminspection.org",
  "telephone": "+15615551234",
  "email": "hello@paradigminspection.org",
  ...
}
</script>
```

Alternatively, omit both fields from the initial deploy and add them once real values are known — the schema is valid without them.

---

## Warnings

### WR-01: Lucide CDN Version Does Not Exist

**File:** `index.html:392`
**Issue:** The script tag loads `lucide@1.8.0` from unpkg: `https://unpkg.com/lucide@1.8.0/dist/umd/lucide.min.js`. The Lucide npm package uses a `0.x` versioning scheme (e.g., `0.460.0`). Version `1.8.0` does not exist on the registry. When unpkg cannot resolve the version, it returns a 404, the script fails to load, and `lucide.createIcons()` on line 396 throws `ReferenceError: lucide is not defined`. All service icons, nav icons, contact icons, and area markers will silently disappear on every page load.
**Fix:** Pin to a known-good version. As of early 2026 the latest stable release is in the `0.4xx` range. Verify the current version at `https://unpkg.com/lucide/` and update accordingly:

```html
<script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
```

The same fix applies to any future version bumps — always verify the version exists on unpkg before shipping.

### WR-02: 404.html Loads script.js Without AOS Library — ReferenceError on Every 404

**File:** `404.html:56`
**Issue:** `404.html` includes `<script src="script.js"></script>` but does not load the AOS library (`aos.js`). If `script.js` calls `AOS.init()` (which is the standard pattern for this site), every visitor who lands on a 404 page will trigger a `ReferenceError: AOS is not defined` in the browser console. While this does not break the visual layout of 404.html (there are no `data-aos` elements on that page), it is a JavaScript runtime error on every page load and will appear in any error monitoring.
**Fix:** Either add the AOS script tag before `script.js` in 404.html (matching the pattern in index.html), or guard the `AOS.init()` call in script.js with a null check:

```javascript
// In script.js — safe guard
if (typeof AOS !== 'undefined') {
  AOS.init({ once: true, duration: 600 });
}
```

The guard approach is more robust because it protects against any page that loads script.js without AOS.

### WR-03: HOW-TO-UPDATE.md Contains Stale Line Numbers That Do Not Match index.html

**File:** `HOW-TO-UPDATE.md:129,157-166,177-183`
**Issue:** The owner guide references specific line numbers in `index.html` that do not match the actual file. Examples:
- Line 129 of HOW-TO-UPDATE.md states the Formspree ID is on "line 307" of index.html. The actual `action="https://formspree.io/f/[YOUR-FORMSPREE-ID]"` is on line **342**.
- Lines 157–162 list phone placeholder locations as index.html lines 42, 52, 74, 196, 286, 335. Actual locations are lines 77, 87, 109, 231, 321, 370.
- Lines 177–183 list email placeholder locations as index.html lines 76, 198, 291, 337. Actual locations are lines 111, 233, 325, 372.

A non-technical owner following these instructions will search for content at the wrong lines, assume the guide is broken, or miss a placeholder entirely.
**Fix:** Audit all line number references in HOW-TO-UPDATE.md against the current index.html and update them. The correct current line numbers are:

| Placeholder | Correct index.html line |
|---|---|
| Header phone link (desktop) | 77 |
| Mobile nav phone link | 87 |
| Hero "Call Now" | 109 |
| About "Call Now" | 231 |
| Contact phone link | 321 |
| Footer phone link | 370 |
| Hero "Send Email" | 111 |
| About "Send Email" | 233 |
| Contact email link | 325 |
| Footer email link | 372 |
| Formspree ID | 342 |

### WR-04: LAUNCH-CHECKLIST.md Contains the Same Stale Line Numbers

**File:** `LAUNCH-CHECKLIST.md:13-18,29-32,101`
**Issue:** The checklist duplicates the incorrect line numbers from HOW-TO-UPDATE.md. Specifically:
- Phone placeholders listed as lines 42, 52, 74, 196, 286, 335 — all wrong (same offsets as WR-03 above).
- Email placeholders listed as lines 76, 198, 291, 337 — all wrong.
- Formspree ID listed as "line 307" — actual line is 342.
- Social media placeholder lines (295, 342, 299, 346) do not match actual file lines 330, 377, 334, 381.

The checklist is the owner's primary launch reference. Stale line numbers here carry the same confusion risk as WR-03 but with higher impact since the checklist is used at go-live time under time pressure.
**Fix:** Update all line number references to match the correct current values (see WR-03 table above, and add social media lines 330, 334, 377, 381).

---

## Info

### IN-01: Bebas Neue Loaded From Google Fonts But Not in the Recommended Stack

**File:** `index.html:65`
**Issue:** The Google Fonts request loads `Bebas+Neue` alongside Inter and Playfair Display. The project's CLAUDE.md design stack specifies only Inter and Playfair Display. If `styles.css` does not use Bebas Neue, this is an unnecessary render-blocking network request on every page load. Even if it is used (e.g., for the hero brand name), it is undocumented in the stack definition.
**Fix:** If Bebas Neue is intentionally used for the `.hero-brand-paradigm` / `.hero-brand-inspection` typography, add it to the CLAUDE.md font table. If it is unused, remove it from the Google Fonts URL to eliminate the wasted request:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

### IN-02: og-image.png Is Not Present in the Repository

**File:** `index.html:18,26` / `og-image-export.html`
**Issue:** `index.html` references `og-image.png` in both the `og:image` and `twitter:image` meta tags. The file does not exist in the repo — only `og-image.svg` is present. The `og-image-export.html` helper file instructs the owner to generate the PNG manually before launch. Until `og-image.png` is uploaded, every social share of the site will display a broken image in the preview card. The LAUNCH-CHECKLIST.md does call this out (item D-07), so the risk is documented, but the file's absence is worth flagging as a review finding.
**Fix:** No code change needed — this is a pre-launch content action. Ensure `og-image.png` is exported and committed before the site goes live. The checklist item on line 91 of LAUNCH-CHECKLIST.md already tracks this.

### IN-03: Formspree Form Submission Limit Not Documented in Checklist

**File:** `LAUNCH-CHECKLIST.md:99-101`
**Issue:** The checklist mentions creating a Formspree free-tier account but does not note that the free tier caps at 50 submissions per month. A busy inspection business could hit this limit quickly. The HOW-TO-UPDATE.md does mention it (line 116), but the checklist does not include a reminder to check submission volume or upgrade if needed.
**Fix:** Add a note under the Formspree checklist item:

```markdown
- [ ] Formspree free plan limit noted: 50 submissions/month. Upgrade at formspree.io if form volume exceeds this.
```

---

_Reviewed: 2026-04-12_
_Reviewer: Claude (gsd-code-reviewer)_
_Depth: standard_
