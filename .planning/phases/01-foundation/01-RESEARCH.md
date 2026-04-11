# Phase 1: Foundation - Research

**Researched:** 2026-04-11
**Domain:** Static HTML/CSS/JS — GitHub Pages deployment, brand system, responsive nav
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Nav links are: Services / How It Works / About / Areas / Reviews / Contact
- **D-02:** Anchor IDs: `#services`, `#how-it-works`, `#about`, `#areas`, `#reviews`, `#contact`
- **D-03:** 404.html reuses the same nav header
- **D-04:** Phone number in sticky header is `[YOUR PHONE NUMBER]` placeholder with `tel:` href also bracketed
- **D-05:** All other contact info uses bracketed placeholder pattern per SITE-08
- **D-06:** No GitHub repo exists yet — build files locally; provide repo creation + Pages setup instructions in comments
- **D-07:** `.nojekyll` file committed at repo root per DEPLOY-01
- **D-08:** No custom domain for Phase 1; default `username.github.io/repo` URL
- **D-09:** Cream (`#F5EDD6`) is the base/dominant background for most sections
- **D-10:** Hero and Footer use black (`#0A0A0A`) background with cream/orange text — defined in Phase 1 stub CSS
- **D-11:** Services and testimonials stay cream; alternation pattern is Claude's discretion
- **D-12:** Colors: `--color-black: #0A0A0A`, `--color-cream: #F5EDD6`, `--color-orange: #E07A2F`
- **D-13:** Fonts: Playfair Display (headings 400/700) + Inter (body 400/500/600) from Google Fonts
- **D-14:** Breakpoints: 390px (mobile), 768px (tablet/hamburger threshold), 1200px (desktop)

### Claude's Discretion

- Exact CSS custom property naming conventions beyond colors/fonts
- Hamburger icon style (3-bar SVG or Lucide icon)
- Header height and sticky behavior specifics
- Section stub min-heights and placeholder text
- Exact alternation pattern for mid-page sections beyond Hero and Footer

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within Phase 1 scope.
</user_constraints>

