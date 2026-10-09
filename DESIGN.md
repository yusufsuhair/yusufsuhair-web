# DESIGN.md: yusufsuhair.xyz

Recorded from the site as shipped on 2026-10-09, after the antislop audit (`anti-slop/audit-001-2026-10-09.md`). Each reason below is a reading of what the choice already does. Yusuf: correct any reason that isn't yours, and the next change follows the corrected version.

**Design Read:** a personal portfolio and services page for a software engineer and founder, written for clients, employers and followers who arrive from Instagram, YouTube and LinkedIn. **Dial: ENERGY 2 / RHYTHM 2 / MOTION 2.**

## Identity

- **Who it speaks for:** one engineer who ships products, teaches (YS Academy) and runs a business (MudahAI). The proof is the work: real screenshots, real employers, real links.
- **Motif:** the working terminal (bottom-right button). It is the one place the "engineer" voice is played for fun, and it does real things: commands, links, history. It isn't repeated as decoration anywhere else.

## Theme

- **Home and 404: dark (#050505).** The portfolio leads with screenshots and photos, which read best on a near-black ground.
- **Services: light (#f7f7f8).** It is the sales page with prices and WhatsApp buttons, and it reads like a printed price list.

## Colour

- **Core:** near-black and white with the zinc greys.
- **Text on dark:** zinc-400 for secondary text and labels (7.5:1 on #0f0f0f). Nothing smaller than 18 px uses zinc-500 or darker on the dark pages.
- **Text on light:** zinc-500 or darker (4.5:1 on #f7f7f8).
- **Accents, one per surface:**
  - **Terminal:** green (prompts and commands) inside the terminal only.
  - **Services:** blue-600, for its qualifiers, check marks and jump-link hover.
  - **Platform cues:** the YouTube card's red hover, because it marks YouTube.

## Type

- **Inter** for everything people read. It is neutral, so the work and photos carry the personality.
- **JetBrains Mono** (`font-mono`) for metadata: dates, the hero role line, skill names, the footer and the terminal. Uppercase with 0.12em tracking is used only for short metadata labels, where it marks "label" rather than "content".

## Layout

- **Home order:** hero (who, with links to evidence), skills, experience, selected work, YouTube, Instagram, contact. It runs from who he is to proof to how to reach him.
- **Alignment:** list sections (skills, experience, work) use left-aligned headings because their content is left-aligned. The media sections (YouTube, Instagram) are centred over their three cards.
- **Navigation:** Home, Services and "Let's talk" stay visible at every width. Three items fit a 320 px phone, so there is no hidden menu.
- **Touch targets:** every control is at least 44 px tall.

## Surfaces

- **Glass:** only the navbar, over scrolling content, and the terminal's backdrop.
- **Cards:** solid #0a0a0a or #0f0f0f with a thin white/5 to white/10 border. Shadow appears only on hover-lifted cards and floating buttons.
- **No decoration:** no glow orbs, background grids or cursor effects.

## Motion

- **Purpose:** sections fade up once on scroll to mark arrival, the hero types its greeting, and cards lift on hover.
- **Reduced motion:** framer-motion's `MotionConfig reducedMotion="user"` turns off transforms. The hero renders as plain text, and smooth scrolling is off.
- **Loops:** none run forever.

## Content rules

- **Numbers:** each one links to its evidence: projects for "60+ products", the Google Play developer page for "5M+ installs".
- **Facts:** the experience timeline is the source of truth, and the terminal's `experience` and `about` follow it.
- **Punctuation:** no em dashes in copy. Use a colon in titles ("Name: tagline") and "to" in date ranges.
