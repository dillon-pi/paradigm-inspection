# How to Update Your Website

This guide walks you through setting up and personalizing your Paradigm Inspection website. You do NOT need to install any software. Everything is done in your web browser.

Follow each step in order. By the end, your site will be live at **paradigminspection.org** with all your real information in place.

---

## Before You Start

What you will need:

- A computer with a web browser (Chrome, Firefox, Safari, or Edge all work)
- An email address (for creating your free GitHub account)
- Login credentials for your domain registrar (the company where you purchased paradigminspection.org — for example GoDaddy, Namecheap, Google Domains, or similar)
- The website files provided to you (a folder containing index.html, styles.css, script.js, logo.jpg, and all other files)

---

## Step 1: Create a GitHub Account

GitHub is the free service that will host your website. You only need to do this once.

1. Open your web browser and go to **https://github.com**
2. Click the **Sign up** button in the top-right corner of the page
3. Enter your **email address** and click **Continue**
4. Create a **password** and click **Continue**
5. Choose a **username** (this will be part of your initial site URL — something like `paradigminspection` works well)
6. Click **Continue**
7. GitHub will send a verification email to the address you entered. Open that email and click the verification link.
8. On the "Welcome to GitHub" screen, you can skip the optional questions by scrolling to the bottom and clicking **Skip personalization**
9. When asked about a plan, choose the **Free** plan. GitHub Pages works on the free tier.

You now have a GitHub account.

---

## Step 2: Upload Your Website Files to GitHub

You will create a new repository (think of it as a folder on GitHub) and upload all your website files into it.

1. Make sure you are logged in to **https://github.com**
2. Click the **+** icon in the top-right corner of the page (next to your profile picture)
3. Click **New repository**
4. In the **Repository name** field, type: `paradigm-inspection`
5. Under visibility, make sure **Public** is selected (GitHub Pages requires a public repository on the free plan)
6. Do **NOT** check "Add a README file" or any other optional checkboxes
7. Click **Create repository**
8. On the next screen you will see a mostly empty page. Look for the text "uploading an existing file" and click it. (It is in the paragraph that begins "...or import code from another repository.")
9. A file upload area will appear. Drag and drop **all** of the website files from your folder onto this area. Wait for them all to show "Uploaded" status.
10. Scroll down to the **Commit changes** section. In the first text box (labeled "Commit changes" or "Add files via upload"), type: `Initial upload`
11. Click the green **Commit changes** button

All your files are now on GitHub.

---

## Step 3: Enable GitHub Pages

This step turns your GitHub repository into a live website.

1. On your repository page, click the **Settings** tab (it is in the row of tabs near the top: Code, Issues, Pull requests, Actions, **Settings**)
2. In the left sidebar, scroll down and click **Pages**
3. Under the heading **Build and deployment**, find the **Source** dropdown
4. Click the **Source** dropdown and select **Deploy from a branch**
5. Under **Branch**, click the first dropdown and select **main**
6. Click the second dropdown (next to the branch name) and select **/ (root)**
7. Click **Save**

Your site will be live at `https://YOUR-USERNAME.github.io/paradigm-inspection/` within 1 to 2 minutes. (Replace YOUR-USERNAME with the username you chose in Step 1.)

To check: wait 2 minutes, then open that URL in your browser. You should see your Paradigm Inspection website.

---

## Step 4: Connect Your Custom Domain (paradigminspection.org)

This step makes your site available at `https://paradigminspection.org` instead of the long github.io address. There are two parts.

### 4a. Add DNS Records at Your Domain Registrar

DNS records tell the internet where to find your website. You will add them at the company where you purchased your domain name.

1. Log in to your domain registrar's website (GoDaddy, Namecheap, Google Domains, etc.)
2. Find the **DNS settings** or **DNS management** area for `paradigminspection.org` (the exact menu name varies by registrar — look for "DNS", "Zone File", or "Manage DNS")
3. Add four **A records** pointing to GitHub's servers. For each one, set the **Host** (or Name) to `@` and the **Value** (or Points to) to the following IP addresses:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add one **CNAME record**:
   - **Host** (or Name): `www`
   - **Value** (or Points to): `YOUR-USERNAME.github.io` (replace YOUR-USERNAME with your actual GitHub username)
5. Save all DNS changes

DNS changes can take up to 24 hours to fully take effect, though they often work within an hour.

### 4b. Tell GitHub About Your Domain

1. Go back to your GitHub repository and click **Settings**
2. In the left sidebar, click **Pages**
3. Under **Custom domain**, type `paradigminspection.org` and click **Save**
4. GitHub will run a DNS check. A yellow spinner may appear while it checks. This can take a few minutes.
5. Once the check passes, check the box labeled **Enforce HTTPS** (this gives your visitors a secure padlock in their browser)

Your site is now live at **https://paradigminspection.org**.

---

## Step 5: Set Up Your Contact Form (Formspree)

The contact form on your website sends messages to your email. It uses a free service called Formspree.

