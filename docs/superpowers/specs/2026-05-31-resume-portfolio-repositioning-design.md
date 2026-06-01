# Design: Reposition onegoodcoder.com as a Resume/Portfolio Site

**Date:** 2026-05-31
**Status:** Approved
**Author:** Derrick Dedmon (BeardedGM) with Claude

## Goal

Reposition onegoodcoder.com from a contact-driven / lead-generation site into a
resume/portfolio website that presents Derrick Dedmon as a professional profile
for job applications, networking, portfolio sharing, and general professional
credibility. Emphasis on resume content, selected work, experience, and
professional positioning — not sales language or inquiry flows.

## Decisions (resolved during brainstorming)

| Decision | Choice |
| --- | --- |
| Site architecture | **Single-page** with anchor-link nav (unchanged from today). No build system, GitHub Pages. |
| "Resume" nav item | **Print / Save-as-PDF view** — triggers `window.print()`, using a polished print stylesheet. No PDF file to maintain. |
| Skills / Education / Publications sections | **Keep all** as on-page content; not promoted to top-level nav items. |
| Contact links | **LinkedIn + GitHub only.** No public email. No form. |

## Out of Scope

- No multi-page split (no per-section HTML files).
- No new portfolio projects or images.
- No PDF resume file in the repo (print view replaces it).
- No public email address anywhere on the site.
- No redesign of the visual aesthetic (warm editorial palette/type stays).

## Detailed Changes

### 1. Positioning & removals

Shift framing from contact/lead-gen to profile-first. Remove:

- The entire `#contact` section: heading "Let's Work Together", the
  "Have a project in mind?" sales copy, contact info block, and the Formspree
  `<form>`.
- The nav "Get In Touch" CTA button.
- The hero "Get In Touch" button.
- `main.js` `initContactForm()` function and its call in `init()`.
- The Formspree dependency (no longer referenced anywhere).

### 2. Navigation (single-page anchor nav)

Logo `DERRICK DEDMON` unchanged. Nav links become:

| Nav item | Target |
| --- | --- |
| Home | `#top` (hero) |
| Experience | `#experience` |
| Projects | `#projects` (renamed from `#portfolio`) |
| About | `#about` |
| Résumé | primary button → `window.print()` (not an anchor) |

Skills, Education, Publications remain as page sections but are not top-level
nav items. Nav stays at 5 items.

### 3. Home / Hero

Make name + title explicit and lead with profile language:

- Eyebrow: `Derrick Dedmon`
- H1: `Director of Communications & Creative Strategist`
- Subtitle: concise positioning statement — communications leadership, digital
  strategy, brand management, and 25+ years of web/creative experience.
  No sales language.
- Actions: `View Projects` (outline → `#projects`) + `Résumé` (primary → print),
  followed by small LinkedIn · GitHub text links beneath the buttons. The old
  "Get In Touch" button is removed.

### 4. Experience — priority correction

Keep the timeline layout. Recent roles keep the most detail; oldest roles stay
condensed (1 bullet).

**The Woodlands Methodist Church — Director of Communications (current role):**
replace existing bullets verbatim with the approved set. Remove all references
to **video oversight** and **print oversight**; scope is website + RockRMS
database + social media.

Approved bullets:

- Lead digital strategy and brand management for a 10,000+ member congregation,
  with direct oversight of the website ecosystem, RockRMS database, and social
  media presence.
- Manage communications operations, vendor relationships, and digital workflows
  while aligning platforms, messaging, and audience engagement with
  organizational goals.
- Apply more than two decades of web development and creative leadership
  experience to improve systems, strengthen execution, and support effective
  digital communication.

Other roles where print/video was genuinely the job (Creative Director, Senior
Art Director, Senior Graphic Designer, Graphic Designer) keep that history —
accurate in those contexts. No changes there beyond optional light tightening.

### 5. Projects

Rename section heading and nav to **Projects**; rename section `id` from
`portfolio` to `projects`. Keep the 6 project cards and their detail modals.
Reframe modal copy to emphasize role / scope / outcome rather than
client-pitch language. No new images or projects.

### 6. Sections kept (light touch)

About (with stat counters), Skills, Education, and Publications/Recognition all
remain. About and Publications copy lightly shifted from promotional toward
factual. Content otherwise unchanged.

### 7. Footer & contact path

Footer keeps LinkedIn · GitHub, copyright, and back-to-top. No email, no form
anywhere. LinkedIn is the implicit contact channel.

### 8. Résumé print view

Polish the existing `@media print` block so printing/saving produces a clean
1–2 page resume:

- Show a name + title header, all experience roles, skills, and education.
- Hide nav, hero background/scroll indicator, buttons, and project images/modals
  as appropriate.
- Black text on white; expanded link URLs already handled.

The "Résumé" button calls `window.print()`, so the printed output always matches
the live page.

## Files Touched

- `index.html` — nav links + CTA, hero (name/title/subtitle/actions), TWMC
  experience bullets, remove `#contact` section, rename portfolio→projects
  (heading + `id` + nav href), light copy edits, update JSON-LD/meta (drop
  "Video Production" from `knowsAbout`).
- `style.css` — remove now-unused contact-form styles, refine `@media print`
  block, minor hero tweaks for the new eyebrow/actions.
- `main.js` — remove `initContactForm` and its call; add small
  `initResumePrint()` that binds the Résumé control to `window.print()`; update
  any anchor handling so the print control is not treated as a scroll anchor.
- `sitemap.xml` — drop `#contact` entry; rename `#portfolio` → `#projects`.

## Testing / Verification

- `node --check main.js` passes; no leftover references to `initContactForm`,
  `Formspree`, or `#contact`.
- Manual: nav anchors scroll to correct sections; Résumé button opens the print
  dialog; print preview renders a clean resume with nav/buttons/images hidden.
- `grep` confirms no remaining contact-form or Formspree markup.
- Sitemap validates and contains `#projects`, no `#contact`.
- Visual check on desktop + mobile breakpoints (existing responsive rules
  preserved).
