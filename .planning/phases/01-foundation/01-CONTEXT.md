# Phase 1: Foundation - Context

**Gathered:** 2026-04-09
**Status:** Ready for planning

<domain>
## Phase Boundary

Deploy a navigable site shell to GitHub Pages with the brand system in place, all section stubs present, and zero broken paths. Covers: HTML skeleton (index.html + 404.html), CSS brand system via custom properties, responsive sticky header with hamburger nav, section stubs with anchor IDs, and .nojekyll deployment file. Content sections (hero copy, service cards, about bio, etc.) are Phase 2.

</domain>

<decisions>
## Implementation Decisions

### Navigation Labels and Anchor IDs
- **D-01:** Nav links are: Services / How It Works / About / Areas / Reviews / Contact
- **D-02:** Corresponding anchor IDs: `#services`, `#how-it-works`, `#about`, `#areas`, `#reviews`, `#contact`
- **D-03:** 404.html reuses the same nav header so visitors can navigate back

### Contact Info (Phase 1 Stubs)
- **D-04:** Phone number in the sticky header tap-to-call link is a bracketed placeholder: `[YOUR PHONE NUMBER]` with `tel:` href also bracketed — owner replaces before launch
- **D-05:** All other contact info (email, social handles) follows the same bracketed placeholder pattern per SITE-08

### GitHub Deployment
- **D-06:** No GitHub repo exists yet — build all files locally; provide repo creation + Pages setup instructions in comments or a note (no CNAME file needed)
- **D-07:** `.nojekyll` file is committed at repo root per DEPLOY-01
- **D-08:** No custom domain for Phase 1; site will resolve at the default `username.github.io/repo` URL

### Page Background Rhythm
- **D-09:** Cream (#F5EDD6) is the base/dominant background for most sections
- **D-10:** Hero and Footer use black (#0A0A0A) background with cream/orange text — these are defined in Phase 1 stub CSS so Phase 2 inherits the rhythm
- **D-11:** Services and testimonials sections stay cream; how-it-works or about may alternate — Claude's discretion for the exact alternation pattern

### Brand System (Locked from REQUIREMENTS.md + CLAUDE.md)
- **D-12:** Colors via CSS custom properties: `--color-black: #0A0A0A`, `--color-cream: #F5EDD6`, `--color-orange: #E07A2F`
- **D-13:** Fonts: Playfair Display (headings, weights 400/700) + Inter (body, weights 400/500/600) from Google Fonts
- **D-14:** Breakpoints: 390px (mobile), 768px (tablet — hamburger threshold), 1200px (desktop)

### Claude's Discretion
- Exact CSS custom property naming conventions beyond colors/fonts
- Hamburger icon style (3-bar SVG or Lucide icon)
- Header height and sticky behavior specifics
- Section stub min-heights and placeholder text
- Exact alternation pattern for mid-page sections beyond Hero and Footer

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements and Stack
- `.planning/REQUIREMENTS.md` — Full requirement list; Phase 1 requirements: SITE-01 to SITE-08, NAV-01 to NAV-04, DEPLOY-01
- `CLAUDE.md` — Technology stack decisions (HTML/CSS/JS only, no build tools), font choices, what NOT to use (no Bootstrap, no Tailwind Play CDN, no jQuery)

### Phase Goal
- `.planning/ROADMAP.md` §Phase 1 — Success criteria and requirement IDs for this phase

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- No existing code — this is Phase 1 (greenfield)
- `logo.jpg` may or may not exist in the project root; Phase 1 should reference it but gracefully handle absence with an `alt` text fallback

### Established Patterns
- None yet — this phase establishes the patterns that Phases 2 and 3 inherit

### Integration Points
- Phase 2 fills in all section stubs created here; anchor IDs defined in Phase 1 must remain stable
- Phase 3 adds SEO meta tags, JSON-LD, favicon — all go in the `<head>` established here

</code_context>

<specifics>
## Specific Ideas

- Nav collapses at 768px (tablet), not just mobile — hamburger appears at ≤768px per NAV-02
- All touch targets minimum 44×44px per SITE-07 (applies to hamburger button and nav links)
- 404.html must include site nav and phone number per NAV-04 — reuse the same header component structure

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 1 scope.

</deferred>

---

*Phase: 01-foundation*
*Context gathered: 2026-04-09*
