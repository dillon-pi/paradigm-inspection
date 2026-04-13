# Launch Checklist -- Paradigm Inspection

Complete every checkbox before going live. Each item maps to a placeholder in the codebase that must be replaced with real content.

---

## Content Placeholders

### Phone Number

Replace `[YOUR-PHONE]` (in `tel:` links) and `[YOUR PHONE NUMBER]` (display text) everywhere below.

- [x] index.html line 80 -- header phone link (desktop top bar)
- [x] index.html line 90 -- mobile navigation phone link (hamburger menu)
- [x] index.html line 112 -- hero section "Call Now" button
- [x] index.html line 234 -- about section "Call Now" button
- [x] index.html line 324 -- contact section phone link
- [x] index.html line 373 -- footer phone link
- [x] index.html line 34 -- JSON-LD `telephone` field
- [x] 404.html line 21 -- 404 header phone link
- [x] 404.html line 31 -- 404 mobile navigation phone link
- [x] 404.html line 46 -- 404 error page phone link

### Email Address

Replace `[YOUR-EMAIL]` (in `mailto:` links) and `[YOUR EMAIL ADDRESS]` (display text) everywhere below.

- [x] index.html line 114 -- hero section "Send Email" button
- [x] index.html line 236 -- about section "Send Email" button
- [x] index.html line 329 -- contact section email link
- [x] index.html line 375 -- footer email link
- [x] index.html line 34 -- JSON-LD `email` field

### Inspector Identity

- [x] index.html line 214 -- replace `[INSPECTOR NAME]` with inspector's full name
- [ ] index.html line 219 -- replace bio placeholder paragraph with 2-3 sentence personal bio
- [ ] index.html line 206 -- replace photo placeholder `<div>` with real headshot `<img>` tag

### License Number

- [ ] index.html line 222 -- replace `[HI-XXXXX]` in about section with Florida HI license number (format: HI-12345)
- [ ] index.html line 390 -- replace `[HI-XXXXX]` in footer with same license number

### Certification Badge

- [ ] index.html line 226 -- replace `[YOUR CERTIFICATION BADGE]` placeholder div with InterNACHI or ASHI badge image, or remove the placeholder div if not yet certified

### Testimonials

Replace all three review cards with real Google or Yelp reviews.

- [ ] index.html line 287 -- testimonial 1: replace review text placeholder
- [ ] index.html line 288 -- testimonial 1: replace `[REVIEWER NAME]` with reviewer's first name
- [ ] index.html line 288 -- testimonial 1: replace `[MONTH YEAR]` with review date (e.g., March 2026)
- [ ] index.html line 293 -- testimonial 2: replace review text placeholder
- [ ] index.html line 294 -- testimonial 2: replace `[REVIEWER NAME]` with reviewer's first name
- [ ] index.html line 294 -- testimonial 2: replace `[MONTH YEAR]` with review date
- [ ] index.html line 299 -- testimonial 3: replace review text placeholder
- [ ] index.html line 300 -- testimonial 3: replace `[REVIEWER NAME]` with reviewer's first name
- [ ] index.html line 300 -- testimonial 3: replace `[MONTH YEAR]` with review date

### Google Business

- [ ] index.html line 308 -- replace `[YOUR_GOOGLE_BUSINESS_URL]` with Google Business Profile review link (find it at: Google Business Profile Manager > Home > Get more reviews > Share review form)

### Social Media

- [ ] index.html line 333 -- replace `[YOUR_INSTAGRAM_HANDLE]` in contact section (without @ symbol)
- [ ] index.html line 380 -- replace `[YOUR_INSTAGRAM_HANDLE]` in footer
- [ ] index.html line 337 -- replace `[YOUR_FACEBOOK_PAGE]` in contact section with Facebook page name or ID
- [ ] index.html line 384 -- replace `[YOUR_FACEBOOK_PAGE]` in footer

---

## Deployment

- [x] GitHub repository created at https://github.com/dillon-pi/paradigm-inspection (Public)
- [ ] All website files uploaded to repository and committed
- [ ] GitHub Pages enabled (Settings > Pages > Source: Deploy from a branch > main / root > Save)
- [x] `.nojekyll` file present at repo root (prevents GitHub from processing the site with Jekyll)
- [x] `CNAME` file present at repo root (contains exactly: `paradigminspection.org`)
- [ ] DNS A records added at domain registrar -- all four IP addresses:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- [ ] DNS CNAME record added for `www` subdomain pointing to `dillon-pi.github.io`
- [ ] Custom domain entered in GitHub Pages settings (Settings > Pages > Custom domain > `paradigminspection.org`)
- [ ] "Enforce HTTPS" checkbox checked in GitHub Pages settings (available after DNS check passes)
- [ ] `og-image.png` exists at repo root -- export from `og-image.svg` (must be 1200x630 px PNG; SVG is not supported by Facebook, Twitter/X, or iMessage for social preview cards -- see D-07)

---

## Third-Party Setup

### Formspree (Contact Form)

- [ ] Formspree account created at formspree.io (free plan)
- [ ] New form created in Formspree dashboard (name it: Paradigm Inspection Contact)
- [x] `[YOUR-FORMSPREE-ID]` replaced in index.html line 345 with the form ID from Formspree (the part after `/f/` in the endpoint URL)

---

## Post-Launch Verification

- [ ] Site loads at `https://paradigminspection.org` with no errors
- [ ] Site loads at `https://www.paradigminspection.org` (should redirect to apex domain)
- [ ] Contact form test -- fill out and submit the form, verify message arrives in your email inbox
- [ ] Social share preview -- paste `https://paradigminspection.org` into **https://www.opengraph.xyz** and confirm the preview card shows the correct title, description, and og-image.png thumbnail
- [ ] Favicon visible -- confirm the Paradigm Inspection icon appears in the browser tab
- [ ] Mobile responsive check -- open the site on a mobile phone and verify the layout looks correct and the hamburger menu works
- [ ] Phone tap-to-call test -- on a mobile device, tap the phone number link and confirm it dials
- [ ] Email link test -- tap or click the email link and confirm it opens an email compose window with the correct address
- [ ] Search page for visible `[BRACKETED]` text -- press Ctrl+F (or Cmd+F) and search for `[` to confirm no placeholder brackets are still visible to visitors
