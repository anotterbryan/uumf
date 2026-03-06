# UUMF — First Unitarian Universalist Church of San Diego Men's Fellowship

A single-page website and internal handbook for the Men's Fellowship of the First Unitarian Universalist Church of San Diego. The site serves as a public-facing presence and a practical resource for fellowship members, covering community activities, chants, songs, poems, support groups, and organizational contacts.

---

## Overview

The UUMF website is a self-contained static site built with plain HTML, CSS, and JavaScript — no build tools, frameworks, or server required. It is designed to be easily editable by non-technical content managers through clearly labeled HTML comments throughout the file.

---

## Site Sections

| Section | Description |
|---|---|
| **Hero** | Landing area with mission statement and call-to-action |
| **About** | Fellowship values: compassion, integrity, responsibility, and balance |
| **Meetings** | Meeting schedule (Fourth Mondays), annual events, and special gatherings |
| **Chants** | 15 community chants with full lyrics and performance notes, viewable via modal |
| **Songs** | Hymns and songs used at gatherings, with expandable accordion lyrics |
| **Poems** | Readings and poems used at gatherings and renewal events |
| **Reciprocity Ring** | Member needs and offerings, powered by an embedded Google Sheet |
| **Support Groups** | Information on small-group (5–8 person) long-term community groups |
| **Upcoming Dates** | 2026 event calendar including Fourth Monday meetings and special events |
| **Leadership** | Steering committee members and contact information |

---

## Tech Stack

- **HTML5** — Semantic markup with accessibility considerations
- **CSS3** — Embedded styles using custom properties, flexbox/grid, animations, and fluid typography via `clamp()`
- **JavaScript (Vanilla)** — Intersection Observer for scroll-reveal, modal system, accordion toggles, and mobile navigation
- **Google Fonts** — Playfair Display, Crimson Pro, Bebas Neue
- **Google Sheets** — Embedded iframe for the Reciprocity Ring section

### Design

- **Color palette:** Burnt orange (`#C1440E`), gold (`#C4952A`), parchment (`#F5ECD7`), ink (`#1a0f05`)
- **Responsive:** Mobile-first layout with hamburger navigation toggle
- **No external dependencies** beyond Google Fonts

---

## File Structure

```
uumf/
├── index.html    # Complete website — markup, styles, and scripts in one file
└── README.md     # This file
```

---

## Editing the Site

All content lives in `index.html`. HTML comments throughout the file mark editable sections for leadership info, event dates, chant lyrics, songs, poems, and more.

To update content:
1. Open `index.html` in any text editor
2. Find the section you want to edit (use the comment markers or search for section headings)
3. Save and open in a browser to preview

No build step or local server is needed.

---

## Location

Meetings are held at the **Hillcrest Campus, Common Room**
Fourth Mondays, 7–9 PM (potluck + discussion)

---

## Credits

Created by Bryan Lane, February 2026.
