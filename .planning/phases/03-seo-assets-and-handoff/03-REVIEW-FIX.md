---
phase: 03-seo-assets-and-handoff
fixed_at: 2026-04-12T00:00:00Z
review_path: .planning/phases/03-seo-assets-and-handoff/03-REVIEW.md
iteration: 1
findings_in_scope: 5
fixed: 5
skipped: 0
status: all_fixed
---

# Phase 03: Code Review Fix Report

**Fixed at:** 2026-04-12
**Source review:** .planning/phases/03-seo-assets-and-handoff/03-REVIEW.md
**Iteration:** 1

**Summary:**
- Findings in scope: 5 (1 Critical, 4 Warning)
- Fixed: 5
- Skipped: 0

## Fixed Issues

### CR-01: JSON-LD Structured Data Contains Live Placeholder Values

**Files modified:** `index.html`
**Commit:** a0b6b7c
**Applied fix:** Removed the `"telephone": "[YOUR-PHONE]"` and `"email": "[YOUR-EMAIL]"` fields from the `LocalBusiness` JSON-LD block entirely. Added a prominent HTML comment above the `<script>` tag instructing the owner to add their real telephone and email values before going live, with a concrete example showing the correct JSON format.

---

### WR-01: Lucide CDN Version Does Not Exist

**Files modified:** `index.html`
**Commit:** c3e479c
**Applied fix:** Updated the Lucide script tag from the non-existent `lucide@1.8.0` to the known-good `lucide@0.460.0`. This restores all icons (service cards, nav, contact, area markers) that were silently failing due to a 404 on the CDN.

---

### WR-02: 404.html Loads script.js Without AOS Library — ReferenceError on Every 404

**Files modified:** `script.js`
**Commit:** 2632b04
**Applied fix:** Wrapped the `AOS.init()` call in a `typeof AOS !== 'undefined'` guard. This prevents the `ReferenceError: AOS is not defined` thrown on every 404 page load (and any other page that loads script.js without the AOS library). The guard does not affect behavior on index.html where AOS is loaded normally.

---

### WR-03: HOW-TO-UPDATE.md Contains Stale Line Numbers That Do Not Match index.html

**Files modified:** `HOW-TO-UPDATE.md`
**Commit:** 0fd7622
**Applied fix:** Updated all stale line number references throughout the owner guide to match the current index.html (which gained ~38 lines from the full implementation vs. the line numbers the guide was originally written against, plus 4 more from the CR-01 fix). Corrections applied:

| Reference | Old line | New line |
|---|---|---|
| Header phone link | 42 | 80 |
| Mobile nav phone link | 52 | 90 |
| Hero "Call Now" | 74 | 112 |
| Hero "Send Email" | 76 | 114 |
| About "Call Now" | 196 | 234 |
| About "Send Email" | 198 | 236 |
| Contact phone link | 286 | 324 |
| Contact email link | 291 | 329 |
| Footer phone link | 335 | 373 |
| Footer email link | 337 | 375 |
| Formspree ID (Step 5) | 307 | 345 |
| Formspree ID (troubleshooting) | 307 | 345 |
| Inspector name | 176 | 214 |
| Bio paragraph | 181 | 219 |
| Photo placeholder | 168-172 | 206 |
| License (about) | 184 | 222 |
| License (footer) | 352 | 390 |
| Cert badge | 188-192 | 226 |
| Testimonial 1 text | 249 | 287 |
| Testimonial 1 author | 250 | 288 |
| Testimonial 2 text | 255 | 293 |
| Testimonial 2 author | 256 | 294 |
| Testimonial 3 text | 261 | 299 |
| Testimonial 3 author | 262 | 300 |
| Google Business URL | 270 | 308 |
| Instagram contact | 295 | 333 |
| Instagram footer | 342 | 380 |
| Facebook contact | 299 | 337 |
| Facebook footer | 346 | 384 |

Also updated the JSON-LD telephone/email notes to reflect that the structured data block now exists (around line 34) and needs to be filled in rather than "added later".

---

### WR-04: LAUNCH-CHECKLIST.md Contains the Same Stale Line Numbers

**Files modified:** `LAUNCH-CHECKLIST.md`
**Commit:** 65a67c5
**Applied fix:** Updated all stale line number references in the launch checklist to match the current index.html, using the same corrected values as WR-03. Also updated the JSON-LD telephone and email checklist items to reference line 34 with concrete instructions ("add your phone number before going live") rather than the vague "if JSON-LD has been added" conditional. All phone, email, inspector identity, license, certification, testimonial, Google Business, social media, and Formspree line references are now accurate.

---

_Fixed: 2026-04-12_
_Fixer: Claude (gsd-code-fixer)_
_Iteration: 1_