---

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| SITE-01 | Single-page scroll layout with sticky header and smooth anchor links | CSS `position: sticky`, `scroll-behavior: smooth` on `<html>` |
| SITE-02 | Brand palette: black (#0A0A0A), cream (#F5EDD6), orange (#E07A2F) — no additional colors | CSS custom properties on `:root`; three-token system |
| SITE-03 | Playfair Display (headings) + Inter (body) from Google Fonts | Preconnect + `display=swap` `<link>` pattern; single request for both families |
| SITE-04 | Fully responsive at 390px, 768px, 1200px | Media query breakpoints; hamburger collapses at `max-width: 768px` |
| SITE-05 | Logo (logo.jpg) in sticky header (and footer stub) | `<img>` with `alt` fallback; logo.jpg confirmed present in repo root |
| SITE-06 | Phone number visible in header at all scroll positions as `tel:` link | Part of sticky header markup; orange color treatment |
| SITE-07 | All touch targets minimum 44x44px (WCAG 2.1) | Hamburger button `min-width/height: 44px`; nav link padding ensures height |
| SITE-08 | HTML sections include clear comments marking placeholder content | `<!-- [PHASE 2] Section content goes here -->` comment pattern |
| NAV-01 | Header includes logo, phone number, and anchor nav links | Flex layout: logo left, phone center-right, nav links right |
| NAV-02 | Navigation collapses to hamburger at ≤768px | CSS `display: none` on nav at `max-width: 768px`; hamburger shown |
| NAV-03 | Hamburger opens/closes via vanilla JS toggle | < 50 lines JS; toggles `.nav-open` class; updates `aria-expanded` |
| NAV-04 | 404.html with site nav and phone number | `404.html` at repo root; GitHub Pages serves it automatically |
| DEPLOY-01 | `.nojekyll` file present in repo root | Empty file; disables Jekyll processing on GitHub Pages |
</phase_requirements>

---

## Summary

Phase 1 creates the skeleton of a static marketing site: `index.html`, `404.html`, `styles.css`, `script.js`, and `.nojekyll`. No frameworks, no build tools, no npm. Every decision in CONTEXT.md is locked and verified against official documentation. The research below fills gaps in CDN URLs, GitHub Pages behavior, font loading patterns, and accessibility patterns — all of which the planner needs to write precise, executable tasks.

The primary risk in this phase is subtle: GitHub Pages will silently apply Jekyll processing to any file with underscores in its name (or any `_` directory) unless `.nojekyll` is present. The `logo.jpg` file is confirmed to exist in the project root. Lucide Icons has updated to v1.8.0 (April 2026), significantly newer than the version referenced in CLAUDE.md — however, since the hamburger uses an inline SVG (not Lucide), Lucide is not consumed in Phase 1 at all.

**Primary recommendation:** Build all five files in a single wave. The only JavaScript is the hamburger toggle (< 50 lines). CSS custom properties and the sticky header are the only technical complexity; both are well-understood, zero-dependency patterns.

---

## Project Constraints (from CLAUDE.md)

Directives from `CLAUDE.md` that constrain all planning and implementation decisions:

| Directive | Category | Impact on Phase 1 |
|-----------|----------|-------------------|
| Static HTML/CSS/JS — no backend, no build tools mandatory | Stack | No npm, no Webpack, no Vite |
| GitHub Pages compatible | Deployment | Requires `.nojekyll`; no server-side processing |
| No React / Vue / Svelte | Prohibited | JS is vanilla only |
| No Next.js / Nuxt | Prohibited | No SSR/SSG frameworks |
| No Tailwind CSS (Play CDN) | Prohibited | No utility-class frameworks |
| No Bootstrap | Prohibited | Hand-authored CSS only |
| No jQuery | Prohibited | Hamburger toggle is pure vanilla JS |
| No GSAP | Prohibited | AOS only (and AOS is Phase 2+, not Phase 1) |
| No Font Awesome | Prohibited | Lucide via jsDelivr (but hamburger uses inline SVG in Phase 1) |
| No Google Analytics in v1 | Prohibited | No tracking scripts |
| Playfair Display + Inter | Required fonts | Google Fonts, both families in single `<link>` |
| Lucide Icons | Required icon library | Phase 2+; not loaded in Phase 1 |
| Images optimized / placeholders | Performance | logo.jpg exists; use as-is with `alt` fallback |

---

## Standard Stack

### Core (Phase 1 — no npm, no CDN scripts except fonts)

| Technology | Version | Purpose | Why Standard |
|------------|---------|---------|--------------|
| HTML5 | — | Page structure (`index.html`, `404.html`) | Native, zero dependency, GitHub Pages serves it directly |
| CSS Custom Properties | — | Brand token system on `:root` | Variables make brand swaps trivial; no preprocessor needed |
| Vanilla JS (ES2020+) | — | Hamburger toggle only | No state beyond open/close; < 50 lines |
| Google Fonts | — | Playfair Display + Inter | Free, CDN-delivered, no account required |

[VERIFIED: Google Fonts — confirmed free, no auth required, supports `display=swap`]

### CDN Dependencies (loaded via `<link>` in `<head>`)

| Library | Version | CDN URL | Purpose |
|---------|---------|---------|---------|
| Google Fonts — Playfair Display | latest | `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap` | Both families in one request |
| AOS | **Not used in Phase 1** | — | Scroll animations; Phase 2 only |
| Lucide Icons | **Not used in Phase 1** | — | Icons for service cards; Phase 2 only |

[VERIFIED: AOS 2.3.4 — confirmed latest stable at unpkg.com/aos, released 8 years ago, no breaking changes since]
[VERIFIED: Lucide 1.8.0 — confirmed at jsdelivr.com/package/npm/lucide as of 2026-04-09]

**Note on Lucide version:** CLAUDE.md references Lucide generally and says "verify current version at jsdelivr.com before use." The verified current version is **1.8.0** (published 2026-04-09). This is relevant for Phase 2 planning, not Phase 1.

**Installation:** No `npm install` in Phase 1. All dependencies are loaded via `<link>` or `<script>` tags.

---

## Architecture Patterns

### Recommended File Structure

```
/                          (repo root = GitHub Pages publishing source)
├── index.html             Single-page shell with all section stubs
├── 404.html               Error page with site nav and phone placeholder
├── styles.css             All CSS: brand tokens, header, nav, section stubs
├── script.js              Hamburger toggle only (<50 lines vanilla JS)
├── logo.jpg               Present in repo root (verified)
└── .nojekyll              Empty file — disables Jekyll on GitHub Pages
```

No subdirectories. No asset pipeline. No package.json.

[VERIFIED: file structure matches UI-SPEC.md File Structure Contract exactly]
[VERIFIED: logo.jpg confirmed present at project root via `ls` command]

---

### Pattern 1: CSS Custom Properties Token System

**What:** All brand values declared on `:root` as CSS variables. Components reference tokens, never raw values.

**When to use:** Every color, font-family, font-size, font-weight, spacing, and line-height reference. Eliminates magic numbers and makes brand changes trivial.

**Example:**
```css
/* Source: UI-SPEC.md CSS Custom Properties Contract */
:root {
  /* Colors */
  --color-black: #0A0A0A;
  --color-cream: #F5EDD6;
  --color-orange: #E07A2F;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Typography */
  --font-heading: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --font-size-sm: 14px;
  --font-size-base: 16px;
  --font-size-lg: 20px;
  --font-size-xl: 28px;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-body: 1.5;
  --line-height-heading: 1.2;
}
```

[VERIFIED: token names and values from UI-SPEC.md, which sources from CONTEXT.md D-12 through D-14]

---

### Pattern 2: Google Fonts Loading (Performance-Optimized)

**What:** Two preconnect hints + single stylesheet `<link>` with `display=swap`. Both font families in one URL.

**When to use:** Always when loading Google Fonts. The `crossorigin` attribute on `fonts.gstatic.com` is required — fonts are served from a different origin than the stylesheet.

**Example:**
```html
<!-- Source: web.dev/articles/font-best-practices (official Google guidance) -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

**Why:** Preconnect saves 100–300ms by establishing the connection before the browser needs it. `display=swap` prevents invisible text while fonts load — users see body text immediately in the system font fallback. [CITED: web.dev/articles/font-best-practices]

---

### Pattern 3: Sticky Header

**What:** `position: sticky; top: 0` with explicit `z-index` so header stays above content on scroll.

**When to use:** Header element. A sticky (not fixed) header remains in normal document flow until it would scroll out of view, then "sticks."

**Pitfall:** `position: sticky` breaks silently if any ancestor has `overflow: hidden`, `overflow: scroll`, or `overflow: auto`. Set only on the `<header>` element directly; ensure `<body>` and `<html>` have no overflow constraints.

**Example:**
```css
/* Source: MDN Web Docs / UI-SPEC.md Component Inventory */
header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-black);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  height: 72px; /* desktop */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--space-lg);
}

