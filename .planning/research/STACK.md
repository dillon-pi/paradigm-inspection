# Stack Research: Paradigm Inspection Website

**Project:** Paradigm Inspection — static marketing website
**Researched:** 2026-04-09

---

## Recommended Stack

### Core

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| HTML5 | — | Page structure | Native, zero dependency, GitHub Pages serves it directly. Semantic elements improve accessibility and SEO at no cost. |
| CSS Custom Properties | — | Design tokens (colors, spacing, type scale) | CSS variables make brand color swaps trivial. No preprocessor needed. |
| Vanilla JavaScript (ES2020+) | — | Mobile nav toggle, smooth scroll, scroll-reveal init | No interactive state beyond a hamburger menu. Vanilla JS handles this in under 50 lines. Zero runtime overhead. |

No build tool, no bundler, no npm. The owner can open index.html in a browser to preview changes, and GitHub Pages serves the files as-is.

---

### Styling

**Recommendation: Hand-written CSS with CSS Custom Properties. No utility framework.**

Tailwind CSS requires a build step for the production-purged version, or you must load the 3 MB Play CDN — both are wrong for this project. The Play CDN is officially labeled "not for production." For a single-page static brochure site, 200–400 lines of authored CSS outperforms any framework in file size, readability, and maintainability.

Bootstrap imports ~25 KB of JavaScript and ~150 KB of CSS and forces its own aesthetic. The brand (black, cream, warm orange) would fight Bootstrap's defaults.

**CSS architecture:**

```
style.css
├── :root { /* custom properties: colors, font sizes, spacing scale */ }
├── Reset / base (box-sizing, margin, font-family)
├── Typography scale
├── Layout utilities (container, flex/grid helpers)
├── Component sections (hero, about, services, service-area, contact)
└── Responsive breakpoints (mobile-first, one or two breakpoints)
```

Target total CSS file size: under 15 KB uncompressed.

---

### Fonts & Icons

#### Fonts

**Recommendation: Google Fonts — "Playfair Display" (headings) + "Inter" (body)**

- **Playfair Display** — High-contrast serif with editorial warmth. Used for section headings and the hero headline. Signals quality and professionalism. Pairs naturally with the cream background. Weights: 400, 700.
- **Inter** — Neutral, highly legible sans-serif optimized for screens. Used for all body text, nav links, labels, and CTA buttons. Weights: 400, 500, 600.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

#### Icons

**Recommendation: Lucide Icons via CDN (ESM) — successor to Feather Icons**

Icons needed: phone, mail, map-pin, home, building, shield-check, search, chevron-down.

```html
<script type="module">
  import { createIcons, icons } from 'https://cdn.jsdelivr.net/npm/lucide@latest/dist/esm/lucide.js';
  createIcons({ icons });
</script>
```

Usage: `<i data-lucide="phone"></i>` — renders inline SVG, inherits CSS color.

---

### Animation / Interactions

**Recommendation: AOS (Animate On Scroll) 2.3.4 via CDN for scroll reveals. CSS transitions for hover states.**

AOS uses `data-aos` HTML attributes — no JavaScript authoring required beyond a one-time `AOS.init()` call. A non-technical owner who edits HTML can add `data-aos="fade-up"` to any element without touching JavaScript.

```html
<!-- In <head> -->
<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">

<!-- Before </body> -->
<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>
<script>
  AOS.init({ duration: 600, once: true, offset: 60 });
</script>
```

**Smooth scroll:** Native CSS — `html { scroll-behavior: smooth; }` — no JavaScript needed.

**Hover states:** CSS transitions only: `transition: background-color 0.2s ease, transform 0.15s ease;`

---

### Deployment

| Layer | Tool | Why |
|-------|------|-----|
| Hosting | GitHub Pages | Free, zero ops burden |
| Custom domain | CNAME file in repo root | GitHub Pages supports apex and www subdomains |
| HTTPS | Automatic | GitHub Pages enforces HTTPS with Let's Encrypt |
| CI/CD | None needed | Push to `main` branch auto-deploys |
| Image optimization | Squoosh.app (free browser tool) | Owner can compress photos to WebP without installing software |

**Critical:** Add a `.nojekyll` file to the repo root. GitHub Pages auto-runs Jekyll unless this empty file is present — Jekyll can break files with underscores in the name.

**Repository structure:**
```
paradigm_inspection/
├── index.html
├── style.css
├── main.js
├── .nojekyll
├── CNAME              ← if custom domain used
└── assets/
    ├── logo.jpg
    └── images/
```

---

## What NOT to Use

| Tool | Reason to Avoid |
|------|-----------------|
| React / Vue / Svelte | Requires a build step. A brochure site has no component-reuse problem worth solving. |
| Next.js / Nuxt | Generates server-side functions GitHub Pages cannot run. Wrong deployment target. |
| Tailwind CSS (Play CDN) | Tailwind's own docs label Play CDN "not for production." Build version requires Node.js. |
| Bootstrap | 150 KB+ of opinionated CSS that fights the black/cream/orange palette. |
| jQuery | No DOM complexity. Mobile nav toggle is 10 lines of vanilla JS. jQuery adds 87 KB for zero benefit. |
| GSAP | Overkill for scroll-reveal on a brochure site. AOS does the job at 1/10th the complexity. |
| Font Awesome | Requires account registration for CDN kit. Lucide is a direct, better replacement. |
| Google Analytics (GA4) | Requires a cookie consent banner under CCPA. Skip in v1 or use Plausible (privacy-first). |

---

## Confidence Levels

| Choice | Confidence | Notes |
|--------|-----------|-------|
| Vanilla HTML/CSS/JS | HIGH | Canonical answer given the constraints |
| No Tailwind / No Bootstrap | HIGH | Tailwind Play CDN is explicitly not-for-production per Tailwind's docs |
| Playfair Display + Inter | MEDIUM | Well-established pairing for service industry sites |
| Lucide Icons | MEDIUM | Stable; verify current version at jsdelivr.com before use |
| AOS 2.3.4 | MEDIUM | Last major release 2021, widely used — check unpkg.com/aos for newer versions |
| GitHub Pages + .nojekyll | HIGH | Official GitHub documentation |
