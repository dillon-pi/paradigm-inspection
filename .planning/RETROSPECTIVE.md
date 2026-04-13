# Project Retrospective

*A living document updated after each milestone. Lessons feed forward into future planning.*

---

## Milestone: v1.0 — Launch

**Shipped:** 2026-04-12
**Phases:** 3 | **Plans:** 8 | **Tasks:** 19

### What Was Built
- Complete single-page marketing site (index.html, style.css, script.js, 404.html) with brand token system and responsive hamburger nav
- All 8 content sections: hero, services grid, how-it-works, about, service area (4 counties), testimonials, contact+footer — all placeholder content, clearly bracketed
- Full SEO head: title, meta description, canonical, Open Graph, Twitter Card; `og-image.svg` social card; LocalBusiness JSON-LD with all 4 counties
- GitHub Pages deployment files: `.nojekyll`, `CNAME` (paradigminspection.org)
- Owner handoff docs: `HOW-TO-UPDATE.md` (343 lines, non-technical) + `LAUNCH-CHECKLIST.md` (57 checkboxes)

### What Worked
- **Bracketed placeholder pattern** was highly effective — `[YOUR-PHONE]`, `[YOUR-EMAIL]` etc. made every owner-replaceable value scannable; code review caught the one case where this pattern was violated (JSON-LD fields removed instead of kept as placeholders)
- **Wave-based execution** kept plans with shared files sequential automatically — no merge conflicts across 8 plans
- **Code review caught real bugs**: Lucide CDN version `1.8.0` didn't exist (all icons silently 404'd), AOS ReferenceError on 404 page, stale line numbers in handoff docs — all fixed before verification
- **Sequential subagents** worked reliably once worktree isolation was found to be unsupported in this environment; fallback was clean

### What Was Inefficient
- **Usage limit hit mid-phase** (between Wave 1 and Wave 2 of Phase 3) — required a manual "continue" prompt; no work was lost but added friction
- **REQUIREMENTS.md checkboxes never updated by agents** — all 47 requirements were built but only 21 were checked off; the milestone completion had to proceed with a known gap and note it
- **Code review / fix / re-verify cycle** added ~3 extra agent runs after execution — preventable if Lucide version and AOS guard had been in the plan's must-haves

### Patterns Established
- **Bracketed placeholders** (`[YOUR-*]`) as the universal pattern for owner-replaceable content — consistent, scannable, grep-able
- **LAUNCH-CHECKLIST.md** as the single source of truth for "things not yet done before launch" — every deferred item (og-image.png, favicon binaries, real contact info) tracked there
- **`og-image-export.html` helper** for browser-based PNG export when no build tools exist — a reusable pattern for static sites needing raster exports

### Key Lessons
1. **Pin CDN versions to verified releases** — check the package's actual version range before writing it into a plan. Lucide uses `0.x` not `1.x`; a quick check at unpkg.com would have caught this at planning time.
2. **Guard third-party library calls defensively** — `if (typeof LIB !== 'undefined')` before any library init call, especially when not all pages load the same scripts.
3. **Line numbers in documentation drift** — any doc that references line numbers needs to be written last (after all other edits) or verified at commit time. The 30-line drift in HOW-TO-UPDATE.md happened because content was added after the doc was written.
4. **Worktree isolation is environment-dependent** — always have a sequential fallback ready; the graceful degradation path worked but should be detected earlier in the workflow rather than on first spawn failure.

### Cost Observations
- Model mix: ~100% sonnet (claude-sonnet-4-6)
- Sessions: ~4 (spread across usage limit resets)
- Notable: Sequential subagents used ~45-65k tokens per plan; the usage limit hit between Wave 1 and Wave 2 of Phase 3 suggests ~200k tokens consumed across the full phase 3 execution

---

## Cross-Milestone Trends

### Process Evolution

| Milestone | Phases | Plans | Key Change |
|-----------|--------|-------|------------|
| v1.0 | 3 | 8 | Baseline — first milestone |

### Top Lessons (Verified Across Milestones)

1. Verify CDN/package versions before committing them to plans
2. Write line-number-dependent docs last, after all other edits complete