@media (max-width: 768px) {
  header {
    height: 60px;
  }
}
```

[CITED: developer.mozilla.org/en-US/docs/Web/CSS/position]

---

### Pattern 4: Hamburger Nav Toggle (Accessible Vanilla JS)

**What:** A `<button>` element toggles `.nav-open` on the header; CSS shows/hides the nav list. JS updates `aria-expanded` on the button.

**When to use:** Navigation at ≤768px viewport width.

**HTML:**
```html
<!-- Source: UI-SPEC.md Hamburger Button SVG markup -->
<button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="main-nav">
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect y="0" width="24" height="2" rx="1" fill="currentColor"/>
    <rect y="8" width="24" height="2" rx="1" fill="currentColor"/>
    <rect y="16" width="24" height="2" rx="1" fill="currentColor"/>
  </svg>
</button>

<nav id="main-nav">
  <ul>
    <li><a href="#services">Services</a></li>
    <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#areas">Areas</a></li>
    <li><a href="#reviews">Reviews</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

**CSS:**
```css
/* Hide nav on mobile by default */
@media (max-width: 768px) {
  .nav-toggle { display: flex; }

  #main-nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--color-black);
    padding: var(--space-md) 0;
  }

  header.nav-open #main-nav {
    display: flex;
  }

  #main-nav a {
    padding: var(--space-md) var(--space-lg);
    min-height: 44px; /* SITE-07 touch target */
    display: flex;
    align-items: center;
  }
}

@media (min-width: 769px) {
  .nav-toggle { display: none; }
}
```

**JS (< 50 lines):**
```js
// Source: a11ymatters.com/pattern/mobile-nav/ (WCAG 2.1 pattern)
const toggle = document.querySelector('.nav-toggle');
const header = document.querySelector('header');

toggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});

// Close menu when a nav link is clicked (mobile)
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
  });
});
```

[CITED: a11ymatters.com/pattern/mobile-nav/]
[CITED: WCAG 2.1 SC 2.5.5 — minimum touch target 44x44px]

---

