# Architecture Research: Paradigm Inspection Website

**Project:** Paradigm Inspection — static marketing website
**Researched:** 2026-04-09

---

## Structure Decision: Single-Page vs Multi-Page

**Recommendation: Single-page (SPA-style scroll) with anchor navigation.**

| Factor | Single-Page | Multi-Page |
|--------|-------------|------------|
| Build complexity | Low — one file | Medium — multiple HTML files with repeated nav/footer |
| Local SEO | Good — one authoritative URL with all content | Better if targeting separate keyword pages (not needed for v1) |
| Maintenance | Easy — owner edits one file | Harder — changes to nav/footer must be replicated |
| Mobile UX | Smooth scrolling feels native | Page reloads feel abrupt on mobile |
| GitHub Pages | No routing issues | Works, but no server-side redirects for 404 handling |

For a new local service business with no blog and a single set of services, a single-page site is the correct choice. It keeps all trust signals on one page (social proof, services, about, contact all visible in one scroll journey), and it's trivially maintainable by a non-technical owner.

---

## Recommended File Structure

```
paradigm_inspection/
├── index.html           ← entire site lives here
├── style.css            ← all styles
├── main.js              ← nav toggle, AOS init, minor interactions
├── .nojekyll            ← disables Jekyll processing on GitHub Pages
├── CNAME                ← custom domain (add when ready)
└── assets/
    ├── logo.jpg         ← existing logo file
    └── images/
        ├── hero-bg.jpg  ← placeholder; owner replaces
        └── inspector.jpg ← placeholder headshot; owner replaces
```

Keep it flat. No subdirectories beyond `assets/`. The simpler the structure, the easier it is for a non-technical owner to find and replace files.

---

## Component Breakdown

Each section maps to a `<section>` element in `index.html` with a matching `id` for anchor navigation.

| Section | ID | Purpose |
|---------|-----|---------|
| Navigation | `#top` | Fixed/sticky header with logo, phone CTA, hamburger on mobile |
| Hero | `#hero` | Full-viewport headline, subheadline, dual CTA buttons (Call / Email) |
| Services | `#services` | Card grid — 4 service types, each with icon and short description |
| How It Works | `#process` | 3-step numbered process (Schedule → Inspect → Report) |
| About | `#about` | Inspector photo placeholder, bio, license number, certification badge |
| Service Area | `#service-area` | County list with brief South Florida context copy |
| Testimonials | `#testimonials` | 3 placeholder review cards — ready for real content |
| Realtor CTA | `#realtors` | Short callout targeting real estate agents |
| Contact | `#contact` | Phone, email, social links; optional Formspree form |
| Footer | — | Logo, license number, copyright, social icons |

---

## SEO for Local Business Static Sites

Local SEO is critical for a home inspection company — most leads come from Google searches like "home inspector Palm Beach County."

### On-Page SEO

```html
<title>Paradigm Inspection | Home Inspection Services — South Florida</title>
<meta name="description" content="Professional home inspection services in Palm Beach, Broward, Miami-Dade, and Monroe counties. Residential, commercial, specialty, and new construction inspections.">
<meta name="keywords" content="home inspection, South Florida, Palm Beach, Broward, Miami-Dade, Monroe County, home inspector">
```

### Local Business Schema Markup

Include JSON-LD structured data in `<head>` — this is the single highest-impact SEO addition for a local business:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Paradigm Inspection",
  "description": "Professional home inspection services in South Florida",
  "areaServed": ["Palm Beach County", "Broward County", "Miami-Dade County", "Monroe County"],
  "serviceType": ["Home Inspection", "Commercial Inspection", "Mold Inspection", "New Construction Inspection"],
  "telephone": "[PHONE]",
  "email": "[EMAIL]",
  "url": "[SITE URL]"
}
</script>
```

### Additional SEO Wins

- Use `<h1>` only once (the hero headline)
- Use `<h2>` for each section heading
- Add `alt` text to all images (especially the logo and inspector photo)
- Add `rel="canonical"` to prevent GitHub Pages www/non-www duplicate content
- Use descriptive anchor text in nav links (not "click here")

---

## Contact Form Without a Backend

GitHub Pages cannot run server-side code, so a contact form requires a third-party service.

**Recommendation: Start with mailto link + phone. Add Formspree if form is requested in a future phase.**

### v1: No form — just links

```html
<a href="tel:+1XXXXXXXXXX" class="btn btn-primary">Call Now</a>
<a href="mailto:info@paradigminspection.com" class="btn btn-secondary">Send Email</a>
```

This is lowest friction and highest reliability. No third-party dependency, no form spam, no setup.

### v2 option: Formspree (if owner wants a contact form)

Formspree provides a form endpoint that emails submissions to the owner. Free tier: 50 submissions/month.

```html
<form action="https://formspree.io/f/[FORM_ID]" method="POST">
  <input type="text" name="name" placeholder="Your Name" required>
  <input type="email" name="email" placeholder="Your Email" required>
  <textarea name="message" placeholder="Tell me about your property..."></textarea>
  <button type="submit">Send Message</button>
</form>
```

---

## Mobile-First Implementation Notes

- Navigation collapses to hamburger at ≤768px breakpoint
- Phone number in header is always a `<a href="tel:...">` — tap-to-call on mobile
- Hero CTA buttons stack vertically on mobile (flex-direction: column)
- Service cards go from 2-column grid to 1-column on mobile
- Touch targets minimum 44×44px (WCAG 2.1 requirement)
- Font sizes: body minimum 16px, never smaller on mobile

---

## Phase Build Order (Implication for Roadmap)

The single-file architecture means the site can be built in a small number of sequential phases:

1. **Foundation** — HTML skeleton with all sections stubbed, CSS variables/reset, .nojekyll, basic nav
2. **Content sections** — Hero, Services, How It Works, About, Service Area, Testimonials, Contact copy
3. **Visual polish** — Typography, colors, spacing, responsive layout, hover states, AOS animations
4. **Assets & deployment** — Logo integration, image placeholders, GitHub Pages setup, schema markup
