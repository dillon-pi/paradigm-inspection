# Features Research: Paradigm Inspection Website

## Table Stakes

Features every inspection website must have to be taken seriously.

| Feature | Description | Complexity |
|---------|-------------|------------|
| Persistent tap-to-call phone | Phone number visible in header on all scroll positions — critical for mobile | Low |
| Hero section with single CTA | Clear headline + one call-to-action above the fold | Low |
| All services named explicitly | Every service listed by name, including each specialty inspection type | Low |
| Service area by county name | "Palm Beach, Broward, Miami-Dade, Monroe" stated plainly — not just "South Florida" | Low |
| FL license number displayed | Inspector's state license number builds legal trust and is expected by savvy clients | Low |
| Named inspector with About section | Even a placeholder About section signals this is a real person, not a faceless company | Low |
| Mobile-responsive layout | Majority of local search traffic is mobile; non-responsive sites are immediately dismissed | Medium |
| Fast load / HTTPS | GitHub Pages provides HTTPS; page must load under 3s on mobile | Low |

## Differentiators

Features that set a new business apart, especially with no reviews yet.

| Feature | Description | Complexity |
|---------|-------------|------------|
| "How It Works" 3-step section | Simple copy-only section (Schedule → Inspect → Report) reassures first-time buyers | Low |
| South Florida expertise callout | Specific mention of local climate concerns (humidity, mold, hurricane straps) signals local knowledge | Low |
| Specialty services as named cards | Give each specialty service (mold, radon, pool, new construction) its own visible card — not buried in a list | Low |
| Availability / response time statement | A phrase like "Reports delivered within 24 hours" or "Same-week scheduling" is a strong trust signal | Low |
| Testimonials placeholder | Structured, ready-to-fill testimonial section — adds immediately once first reviews arrive | Low |
| Professional certification badge | InterNACHI or ASHI badge (if certified) adds instant third-party credibility | Low |
| Realtor callout paragraph | One paragraph addressing real estate agents as a referral source — high-value audience | Low |

## Anti-Features

Things to deliberately NOT build for v1.

| Feature | Reason to Exclude |
|---------|------------------|
| Online booking widget | Adds complexity (3rd party embed or backend); owner handles scheduling by phone for now |
| Blog / news section | No content to populate; an empty blog looks worse than no blog |
| Live chat | Requires ongoing attention; not appropriate for a one-person operation starting out |
| Pricing page | Inspection pricing varies by property size/type; better handled in a call |
| Photo gallery | No photos yet; empty gallery is a trust negative |
| Social media feed embeds | Slow-loading, requires active social presence, clutters the page |
| Google Maps iframe | Adds load time; service area counties callout is sufficient |
| Multi-page navigation | Single-page scroll site is simpler to build, maintain, and performs better for local SEO |
| Heavy JS animations / parallax | Hurts mobile performance and feels gimmicky for a trust-based service business |

## Section Structure Recommendation

Recommended section order for maximum trust and conversion:

1. **Header / Nav** — Logo, phone number (always visible), anchor links
2. **Hero** — Compelling headline, subheadline with service area, primary CTA button
3. **Services** — Cards for each service type (residential, commercial, specialty, new construction)
4. **How It Works** — 3-step process: Schedule → Inspect → Report
5. **About** — Inspector's story, credentials, license number, certification badge
6. **Service Area** — County map or simple list with South Florida context
7. **Testimonials** — Placeholder cards (ready for real reviews)
8. **Realtor Section** — Short paragraph/callout targeting real estate agents
9. **Contact** — Phone, email, social links; simple contact form (Formspree or mailto)
10. **Footer** — Logo, license number, copyright, social links