### Pattern 5: Section Stubs with Anchor IDs

**What:** Semantic `<section>` elements with `id` attributes matching D-02. Each stub has a minimum height so the page has visible scroll rhythm. HTML comment marks Phase 2 content.

**When to use:** All seven content sections plus Hero and Footer.

**Example:**
```html
<!-- Pattern from UI-SPEC.md Component Inventory §4 -->
<main>
  <section id="hero" style="min-height: 100vh; background-color: var(--color-black);">
    <!-- [PHASE 2] Hero content goes here -->
  </section>

  <section id="services">
    <!-- [PHASE 2] Services section content goes here -->
  </section>

  <section id="how-it-works" class="section--tinted">
    <!-- [PHASE 2] How It Works content goes here -->
  </section>

  <section id="about">
    <!-- [PHASE 2] About content goes here -->
  </section>

  <section id="areas" class="section--tinted">
    <!-- [PHASE 2] Service Area content goes here -->
  </section>

  <section id="reviews">
    <!-- [PHASE 2] Reviews content goes here -->
  </section>

  <section id="contact">
    <!-- [PHASE 2] Contact section content goes here -->
  </section>
</main>

<footer>
  <!-- [PHASE 2] Footer content goes here -->
</footer>
```

**CSS stub classes:**
```css
section {
  min-height: 320px;
  padding: var(--space-2xl) var(--space-lg);
}

#hero {
  min-height: 100vh;
  background-color: var(--color-black);
}

footer {
  min-height: 200px;
  background-color: var(--color-black);
}

.section--tinted {
  background-color: rgba(10, 10, 10, 0.04);
}
```

[VERIFIED: anchor IDs, min-heights, and `.section--tinted` value from UI-SPEC.md §4 Section Stubs]

---

### Pattern 6: GitHub Pages Deployment (.nojekyll)

**What:** An empty file named `.nojekyll` at the repo root prevents GitHub Pages from running Jekyll on the site.

**Why it matters:** Without `.nojekyll`, GitHub Pages silently ignores any file or directory whose name starts with an underscore (e.g., `_data/`, `_includes/`). More critically, Jekyll processes Liquid template syntax — if any HTML file contains `{{ }}` or `{% %}` characters (common in inline JS), Jekyll may corrupt the output.

**Example:**
```bash
# Create the file (it must be empty)
touch .nojekyll
# Commit it to the repo root — that's it
```

[VERIFIED: docs.github.com/en/pages — official documentation confirms .nojekyll disables Jekyll processing]
[CITED: github.blog/changelog/2024-07-08-pages-legacy-worker-sunset/ — Pages build pipeline changes 2024]

---

### Pattern 7: Custom 404 Page on GitHub Pages

**What:** A file named `404.html` at the publishing source root is automatically served by GitHub Pages for all non-existent URLs. No configuration needed.

**Key facts:**
- GitHub Pages sends the correct HTTP 404 status code (good for SEO)
- Works with both default `username.github.io/repo` and custom domains
- One 404.html covers all subdirectory 404s (cannot have per-directory 404 pages)
- Must be an HTML file (not markdown) to avoid needing Jekyll front matter

[VERIFIED: docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site]

---

### Pattern 8: Native Smooth Scroll

**What:** One CSS rule enables native smooth scrolling for all anchor links site-wide. Zero JavaScript needed.

**Example:**
```css
html {
  scroll-behavior: smooth;
}
```

