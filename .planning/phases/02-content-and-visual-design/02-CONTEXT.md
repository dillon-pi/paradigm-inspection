# Phase 2: Content and Visual Design - Context

**Gathered:** 2026-04-11
**Status:** Ready for planning

<domain>
## Phase Boundary

Fill all 7 section stubs from Phase 1 with styled, placeholder-rich HTML — hero, services, how-it-works, about, service area, testimonials, and contact/footer — so a visitor can scroll the full page and understand the business. All content is clearly-marked placeholder; owner swaps for real content before launch.

</domain>

<decisions>
## Implementation Decisions

### Hero Visual Treatment
- **D-01:** Hero gradient is a dark top-to-bottom linear gradient: `linear-gradient(to bottom, #0A0A0A 0%, #1a0e08 60%, #2d1810 100%)` — black fading to a deep warm tone
- **D-02:** Hero text: cream headline (Playfair Display), orange subheadline mentioning South Florida
- **D-03:** CTA buttons: primary = solid orange fill (`--color-orange`); secondary = outlined cream border with cream text
- **D-04:** No stock photo for hero background — gradient only per HERO-02

### Scroll Animations
- **D-05:** Add AOS (Animate On Scroll) version 2.3.4 from CDN — sections and content fade-up as they enter viewport
- **D-06:** Use subtle `data-aos="fade-up"` on section headings and content blocks; do NOT animate the sticky header
- **D-07:** AOS init: `duration: 600, once: true, offset: 80` — plays once, not on scroll-back

### Service Card Style
- **D-08:** Elevated cards with soft drop shadow: `background: #FFFFFF` (white), `border-radius: 12px`, `box-shadow: 0 4px 24px rgba(0,0,0,0.08)`
- **D-09:** Icon treatment: Lucide icon inside an orange circle badge (background: `--color-orange`, white icon)
- **D-10:** Card hover: subtle lift — `transform: translateY(-4px)` with `transition: 200ms ease`
- **D-11:** Services grid: 2-column on tablet (≥768px), 1-column on mobile per SERV-04

### About Photo Placeholder
- **D-12:** Styled portrait box — 320×400px, `border-radius: 12px`, warm cream/gray background (`#e8dfc8`), `2px dashed rgba(10,10,10,0.2)` border
- **D-13:** Placeholder interior: centered Lucide camera icon (orange) + label text "YOUR PHOTO HERE" + sub-label "Recommended: 400×500px portrait"
- **D-14:** Photo box sits left of bio text on desktop; stacks above bio on mobile

### Background Rhythm (inheriting Phase 1 pattern)
- **D-15:** Hero (black gradient) → Services (cream) → How It Works (tinted — `section--tinted`) → About (cream) → Areas (tinted) → Reviews/Testimonials (cream) → Contact (cream) → Footer (black)

### Placeholder Copy Tone
- **D-16:** All placeholder text uses `[BRACKETED]` pattern per SITE-08 and Phase 1 decisions
- **D-17:** Hero headline placeholder: "Protecting Your Investment,\nOne Inspection at a Time" (already in stub — keep)
- **D-18:** Hero subheadline placeholder: "Serving Palm Beach, Broward, Miami-Dade & Monroe Counties — South Florida's trusted licensed home inspector"

### Contact Form
- **D-19:** Formspree action URL uses placeholder: `https://formspree.io/f/[YOUR-FORMSPREE-ID]` — owner replaces with their form ID
- **D-20:** Form fields: Name, Email, Phone, Message, Submit button (per CONTACT-02)

### Claude's Discretion
- Exact spacing between section elements
- Step icon choices for How It Works (Schedule/Inspect/Report)
- Testimonial card quote styling details
- Footer layout beyond the required elements (phone, email, social, license, copyright)
- Exact city list per county for Areas section

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Requirements
- `.planning/REQUIREMENTS.md` — Phase 2 requirements: HERO-01–03, SERV-01–04, PROC-01–02, ABOUT-01–04, AREA-01–03, SOCIAL-01–03, CONTACT-01–04
- `CLAUDE.md` — Technology stack (no Bootstrap/jQuery/Tailwind), font choices, AOS 2.3.4 as acceptable animation library, Lucide icons as acceptable icon library

### Phase Goal and Success Criteria
- `.planning/ROADMAP.md` §Phase 2 — Success criteria, requirement IDs, section list

### Existing Code (Phase 1 output)
- `index.html` — Section stubs to fill; existing header/nav/footer structure to preserve
- `styles.css` — Brand tokens (`:root` CSS custom properties), existing section classes (`.section`, `.section--hero`, `.section--tinted`), responsive breakpoints already established
- `script.js` — Hamburger toggle logic; AOS init should go here or in a separate `<script>` block

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `styles.css` `:root` block — all color/spacing/typography tokens already defined; Phase 2 adds no new design tokens
- `.section` class — `min-height: 320px`, `padding: var(--space-2xl) var(--space-lg)`, centered flex layout
- `.section--hero` — `min-height: 100vh`, black background, cream text (override with gradient in Phase 2)
- `.section--tinted` — `background: rgba(10,10,10,0.04)` — already available for alternating sections
- `scroll-margin-top: 76px` (desktop) / `64px` (mobile) — already set on all `section[id]`, prevents sticky header from covering anchor targets

### Established Patterns
- All color references via CSS custom properties (`var(--color-black)` etc.) — no hardcoded hex except where custom properties don't apply
- `[BRACKETED PLACEHOLDERS]` for all owner-editable content
- Lucide icons loaded from CDN (to be added in Phase 2 — not in Phase 1)
- AOS added via CDN `<link>` and `<script>` tags in `<head>` and before `</body>` respectively

### Integration Points
- Phase 2 fills `<section id="hero">`, `<section id="services">`, `<section id="how-it-works">`, `<section id="about">`, `<section id="areas">`, `<section id="reviews">`, `<section id="contact">` — IDs MUST remain stable (Phase 3 SEO references them)
- `<footer class="site-footer">` already has logo + phone + copyright stub; Phase 2 expands it with email, social links, license number
- AOS JS init can be appended to `script.js` after the hamburger toggle IIFE

</code_context>

<specifics>
## Specific Ideas

- Hero gradient: `linear-gradient(to bottom, #0A0A0A 0%, #1a0e08 60%, #2d1810 100%)` — user-confirmed
- Service card hover: `transform: translateY(-4px)` — felt right for warmth without being showy
- Photo placeholder: `320×400px`, `#e8dfc8` background, Lucide camera icon centered

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within Phase 2 scope.

</deferred>

---

*Phase: 02-content-and-visual-design*
*Context gathered: 2026-04-11*
