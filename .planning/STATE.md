# Project State

**Project:** Paradigm Inspection Website
**Milestone:** v1 — Launch
**Status:** Planning complete — ready for Phase 1
**Last updated:** 2026-04-09

---

## Project Reference

See: .planning/PROJECT.md (updated 2026-04-09)

**Core value:** A potential client who finds this site should come away trusting the inspector and knowing exactly how to reach him.
**Current focus:** Phase 1

---

## Phase Status

| Phase | Name | Status |
|-------|------|--------|
| 1 | Foundation | Not started |
| 2 | Content and Visual Design | Not started |
| 3 | SEO, Assets, and Handoff | Not started |

---

## Current Position

**Active phase:** 1 — Foundation
**Active plan:** None (planning not yet started)
**Overall progress:** 0/3 phases complete

```
Phase 1 [          ] 0%
Phase 2 [          ] 0%
Phase 3 [          ] 0%
```

---

## Performance Metrics

| Metric | Value |
|--------|-------|
| Requirements defined | 40 |
| Requirements complete | 0 |
| Phases complete | 0/3 |
| Plans complete | 0 |

---

## Accumulated Context

### Key Decisions

| Decision | Rationale | Status |
|----------|-----------|--------|
| Static HTML/CSS/JS — no framework | GitHub Pages compatible, no build step, trivially maintainable by owner | Confirmed |
| Brand palette from logo: black (#0A0A0A), cream (#F5EDD6), orange (#E07A2F) | Logo already exists and sets the visual tone | Confirmed |
| Placeholder content throughout, clearly marked | Owner is early-stage — all real content (bio, photos, license number) to be filled in before launch | Confirmed |
| Phone + email + social as contact (no booking widget) | Owner handles scheduling directly; reduces complexity | Confirmed |
| Formspree for contact form (CONTACT-02) | No backend; Formspree free tier covers low-volume v1 needs | Confirmed |
| Coarse granularity — 3 phases | 40 requirements collapse naturally into Foundation / Content+Polish / SEO+Handoff at coarse compression | Confirmed |

### Open Questions

- **Inspector credentials:** License number format (FL HI-XXXXX) and certification body (InterNACHI vs. ASHI vs. none) — needed before About section is marked done
- **Contact information:** Final phone number and email address — needed before any section ships to production
- **Domain decision:** Custom domain vs. github.io subdomain — affects CNAME, canonical URL, and Open Graph tags (needed in Phase 3)
- **Real photography:** Owner headshot and any property photos — build uses labeled placeholders; owner provides before launch

### Blockers

None at start of Phase 1.

### Todos

- [ ] Confirm final phone number with owner before Phase 2 is marked complete
- [ ] Confirm custom domain decision before Phase 3 begins
- [ ] Verify schema.org `@type` for home inspection business at Phase 3 planning time

---

## Session Continuity

To resume: read this file, then read `.planning/ROADMAP.md` for phase detail.

**Stack:** index.html + style.css + main.js + assets/ — no build tools
**Hosting:** GitHub Pages — push to main = deployed
**Critical pitfalls to avoid:** missing .nojekyll, absolute paths, unoptimized hero image, placeholder content shipped to production

---

*State initialized: 2026-04-09*