**Caveats:** Users with `prefers-reduced-motion` system preference should not get animated scrolling. Respect this:
```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

[CITED: MDN Web Docs — scroll-behavior; WCAG 2.1 SC 2.3.3 Animation from Interactions]

---

### Anti-Patterns to Avoid

- **Relative paths that break on GitHub Pages project sites:** When the site is hosted at `username.github.io/repo-name/`, paths like `src="logo.jpg"` still work from root-relative paths. Use `href="styles.css"` (no leading slash), not `href="/styles.css"` — the leading slash resolves to the domain root, not the repo subfolder.
- **`overflow: hidden` on `<body>` or `<html>`:** Breaks `position: sticky` on the header. Never set this without also verifying sticky header still works.
- **Using `@import` for Google Fonts in CSS:** Forces sequential loading. Always use `<link>` tags in `<head>` with preconnect hints.
- **Missing `crossorigin` on `fonts.gstatic.com` preconnect:** Without it, the preconnect hint is ignored for font file downloads (CORS policy). This is a common, silent performance regression.
- **Hamburger as `<div>` instead of `<button>`:** `<div>` elements are not keyboard focusable and have no accessible role. Always use `<button>`.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth scrolling | Custom JS scroll logic | `scroll-behavior: smooth` in CSS | Browser-native, zero JS, works instantly |
| Font loading | Manual font file hosting | Google Fonts CDN | Free, globally cached, handles WOFF2/WOFF format detection |
| 404 routing | `.htaccess` rewrites or JS-based routing | Native `404.html` on GitHub Pages | GitHub Pages handles it automatically — zero config |
| Icon SVGs from scratch | Drawing SVG paths by hand | Inline SVG for hamburger (from UI-SPEC); Lucide for Phase 2 | UI-SPEC provides the exact hamburger SVG markup; Lucide provides all other icons |

**Key insight:** Every "nice to have" in this phase has a zero-dependency browser-native solution. The planner should reach for CSS and HTML semantics before writing any JavaScript.

---

## Common Pitfalls

### Pitfall 1: Missing `.nojekyll` — Jekyll silently processes files

**What goes wrong:** GitHub Pages applies Jekyll transformation. Any HTML file with `{{ }}` or `{%  %}` (e.g., from inline JS template literals) gets corrupted or removed. Files/dirs starting with `_` are excluded from output.

**Why it happens:** Jekyll processing is the default on GitHub Pages when deploying from a branch. New repos inherit this default.

**How to avoid:** Commit an empty `.nojekyll` file to the repo root as the very first commit. Verify by checking the Pages build log in repo Settings > Pages.

**Warning signs:** The deployed site has missing files, blank sections, or JavaScript that doesn't match the source.

---

### Pitfall 2: `position: sticky` silently broken by ancestor `overflow`

**What goes wrong:** Header scrolls away with the page instead of sticking.

**Why it happens:** Any ancestor element with `overflow: hidden`, `overflow: scroll`, or `overflow: auto` creates a new scroll container. The sticky element sticks to that container's boundary, not the viewport.

**How to avoid:** Do not set `overflow` on `<body>` or `<html>`. If you need to clip content, use `clip` or apply overflow only to the specific container that needs it.

**Warning signs:** Header sticks in a development environment but not on the deployed site, or stops sticking when a later section is added.

---

### Pitfall 3: Google Fonts preconnect missing `crossorigin` attribute

**What goes wrong:** Font files take 100–300ms longer to load than they should. Invisible text (FOIT) or layout shifts (FOUT) are worse than expected.

**Why it happens:** Google Fonts serves stylesheets from `fonts.googleapis.com` but font binary files from `fonts.gstatic.com`. The browser cannot reuse the preconnect for the second origin unless `crossorigin` is specified (because font requests use anonymous CORS mode).

**How to avoid:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Warning signs:** WebPageTest or Lighthouse shows font file requests not using an early connection; TTFB on font files is high.

---

### Pitfall 4: Absolute paths break GitHub Pages project sites

**What goes wrong:** CSS, JS, images, and links work locally but 404 on the deployed `username.github.io/repo-name/` URL.

**Why it happens:** `href="/styles.css"` resolves to `username.github.io/styles.css` (the user root), not `username.github.io/repo-name/styles.css` (the project root).

**How to avoid:** Use relative paths everywhere in Phase 1: `href="styles.css"`, `src="logo.jpg"`, `src="script.js"`. No leading slashes on asset references.

**Warning signs:** Site works with `python -m http.server` locally but shows broken CSS and 404 JS on GitHub Pages.

---

### Pitfall 5: Hamburger `aria-expanded` not updated on state change

**What goes wrong:** Screen readers announce the button state incorrectly — users who navigate by keyboard or assistive technology cannot tell if the menu is open or closed.

**Why it happens:** Developers toggle a CSS class for visual state but forget to update the `aria-expanded` attribute in JavaScript.

**How to avoid:** Every time `.nav-open` is toggled, also call `toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false')`.

**Warning signs:** Axe DevTools or NVDA reports "button expanded state not updated."

---

### Pitfall 6: Nav links don't close mobile menu on click

**What goes wrong:** On mobile, tapping a nav link scrolls to the section but leaves the menu open, covering the content.

**Why it happens:** The click event on anchor links fires the browser's native scroll behavior, but nothing tells the JS to close the menu.