1. Open a new browser tab and go to **https://formspree.io**
2. Click **Sign Up** (the free plan allows up to 50 form submissions per month, which is plenty to start)
3. Enter your email address and create a password, then verify your email
4. Once logged in, click **+ New Form**
5. Give the form a name (for example: `Paradigm Inspection Contact`)
6. Click **Create Form**
7. Formspree will show you an endpoint URL that looks like: `https://formspree.io/f/abcdef12`. The last part (`abcdef12`) is your **form ID**.
8. Copy that form ID

Now update your website:

1. Go to your GitHub repository and click on the file **index.html** to open it
2. Click the **pencil icon** (Edit this file) near the top-right of the file view
3. Press **Ctrl+F** (Windows) or **Cmd+F** (Mac) to open the browser's Find function
4. Search for `YOUR-FORMSPREE-ID`
5. You will find it on **line 307**: `action="https://formspree.io/f/[YOUR-FORMSPREE-ID]"`
6. Replace `[YOUR-FORMSPREE-ID]` (including the square brackets) with the form ID you copied from Formspree. Example result: `action="https://formspree.io/f/abcdef12"`
7. Scroll down, click **Commit changes**, confirm in the popup, and click **Commit changes** again

Your contact form is now connected. Test it after launch to make sure submissions arrive in your email.

---

## Step 6: Replace Your Contact Information

### How to Edit a File on GitHub

You will use this process for every file edit in the steps below:

1. In your repository, click the file name (for example, `index.html`)
2. Click the **pencil icon** labeled "Edit this file" in the top-right area of the file view
3. Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to find the placeholder text you want to replace
4. Click into the text, delete the placeholder (including the square brackets), and type your real information
5. When done, scroll to the bottom of the page and click **Commit changes**
6. In the popup that appears, click the green **Commit changes** button
7. Your change is saved and will be live on the website within 1 to 3 minutes

### Phone Number

Replace `[YOUR-PHONE]` with your actual phone number (format: `561-555-1234` without parentheses or spaces, since this is used in a `tel:` link). Also replace the display text `[YOUR PHONE NUMBER]` with how you want your number to appear to visitors (for example: `(561) 555-1234`).

Edit **index.html** and replace the phone placeholder in these locations:

- **Line 42** — Header phone link (desktop, top of page)
- **Line 52** — Mobile navigation phone link (appears in hamburger menu)
- **Line 74** — Hero section "Call Now" button
- **Line 196** — About section "Call Now" button
- **Line 286** — Contact section phone link
- **Line 335** — Footer phone link

That is 6 places in index.html. Also edit **404.html** (the page visitors see if they hit a broken link):

- **Line 21** — 404 header phone link
- **Line 31** — 404 mobile navigation phone link
- **Line 46** — 404 error page phone link

**Note:** If you add JSON-LD structured data to your site's `<head>` section later, there will also be a `telephone` field there to update.

### Email Address

Replace `[YOUR-EMAIL]` with your actual email address. Also replace the display text `[YOUR EMAIL ADDRESS]` with the same address (or a formatted version like `hello@paradigminspection.org`).

Edit **index.html** and replace the email placeholder in these locations:

- **Line 76** — Hero section "Send Email" button
- **Line 198** — About section "Send Email" button
- **Line 291** — Contact section email link
- **Line 337** — Footer email link

That is 4 places in index.html. As with phone, if you add JSON-LD later there is also an `email` field to update.

---

## Step 7: Add Your Personal Information

### Inspector Name

1. Open **index.html** for editing (pencil icon)
2. Find **line 176**: `<h3>[INSPECTOR NAME]</h3>`
3. Replace `[INSPECTOR NAME]` with your full name. Example: `<h3>James Rodriguez</h3>`
4. Commit the change

### Personal Bio

1. Find **line 181** in index.html. You will see a paragraph beginning with `[Write 2-3 sentences about yourself here...]`
2. Replace the entire bracketed paragraph with your real bio. Keep it to 2 to 3 sentences. Include your background, what drew you to home inspection, and a personal detail that builds connection (local roots, family, etc.)
3. Commit the change

### Headshot Photo

Your website has a placeholder box where your headshot will go. To replace it with your real photo:

1. Take a professional photo (or use an existing one). A head-and-shoulders portrait works best. Recommended size: 400 x 500 pixels.
2. Name the file `headshot.jpg` (or `headshot.png`)
3. In your GitHub repository, click **Add file** > **Upload files** and upload your photo
4. Commit the upload with a message like `Add headshot photo`
5. Open **index.html** for editing and find **lines 168 to 172**. You will see a `<div class="about-photo-placeholder">` block.
6. Replace that entire `<div>` block with: `<img src="headshot.jpg" alt="[Your Name], Licensed Home Inspector" class="about-photo">`
7. Replace `[Your Name]` with your actual name in the alt text
8. Commit the change

---

## Step 8: Add Your License Number

Your Florida Home Inspector license number appears in two places on the site.

1. Open **index.html** for editing
2. Find **line 184**: `Florida Licensed Home Inspector &mdash; License #[HI-XXXXX]`
3. Replace `[HI-XXXXX]` with your actual license number. Example: `HI-12345`
4. Find **line 352**: same license text in the footer
5. Replace `[HI-XXXXX]` there as well
6. Commit the change

