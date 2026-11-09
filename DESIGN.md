# DESIGN.md: yusufsuhair.xyz

Recorded from the site as shipped on 2026-10-09, after the antislop audit (`anti-slop/audit-001-2026-10-09.md`), and refreshed on 2026-11-05 after the Impeccable audit. Each reason below is a reading of what the choice already does. Yusuf: correct any reason that isn't yours, and the next change follows the corrected version.

**Design Read:** a personal portfolio and services page for a software engineer and founder, written for clients, employers and followers who arrive from Instagram, YouTube and LinkedIn. **Dial: ENERGY 2 / RHYTHM 2 / MOTION 2.**

## Identity

- **Who it speaks for:** one engineer who ships products, teaches (YS Academy) and runs a business (MudahAI). The proof is the work: real screenshots, real employers, real links.
- **Motif:** the terminal. The bottom-right button opens a working one, with commands, links and history. The Skills section borrows its window so the skill lists read as command output. It appears nowhere else.

## Theme

- **Home and 404: dark (#050505).** The portfolio leads with screenshots and photos, which read best on a near-black ground.
- **Services: light (#f7f7f8).** It is the sales page with prices and WhatsApp buttons, and it reads like a printed price list.

## Colour

- **Core:** near-black and white with the zinc greys. Greys use Tailwind's zinc scale directly.
- **Surfaces:** named tokens in `app/globals.css`, from the page up: `page` (#050505), `surface` (#0a0a0a), `surface-tab` (#0c0c0c), `surface-raised` (#0f0f0f), plus `page-light` (#f7f7f8) for Services.
- **Text on dark:** zinc-400 for secondary text and labels (7.5:1 on #0f0f0f). Nothing smaller than 18 px uses zinc-500 or darker on the dark pages.
- **Text on light:** zinc-500 or darker (4.5:1 on #f7f7f8).
- **Accents, one per surface:**
  - **Terminal:** green (prompts and commands) inside the terminal and the Skills window.
  - **Skills tabs:** one colour per skill area, to tell the tabs apart. These are the only hard-coded hex values left in the components.
  - **Services:** blue-600, for its qualifiers, check marks and jump-link hover.
  - **Platform cues:** the YouTube card's red hover, because it marks YouTube.

## Type

- **Inter** for everything people read. It is neutral, so the work and photos carry the personality.
- **JetBrains Mono** (`font-mono`) for metadata: dates, the hero role line, skill names, the footer and the terminal. Uppercase with 0.12em tracking is used only for short metadata labels, where it marks "label" rather than "content".

## Layout

- **Home order:** hero (who, with links to evidence), skills, experience with credentials, selected work, YouTube, Instagram, contact. It runs from who he is to proof to how to reach him.
- **Credentials:** a one-line list at the end of Experience, not a section of its own. Shipped work is the stronger proof, so certificates support it and don't delay it. Current credentials only, each with a thumbnail of the real certificate, a link to the full image and an official verification link where one exists.
- **Selected Work:** every project is a two-column card with large media (Yusuf, 9 Nov 2026: "all needed to be featured, no need also built"). Six show at first, three full rows. Below them the top of the next row peeks out and fades into the page, so the list reads as continuing, then a "6 of 24 projects" count with a thin progress line and a "Show 6 more" button. When everything is shown the button becomes "Show fewer".
- **Phones:** Experience drops the timeline rail and shows two points per role, with the rest behind "Show all details". Selected Work pages the same way as on desktop, in one column.
- **Alignment:** list sections (skills, experience, work) use left-aligned headings because their content is left-aligned. The media sections (YouTube, Instagram) are centred over their three cards.
- **Navigation:** Home, Services and "Let's talk" stay visible at every width. Three items fit a 320 px phone, so there is no hidden menu.
- **Touch targets:** every control is at least 44 px tall.
- **Overflow:** no sideways scroll at 320 px or with text at 200%. Text wraps; the Skills tab row is the one deliberate scroller.

## Surfaces

- **Glass:** only the navbar, over scrolling content, and the terminal's backdrop.
- **Cards:** solid #0a0a0a or #0f0f0f with a thin white/5 to white/10 border. Shadow appears only on hover-lifted cards and floating buttons.
- **No decoration:** no glow orbs, background grids or cursor effects.

## Motion

- **Purpose:** sections fade up once on scroll to mark arrival, the hero types its greeting, and cards lift on hover.
- **Hero greeting:** the letters are in the server HTML and CSS reveals them, so the name appears without JavaScript and nothing shifts.
- **Reduced motion:** framer-motion's `MotionConfig reducedMotion="user"` turns off transforms. The hero renders as plain text, and smooth scrolling is off.
- **Without JavaScript:** a `noscript` style shows every revealed and collapsed element and hides controls that can't work.
- **Loops:** none run forever.

## Images

- **Project screenshots:** add the source to `scripts/optimize-images.mjs` and run `npm run optimize:images`, which builds 480 and 960 px WebP files in `public/projects`. Cards load them lazily with `srcset`.
- **Hero photos:** 320 px WebP in `public/hero`, loaded straight away because they sit in the first screen.
- **Certificates:** real files only, in `public/certificates`. Check for personal numbers before publishing; the TTT certificate must use the redacted copy.
- **Caching:** `public/_headers` gives `/projects/*`, `/hero/*` and `/certificates/*` a week. A replaced image needs a new filename to reach returning visitors sooner.

## Content rules

- **Numbers:** each one links to its evidence: projects for "70+ products", the Google Play developer page for "6M+ installs".
- **Links:** name the destination ("Visit Fynecta", "Fake Live on Google Play"), never a status or platform word alone ("Live", "Android") or "Explore".
- **Facts:** the experience timeline is the source of truth, and the terminal's `experience` and `about` follow it.
- **Punctuation:** no em dashes in copy. Use a colon in titles ("Name: tagline") and "to" in date ranges.