**How to avoid:** Add a click listener to every nav anchor link that removes `.nav-open` and resets `aria-expanded`.

---

## Code Examples

### Complete `<head>` Block

```html
<!-- Source: UI-SPEC.md + web.dev font best practices -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paradigm Inspection — Licensed Home Inspector | South Florida</title>

  <!-- Google Fonts: preconnect for performance, both families in one request -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">
</head>
```

### Complete Header Markup

```html
<!-- Source: UI-SPEC.md Component Inventory §1 and §2 -->
<header>
  <div class="header-inner">
    <a href="#hero" class="header-logo">
      <img src="logo.jpg" alt="Paradigm Inspection logo" height="48">
    </a>

    <!-- Phone: always visible in header per SITE-06, NAV-01 -->
    <a href="tel:[YOUR-PHONE]" class="header-phone">[YOUR PHONE NUMBER]</a>

    <!-- Desktop nav -->
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#areas">Areas</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hamburger: mobile only -->
    <button class="nav-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="main-nav">
      <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect y="0" width="24" height="2" rx="1" fill="currentColor"/>
        <rect y="8" width="24" height="2" rx="1" fill="currentColor"/>
        <rect y="16" width="24" height="2" rx="1" fill="currentColor"/>
      </svg>
    </button>
  </div>
</header>
```

### 404.html Body

