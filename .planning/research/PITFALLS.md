# Pitfalls Research: Paradigm Inspection Website

**Domain:** Static local service business website (home inspection)
**Researched:** 2026-04-09

---

## Design Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Stock photo inspector who isn't the owner | Use a clearly labeled placeholder ("YOUR PHOTO HERE") instead of stock. A single real headshot is the highest-ROI content investment. |
| Generic headline that names the category instead of the value | Lead with trust: "South Florida's Detail-Obsessed Home Inspector" — not "Professional Home Inspection Services." |
| CTA button that says "Learn More" | Primary CTA: "Call Now — [Phone Number]" or "Request an Inspection." Phone number must be a `tel:` link visible without scrolling on mobile. |
| Brand colors diluted by adding a fourth color | Stick to exactly three: black (#0A0A0A), cream (#F5EDD6), orange (#E07A2F). Orange is accent-only. |
| Equal-weight card layout buries primary service | Lead with Residential Inspections prominently. Group specialty under a secondary area. |
| No visual hierarchy on mobile | Design mobile-first. Test at 390px before anything else — that is where realtors forward the link. |
| Footer as a dead end | Footer must include: phone (tel: link), email, service area, license badge, and a repeat CTA. |
| Overuse of orange | Orange on one primary CTA button per viewport, one accent element max. Everything else: black or cream. |

---

## Technical Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| GitHub Pages sub-path breaks absolute paths | Use relative paths (`./images/logo.png`) everywhere, OR use a custom domain. Document the convention in a comment at the top of `index.html`. |
| Missing `CNAME` file resets custom domain on every push | Create a `CNAME` file in the repo root with the bare domain (e.g., `paradigminspection.com`). Commit it. Never delete it. |
| HTTPS "not secure" on custom domain | After adding CNAME and pointing DNS to GitHub's IPs (185.199.108–111.153.153), wait up to 24 hours, then enable "Enforce HTTPS" in Pages settings. |
| Mixed content errors after enabling HTTPS | Audit all external URLs. Change every `http://` to `https://`. |
| Large unoptimized hero image causes slow first paint | Compress hero images to under 150 KB. Use `loading="lazy"` on below-the-fold images. Set explicit `width` and `height` attributes to prevent layout shift. |
| Missing `meta viewport` tag | `<meta name="viewport" content="width=device-width, initial-scale=1">` must be in every `<head>`. |
| GitHub Pages CDN caching delays | Add cache-busting query strings to CSS/JS references when deploying updates (e.g., `style.css?v=2`). |
| No custom 404 page | Create a minimal `404.html` with site navigation, brand colors, and links back to home and phone number. |
| `tel:` links with spaces or dashes break on Android | Format as `tel:+15551234567` — no spaces or dashes. Test on both iOS Safari and Android Chrome. |
| No favicon | Generate a favicon from the logo mark. Use a multi-size `.ico` or set of PNGs with appropriate `<link rel="icon">` tags. |

---

## Content Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Placeholder text shipped to production | Before launch, search the codebase for "lorem", "placeholder", "TODO", "your name", "your phone", and "[". |
| No phone number above the fold | Phone in the header navigation, always visible. Repeated in the hero section and footer. |
| About section describes the business instead of the person | Frame Around the inspector: their background, why they got into the field, what they notice that others miss. |
| No credentials or license information | Reserve a "Credentials" area in About. Placeholder: "Florida Licensed Home Inspector — License #[HI-XXXXX]". |
| Service descriptions list tasks instead of benefits | Pair each service with a benefit: "Roof Inspection — Know if you're inheriting a $20,000 problem before you close." |
| Missing service area specificity | List specific cities per county — Boca Raton, Delray Beach, Fort Lauderdale, Miami, Key West, etc. |
| No social proof when testimonials aren't available | Use a structured placeholder section with bracketed prompts — signals to owner exactly what's needed. |
| No CTA after each section | Every section ends with a button or inline link pointing to contact or directly dialing the phone. |
| Contact form that silently does nothing | For v1, skip the form and use direct phone/email links. GitHub Pages has no server-side handler. |

---

## Local SEO Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Missing LocalBusiness schema markup | Add JSON-LD in `<head>` with `@type: "HomeAndConstructionBusiness"`, `name`, `telephone`, `areaServed`, `url`. |
| NAP inconsistency across the web | Pick canonical format: "Paradigm Inspection" everywhere — website, GBP, Yelp, directories. Document it. |
| No Google Business Profile connection | Add a "Review us on Google" link in the footer. Remind owner to claim and complete GBP listing at launch. |
| Page title not optimized for local intent | Title: "Paradigm Inspection — Licensed Home Inspector \| Palm Beach, Broward & Miami-Dade" |
| No location signals in headings | Include county and city names naturally in `<h2>` headings and body copy. |
| Images with no alt text | Every `<img>` gets descriptive, locally-relevant alt text. Logo: `alt="Paradigm Inspection logo — South Florida home inspector"`. |
| No canonical URL tag | Add `<link rel="canonical" href="https://[domain]/">`. Enforce HTTPS and consistent www/non-www at DNS level. |
| Missing Open Graph tags | Add `og:title`, `og:description`, `og:image` (1200x630px), `og:url` — realtors share links on Facebook/text. |
| Page speed below Core Web Vitals thresholds | Target LCP under 2.5 seconds. No render-blocking CSS. No JavaScript in `<head>` without `async`/`defer`. Verify with PageSpeed Insights. |

---

## Client Handoff Pitfalls

| Pitfall | Mitigation |
|---------|------------|
| Owner can't find what to edit | Add HTML comments before every editable section: `<!-- ======== EDIT THIS: Replace with your real bio ======== -->` |
| Phone number buried in raw HTML | Put frequently changed content in a small `config.js`: `const PHONE = "555-123-4567"`. One file to edit. |
| No documented update process | Write a plain-English `HOW-TO-UPDATE.md`: editing on GitHub.com in the browser, what section is where, propagation time (~10 min). |
| Photos added at full resolution | Document expected image sizes. Recommend Squoosh.app. Add a comment near each `<img>` specifying target dimensions and file size. |
| Social links remain `href="#"` forever | Use obviously fake placeholder URLs: `href="https://instagram.com/YOUR_HANDLE_HERE"` — impossible to miss. |
| Owner locked out of their own repo | Repo must be owned by or transferred to the owner's GitHub account before launch. |
| No launch checklist handed to owner | Create `LAUNCH-CHECKLIST.md`: every placeholder enumerated with checkboxes. |
| Credentials section left blank at launch | Make license number a hard-stop on the launch checklist. Site should not go live until it's filled in. |

---

## Phase-Specific Warnings

| Phase | Pitfall | Mitigation |
|-------|---------|------------|
| HTML scaffold | Absolute paths breaking on GitHub Pages sub-path | Use relative paths from day one |
| Hero section | Committing to a stock photo that never gets replaced | Use CSS gradient or solid-color hero — real photo is an enhancement |
| Contact section | Building a `<form>` that silently fails on GitHub Pages | Use `tel:` and `mailto:` links for v1 |
| About / Credentials | Launching with "License #[PLACEHOLDER]" visible | Gate launch on credentials being filled in |
| SEO | Forgetting page title beyond the default | Title and meta description are day-one requirements |
| Images | Owner uploading 4MB photos | Pre-size `<img>` tags with comments specifying target file size |
| Social links | `href="#"` for undefined profiles | Use obviously wrong placeholder URLs |
| Custom domain | Forgetting `CNAME` file | Commit `CNAME` in the first push, alongside `index.html` |
