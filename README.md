# UUMF — First Unitarian Universalist Church of San Diego Men's Fellowship

A multi-page static website and internal handbook for the Men's Fellowship of the First Unitarian Universalist Church of San Diego. The site serves as a public-facing presence and practical resource for fellowship members and newcomers.

---

## Overview

The UUMF website is a static site built with plain HTML, CSS, and JavaScript — no build tools, frameworks, or server required. Each page links to shared CSS and JS from the `assets/` directory. Navigation and footer are loaded via shared HTML partials.

> **Local Preview Note:** The shared nav/footer partials load via `fetch()`, which does NOT work when opening HTML files directly as `file://` URLs in Chrome. Use a local server for previewing:
> ```
> npx serve .
> ```
> or
> ```
> python3 -m http.server
> ```
> Then open `http://localhost:3000` (or `:8000`) in your browser.

---

## File Structure

```
uumf/
├── index.html              ← Homepage (portal with hero + navigation tiles)
├── about.html              ← Mission, values, leadership
├── gatherings.html         ← Fourth Mondays, Banquet, Yule Log, 2026 dates
├── renewals.html           ← Spring (San Diego) + Fall (Southern California) retreats
├── handbook.html           ← Chants, songs, poems, norms & traditions
├── focus-groups.html       ← Small support groups (5–8 men)
├── connecting.html         ← How to join, Reciprocity Ring, FAQ, contacts
├── donate.html             ← Potluck fund, members in need, activities fund
├── history.html            ← Organization history (placeholder — add content)
│
├── assets/
│   ├── css/
│   │   └── styles.css      ← All shared CSS (colors, components, layout)
│   ├── js/
│   │   ├── components.js   ← Scroll-reveal, nav toggle, song accordion, partial loader
│   │   └── chants-data.js  ← Chant data array (edit chant lyrics here)
│   └── partials/
│       ├── nav.html        ← Shared navigation (edit nav links here)
│       └── footer.html     ← Shared footer (edit footer links here)
│
└── README.md               ← This file
```

---

## Site Pages

| Page | File | Key Content |
|---|---|---|
| **Homepage** | `index.html` | Hero, next gathering callout, portal tiles |
| **About** | `about.html` | Mission statement, core values, leadership cards |
| **Gatherings** | `gatherings.html` | Fourth Monday structure, Banquet, Yule Log, 2026 date grid |
| **Renewals** | `renewals.html` | Spring (SD) + Fall (SoCal) retreat details |
| **Handbook** | `handbook.html` | Norms, 15 chants (modal), 7 songs (accordion), poems |
| **Focus Groups** | `focus-groups.html` | What they are, how they work, how to join |
| **Connect** | `connecting.html` | How to join, Reciprocity Ring, FAQ, contact info |
| **Donate** | `donate.html` | Potluck fund, members in need, activities fund, payment links |
| **History** | `history.html` | Placeholder — leadership to fill with founding story |

---

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, flexbox/grid, animations, fluid typography
- **JavaScript (Vanilla)** — Scroll-reveal, modal, accordion, nav toggle, partial fetch
- **Google Fonts** — Playfair Display, Crimson Pro, Bebas Neue

### Design Tokens (in `assets/css/styles.css`)

| Variable | Value | Use |
|---|---|---|
| `--burnt` | `#C1440E` | Primary brand color |
| `--gold` | `#C4952A` | Accent / labels |
| `--parch` | `#F5ECD7` | Light backgrounds, text on dark |
| `--ink` | `#1a0f05` | Dark background, body text |
| `--smoke` | `#f9f4ec` | Page background |

---

## Editing Guide

### Update Navigation Links
Edit `assets/partials/nav.html` — changes apply to every page automatically.

### Update Footer Links
Edit `assets/partials/footer.html` — changes apply to every page automatically.

### Update Chant Lyrics
Edit the `chants` array in `assets/js/chants-data.js`. Each entry has:
- `num` — chant number
- `title` — chant name
- `preview` — first line shown on the card
- `lyrics` — full lyrics shown in the modal (use `\n` for line breaks)
- `note` — performance note shown below lyrics (leave `""` if none)

### Update Meeting Dates
Open `gatherings.html`, find the `<!-- EDIT: UPCOMING DATES -->` comment, and update the date cards. To mark a date as past, add `style="opacity:0.4;"` to the `.date-card` div.

### Update Leadership
Open `about.html` and `connecting.html`. Find the `<!-- EDIT: LEADERSHIP CARDS -->` comments and update names, roles, and contact notes.

### Update Renewal Weekend Details
Open `renewals.html`. Each renewal has a `<!-- EDIT: SPRING/FALL RENEWAL -->` comment. Update dates, location, and cost when confirmed with Mike Dorfi.

### Update Donation Links
Open `donate.html`. Find the `<!-- EDIT: PAYMENT LINKS -->` comment. Replace the `href="#"` placeholders with:
- PayPal.me link: `https://paypal.me/[your-handle]/25`
- Venmo link: `https://venmo.com/[your-handle]`
- Google Form link for designated giving

### Add to History
Open `history.html`. The placeholder sections have `<!-- EDIT: HISTORY CONTENT -->` comments. Replace the italic placeholder text with real content from founding members.

### Update Next Gathering (Homepage)
Open `index.html`. Find the `<!-- EDIT: NEXT GATHERING -->` comment and update the date and detail text each month.

---

## Adding a New Page

1. Copy the structure from any existing page (e.g., `about.html`)
2. Update the `<title>` and `<meta name="description">`
3. Replace the page content between the page hero and footer placeholder
4. Add a link to the new page in `assets/partials/nav.html` and `assets/partials/footer.html`
5. Add a portal tile for it in `index.html` if it's a major section

---

## Location

Meetings are held at the **Hillcrest Campus, Common Room**
First Unitarian Universalist Church of San Diego
Fourth Mondays — Potluck 6pm · Discussion 7–9pm

---

## Credits

Created by Bryan Lane, February 2026.
Multi-page redesign completed March 2026.