The format is: `HI-` followed by your five-digit number.

---

## Step 9: Add Your Certification Badge

Once you receive your InterNACHI or ASHI certification, you can display the badge on your website.

1. Download the official badge image from **internachi.org** or **ashi.org** (check your member dashboard)
2. Upload the badge image to your GitHub repository (Add file > Upload files)
3. Open **index.html** and find **lines 188 to 192**. You will see a `<div class="cert-badge-placeholder">` block.
4. Replace that entire block with an image tag pointing to your badge file
5. Commit the change

If you are not yet certified, you can leave this placeholder in place — it is styled as a subtle placeholder and will not look broken to visitors.

---

## Step 10: Add Real Testimonials

Your website shows three review cards. Replace each one with a real review from Google or Yelp.

The review placeholders are at these lines in **index.html**:

- **Testimonial 1:** review text on line 249, reviewer name and date on line 250
- **Testimonial 2:** review text on line 255, reviewer name and date on line 256
- **Testimonial 3:** review text on line 261, reviewer name and date on line 262

For each review card:

1. Find the `[5-star Google review...]` placeholder text and replace it with the full review text copied directly from Google or Yelp
2. Replace `[REVIEWER NAME]` with the reviewer's first name (or first name + last initial, e.g., `Sarah M.`)
3. Replace `[MONTH YEAR]` with the date of the review (e.g., `March 2026`)

Also update the Google Business review link:

- Find **line 270**: `href="[YOUR_GOOGLE_BUSINESS_URL]"`
- Replace `[YOUR_GOOGLE_BUSINESS_URL]` with your Google Business Profile review link. To find it: log in to your Google Business Profile, go to Home, look for "Get more reviews", and copy the link shown there.

---

## Step 11: Add Social Media Links

### Instagram

Replace `[YOUR_INSTAGRAM_HANDLE]` (without the @ symbol) in two places:

- **Line 295** — Contact section Instagram link
- **Line 342** — Footer Instagram link

Example: if your handle is `@paradigminspectionfl`, replace `[YOUR_INSTAGRAM_HANDLE]` with `paradigminspectionfl`

### Facebook

Replace `[YOUR_FACEBOOK_PAGE]` with your Facebook page name or ID in two places:

- **Line 299** — Contact section Facebook link
- **Line 346** — Footer Facebook link

Example: if your Facebook page URL is `facebook.com/ParadigmInspectionFL`, replace `[YOUR_FACEBOOK_PAGE]` with `ParadigmInspectionFL`

---

## Step 12: Optional -- Replace the Social Sharing Image

When someone shares a link to your website on Facebook, iMessage, LinkedIn, or other platforms, a preview card appears. This card uses the image file `og-image.png` in your repository.

A default branded image (with the Paradigm Inspection name and your domain) was created for you as `og-image.svg`. An `og-image.png` export is needed for actual sharing (SVG is not supported by most social platforms).

To create or update the PNG:

1. Open `og-image.svg` in your browser (drag the file into any browser window)
2. Take a screenshot at full size, or use a free online tool like **Canva** or **Squoosh** to convert it
3. The image must be exactly **1200 x 630 pixels** and named `og-image.png`
4. Upload `og-image.png` to your repository root (alongside index.html)

If you later update your branding, you can edit `og-image.svg` (open it in any text editor or Inkscape), re-export it as `og-image.png`, and upload the new PNG.

---

## How Long Do Changes Take to Go Live?

After you commit a change on GitHub, the site updates within **1 to 3 minutes**.

If you do not see your change:

- **Force refresh:** Press **Ctrl+Shift+R** on Windows, or **Cmd+Shift+R** on Mac. This clears your browser's cached version of the page.
- Wait a full 3 minutes and try again
- Check that you clicked "Commit changes" and did not close the page before saving

DNS changes (when connecting your domain) can take up to **24 hours** to fully propagate. You may see the site at the github.io address before the custom domain resolves — that is normal.

---

## Need Help?

### Common Issues

**The placeholder still shows on the page:**
Make sure you replaced the entire placeholder including the square brackets. For example, replace `[YOUR-PHONE]` — the brackets are part of the placeholder and must be removed.

**The site says "Your repository is empty" or shows a 404:**
Check that GitHub Pages is enabled (Step 3) and that the branch is set to `main`. Go to Settings > Pages to verify.

**DNS is not connecting after 24 hours:**
Double-check that all four A records are entered correctly at your domain registrar and that the CNAME record for `www` points exactly to `YOUR-USERNAME.github.io`. Contact your domain registrar's support if needed.

**The contact form is not sending emails:**
Verify that you replaced `[YOUR-FORMSPREE-ID]` in index.html (line 307) with the correct form ID from your Formspree account. Make sure there are no extra spaces or characters around the ID.

**A change I committed is not showing:**
Confirm the commit was saved by going to your repository and checking that the file was modified recently (you will see a timestamp next to the file name). Then wait 3 minutes and force-refresh.

---

*This guide covers the initial launch. Keep this file for reference whenever you need to make future updates to your website.*
