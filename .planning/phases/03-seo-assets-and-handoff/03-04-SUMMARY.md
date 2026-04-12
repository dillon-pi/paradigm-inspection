---
phase: 03-seo-assets-and-handoff
plan: "04"
subsystem: documentation
tags: [handoff, owner-docs, launch-checklist, onboarding]
dependency_graph:
  requires: []
  provides: [HOW-TO-UPDATE.md, LAUNCH-CHECKLIST.md]
  affects: [owner-launch-readiness]
tech_stack:
  added: []
  patterns: [github-ui-only-instructions, bracketed-placeholder-mapping, line-number-references]
key_files:
  created:
    - HOW-TO-UPDATE.md
    - LAUNCH-CHECKLIST.md
  modified: []
decisions:
  - "GitHub.com UI only throughout HOW-TO-UPDATE.md -- no CLI, no git clone, no npm (D-19)"
  - "Every placeholder maps to actual line numbers verified against current index.html and 404.html at execution time (D-20)"
  - "LAUNCH-CHECKLIST.md has 57 checkboxes organized across four categories (D-21, D-22, D-23)"
metrics:
  duration_minutes: 25
  completed_date: "2026-04-12"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Phase 03 Plan 04: Owner Handoff Documentation Summary

HOW-TO-UPDATE.md and LAUNCH-CHECKLIST.md created as the complete owner handoff package -- a non-technical site owner can go from zero GitHub knowledge to a live site at paradigminspection.org with all placeholders replaced, following only these two documents.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create HOW-TO-UPDATE.md owner onboarding guide | 85c8875 | HOW-TO-UPDATE.md |
| 2 | Create LAUNCH-CHECKLIST.md with all placeholder checkboxes | 592a5f1 | LAUNCH-CHECKLIST.md |

## What Was Built

### HOW-TO-UPDATE.md (343 lines)

A complete, step-by-step onboarding guide written for a non-technical owner. Covers:

1. Create a GitHub Account -- exact UI field names, free plan is sufficient
2. Upload Website Files -- drag-and-drop via github.com, commit message guidance
3. Enable GitHub Pages -- Settings > Pages > Source: main / root
4. Connect Custom Domain -- both 4a (DNS A records + CNAME at registrar) and 4b (GitHub Pages custom domain field + Enforce HTTPS)
5. Set Up Formspree -- account creation, form ID extraction, replacement at line 307
6. Replace Contact Information -- phone (6 places in index.html + 3 in 404.html) and email (4 places in index.html), with exact line numbers
7. Add Personal Information -- inspector name (line 176), bio (line 181), headshot (lines 168-172)
8. Add License Number -- lines 184 and 352
9. Add Certification Badge -- lines 188-192
10. Add Real Testimonials -- review text/name/date for all three cards at lines 249-262
11. Add Social Media Links -- Instagram at lines 295/342, Facebook at lines 299/346
12. Replace Social Sharing Image -- og-image.svg to og-image.png export guidance

Also includes "How Long Do Changes Take to Go Live?" and "Need Help?" troubleshooting sections.

All line numbers verified against the actual index.html and 404.html files at execution time.

### LAUNCH-CHECKLIST.md (115 lines, 57 checkboxes)

A flat checkbox checklist organized by four categories per D-21:

- **Content Placeholders** (35 checkboxes): phone (10), email (5), inspector identity (3), license (2), certification badge (1), testimonials (9), Google Business (1), social media (4)
- **Deployment** (10 checkboxes): repository, GitHub Pages, .nojekyll, CNAME, DNS A records (4 IPs listed), DNS CNAME, custom domain setting, Enforce HTTPS, og-image.png export note
- **Third-Party Setup** (3 checkboxes): Formspree account, form creation, ID replacement at line 307
- **Post-Launch Verification** (9 checkboxes): HTTPS site load, www redirect, contact form test, opengraph.xyz social preview, favicon, mobile responsive, tap-to-call, email link, bracket search

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| GitHub.com UI only -- no CLI commands anywhere | Per D-19; owner has no technical background and no development environment |
| Exact line numbers verified at execution time | Per D-20; Plans 01-03 had already run and modified index.html, so line numbers were re-verified before writing |
| 57 checkboxes (exceeds 40 minimum) | Per D-23 every unique placeholder occurrence gets its own checkbox; granular tracking prevents missed replacements |
| JSON-LD phone/email noted as conditional | JSON-LD was not yet present in index.html at time of execution; both docs note it as "if JSON-LD has been added" to remain accurate |

## Deviations from Plan

None -- plan executed exactly as written. The line numbers stated in the plan action were approximate guides; actual line numbers were verified from the live files and used throughout both documents.

## Threat Surface Scan

No new network endpoints, auth paths, file access patterns, or schema changes introduced. Both files are static documentation only (Markdown). Per T-03-09 mitigation: neither document contains real API keys, passwords, example secrets, or real credentials -- verified by grep check.

## Known Stubs

None. Both files are complete documentation with no placeholder content.

## Self-Check: PASSED

- [x] HOW-TO-UPDATE.md exists at repo root (343 lines, >150 minimum)
- [x] LAUNCH-CHECKLIST.md exists at repo root (115 lines, 57 checkboxes, >40 minimum)
- [x] Commit 85c8875 exists (HOW-TO-UPDATE.md)
- [x] Commit 592a5f1 exists (LAUNCH-CHECKLIST.md)
- [x] All four GitHub Pages IP addresses present in HOW-TO-UPDATE.md
- [x] All required placeholder references present in both files
- [x] No CLI commands in HOW-TO-UPDATE.md
- [x] No real credentials in either file
- [x] All four checklist categories present in LAUNCH-CHECKLIST.md