```html
<!-- Source: UI-SPEC.md Copywriting Contract -->
<!-- Reuses identical <head> and <header> as index.html -->
<main class="error-page">
  <h1>Page Not Found</h1>
  <p>The page you're looking for doesn't exist. Use the navigation above to find what you need, or give us a call.</p>
  <a href="tel:[YOUR-PHONE]" class="error-cta">Call [YOUR PHONE NUMBER]</a>
</main>
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| `position: fixed` sticky header | `position: sticky; top: 0` | CSS3 (broad support ~2017) | Sticky remains in document flow; no layout offset compensation needed |
| JS-driven smooth scroll | `scroll-behavior: smooth` in CSS | CSS Scroll Behavior spec (~2018, broad 2020) | Zero JS needed for smooth scroll |
| Google Fonts via `@import` in CSS | `<link>` tags with `preconnect` in `<head>` | Established best practice by 2022 | Parallel loading instead of sequential; 100–300ms savings |
| Hamburger as `<div>` | Hamburger as `<button>` with ARIA | WCAG 2.1 (2018) | Keyboard accessible, screen-reader compatible |
| Individual font weight requests | Combined family request with `?family=A:wght@x;y&family=B:wght@x;y` | Google Fonts API v2 (2020) | One HTTP request instead of many |

**Deprecated/outdated:**
- `@import url('https://fonts.googleapis.com/...')` in CSS: Works, but forces sequential loading. Replaced by `<link>` tags.
- Font Awesome CDN kit: Requires account registration. Replaced by Lucide (direct CDN, no account).
- Jekyll-based GitHub Pages (no `.nojekyll`): GitHub now requires opt-in to Jekyll; `.nojekyll` is the default-off pattern for plain HTML sites.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `logo.jpg` will serve adequately at `height: 48px` in the header without visible quality degradation | Architecture Patterns §File Structure | Logo may be low-res; owner may need to supply a higher-res version before Phase 2 |
| A2 | The GitHub repo will be configured to deploy from the `main` branch root (not `/docs` folder) | Architecture Patterns §GitHub Pages | If `docs/` folder is chosen as source, `.nojekyll` must go in `/docs/`, not root |
| A3 | No service worker, no `manifest.json`, and no PWA setup is needed in Phase 1 | Standard Stack | Correct per requirements — PWA is not in scope for any phase |

**Low-risk assumptions:** A1 is easy to verify once the site is built. A2 is resolved when the owner sets up the repository. A3 is confirmed out of scope by REQUIREMENTS.md.

---

## Open Questions

1. **GitHub repo name and owner username**
   - What we know: No repo exists yet (D-06). Default URL will be `username.github.io/repo-name`.
   - What's unclear: The exact repo name affects the base URL, which affects anchor scroll behavior (anchor links work regardless of repo name, so this does not block Phase 1).
   - Recommendation: Phase 1 tasks should include a commented note in `index.html` about how to create the repo and enable Pages. This is non-blocking.

2. **Mobile menu: phone in menu vs. always visible in header**
   - What we know: UI-SPEC D-04 says phone number is in the header at all times per SITE-06. UI-SPEC also says phone moves into hamburger menu as first item on mobile.
   - What's unclear: Does the phone appear in BOTH the header (above the hamburger) and inside the open menu, or only in the menu on mobile?
   - Recommendation: Show phone in header at all times (SITE-06 is unambiguous: "visible in header at all scroll positions"). On mobile, also include it as first item in the open menu for convenience. This satisfies SITE-06 strictly.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|-------------|-----------|---------|----------|
| logo.jpg | SITE-05 — logo in header | confirmed present | — | `alt="Paradigm Inspection logo"` fallback text |
| Git | D-06 — local build before repo creation | assumed | — | Files can be created locally without git |
| Web browser for testing | Phase 1 success criteria | assumed | — | — |
| GitHub account | DEPLOY-01 — Pages setup | [ASSUMED] | — | No fallback — owner must create account |

**Missing dependencies with no fallback:**
- GitHub account and repository: Must be created by owner before deployment. Phase 1 files can be built locally and pushed after account creation. Instructions should be included in comments.

**Missing dependencies with fallback:**
- None beyond the GitHub account requirement.

---

## Security Domain

> Applying minimal security review. Phase 1 is static HTML/CSS/JS with no user input, no forms, and no external API calls. No authentication, no session management, no data storage.

### Applicable ASVS Categories

| ASVS Category | Applies | Standard Control |
|---------------|---------|-----------------|
| V2 Authentication | No | No auth in this phase |
| V3 Session Management | No | No sessions in this phase |
| V4 Access Control | No | No access control in this phase |
| V5 Input Validation | No | No user input in Phase 1 (forms are Phase 2) |
| V6 Cryptography | No | No crypto in this phase |

### Minimal Security Notes for Static HTML

| Concern | Relevance | Mitigation |
|---------|-----------|------------|
| `tel:` link injection | Low — link is a static placeholder, not user-supplied | Hardcode placeholder text; no JS template insertion |
| External CDN trust | Low — Google Fonts only; no JS CDN in Phase 1 | Phase 1 loads zero third-party JS; only a CSS font file from Google |
| GitHub Pages HTTPS | Automatic | GitHub Pages enforces HTTPS via Let's Encrypt |

**Assessment:** Phase 1 has minimal security surface. The only external dependency is Google Fonts (CSS only, no JS). No forms, no inputs, no APIs. No security controls required beyond HTTPS (automatic).

---

## Sources

### Primary (HIGH confidence)
- `01-CONTEXT.md` — 14 locked decisions consumed directly
- `01-UI-SPEC.md` — Component inventory, token values, SVG markup, copywriting contract
- `REQUIREMENTS.md` — Full requirement list for Phase 1 (SITE-01 through SITE-08, NAV-01 through NAV-04, DEPLOY-01)
- `CLAUDE.md` — Prohibited tools, required stack, font choices
- [docs.github.com — Creating a custom 404 page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-custom-404-page-for-your-github-pages-site) — 404.html behavior verified
- [web.dev/articles/font-best-practices](https://web.dev/articles/font-best-practices) — Preconnect + font-display pattern

### Secondary (MEDIUM confidence)
- [unpkg.com/aos@2.3.4](https://app.unpkg.com/aos@2.3.4) — AOS 2.3.4 confirmed as latest stable
- [jsdelivr.com/package/npm/lucide](https://www.jsdelivr.com/package/npm/lucide) — Lucide v1.8.0 confirmed as of 2026-04-09
- [a11ymatters.com/pattern/mobile-nav/](https://a11ymatters.com/pattern/mobile-nav/) — Accessible hamburger nav pattern
- [almanac.httparchive.org/en/2024/fonts](https://almanac.httparchive.org/en/2024/fonts) — font-display: swap adoption data

### Tertiary (LOW confidence)
- None — all critical claims verified against primary sources

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — verified via project docs (CONTEXT.md, CLAUDE.md, UI-SPEC.md) plus CDN registry checks
- Architecture: HIGH — file structure locked by UI-SPEC.md; patterns verified against official MDN/Google docs
- Pitfalls: HIGH — GitHub Pages .nojekyll and sticky overflow are documented failure modes from official sources

**Research date:** 2026-04-11
**Valid until:** 2026-07-11 (90 days — stable tech; Google Fonts and GitHub Pages APIs are stable)
