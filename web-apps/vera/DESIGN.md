---
name: Vera LMS
description: Photographic sky and precise white academy administration surfaces.
colors:
  ink: "#16191d"
  muted: "#646b75"
  line: "#e9eaec"
  soft: "#f6f7f9"
  white: "#ffffff"
  sky-fallback: "#8ebae4"
  academy-blue: "#7eacfa"
  academy-coral: "#ff8256"
  focus: "#245fc3"
  action-dark: "#0b0c0e"
  action-dark-hover: "#283c52"
  action-light-ink: "#17191c"
  action-light-hover: "#f5f9ff"
  outline: "#d9dade"
  outline-hover: "#edf4fe"
  field-surface: "#fbfcfe"
  field-border: "#d6dfe8"
  tab-selected: "#101114"
  status-positive: "#2c7146"
  status-positive-surface: "#edf7ef"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(44px, 5.05vw, 76px)"
    fontWeight: 400
    lineHeight: 1.115
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(28px, 3vw, 43px)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.04em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "20px"
    fontWeight: 550
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  field:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "12px"
    fontWeight: 550
    lineHeight: 1.5
  navigation:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  price:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "49px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.04em"
rounded:
  compact-control: "5px"
  feedback: "6px"
  field: "7px"
  button: "9px"
  card: "10px"
  visual: "12px"
  followup: "14px"
  plan-inset: "15px"
  dialog: "17px"
  frame: "18px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  grid: "28px"
  section-inline: "32px"
  section-block: "80px"
components:
  button-primary:
    backgroundColor: "{colors.action-dark}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "11px 21px"
  button-primary-hover:
    backgroundColor: "{colors.action-dark-hover}"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.action-light-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "11px 21px"
  button-light-hover:
    backgroundColor: "{colors.action-light-hover}"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "11px 21px"
  button-outline-hover:
    backgroundColor: "{colors.outline-hover}"
  text-field:
    backgroundColor: "{colors.field-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.field}"
    rounded: "{rounded.field}"
    padding: "12px"
    width: "100%"
  navigation:
    textColor: "{colors.white}"
    typography: "{typography.navigation}"
  chart-tab:
    textColor: "{colors.ink}"
    rounded: "{rounded.compact-control}"
    padding: "4px 6px"
  chart-tab-selected:
    backgroundColor: "{colors.tab-selected}"
    textColor: "{colors.white}"
  feedback-card:
    textColor: "{colors.ink}"
    rounded: "{rounded.feedback}"
    padding: "18px 17px"
  followup-card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.followup}"
    padding: "22px 23px 16px"
  plan-shell:
    backgroundColor: "{colors.soft}"
    rounded: "{rounded.frame}"
    padding: "7px"
  plan-inset:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.plan-inset}"
    padding: "22px 22px 20px"
  dialog:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    padding: "34px"
    width: "min(520px, calc(100% - 32px))"
---

# Design System: Vera LMS

## Overview

**Creative North Star: "Soft sky, precise academy"**

Vera pairs a photographic sky with white academy administration surfaces. The sky, flowering branch, bird and small potted plants give the page its soft, natural character. Fine borders, compact controls and aligned figures keep the product demonstrations precise. This names the visual world already approved in the supplied Vera reference; it does not introduce another direction.

Large regular-weight headings and generous section space frame the denser dashboard. Blue and coral academy panels provide broader color changes through the page, while white and charcoal buttons retain a consistent action hierarchy. The fixed light appearance follows the supplied reference. Dial: ENERGY 2 / RHYTHM 3 / MOTION 1.

**Key Characteristics:**

- Photographic sky and transparent botanical decoration.
- Open DM Sans display type with compact administration details.
- White surfaces separated by pale hairlines.
- Blue and coral story panels, with restrained shadows on lifted surfaces.
- Interaction feedback that respects reduced-motion preferences.

The source for this extraction is `dist/styles.css`, including its final mobile overrides, with component and state evidence in `dist/index.html` and `dist/app.js`. The visual authority is the [Vera landing page by JetDesigns](https://dribbble.com/shots/27845171-Vera-AI-EdTech-LMS-Landing-Page). Asset provenance is recorded in `ASSETS.md`.

## Colors

The palette uses cool photographic blues, white administration surfaces and a warm coral companion panel. Frontmatter records the effective shipped values; unused root variables are not promoted into new defaults.

### Primary

Sky fallback supports the hero photograph while Academy Blue fills the blue story panel. Their roles are distinct: the photograph carries atmospheric variation, and the story panel uses a solid fill. Focus blue identifies keyboard position.

### Secondary

Academy Coral fills the companion story panel and echoes the warm accents in the product demonstrations. It complements the sky without becoming the default button color.

### Tertiary

Positive status green and its pale surface identify completed local actions. Keep this semantic treatment attached to a state with text; it is not a third marketing panel color.

### Neutral

Ink supplies primary text; Muted supplies secondary prose and data descriptions. Line separates adjoining rows and sections. Soft groups feature demonstrations and surrounds the inset pricing surfaces. White provides the main canvas, cards and sky-facing buttons. The dark action colors and selected-tab color remain separate because the source uses distinct values.

**The Color Placement Rule.** Keep broad color on the sky and academy panels; use white and charcoal for the main action hierarchy.

## Typography

DM Sans is served locally in regular and semibold files, with a sans-serif fallback. Its open geometric forms match the reference while keeping short dashboard labels legible. Display and section headings use regular weight; medium and semibold weights distinguish control labels, feature titles and names.

The frontmatter describes the large-screen display, section headline, feature title, body, form, label, navigation, button and pricing roles. This is an observed role hierarchy, not a mathematically generated type scale. Supporting section introductions use larger body copy (17px). Hero supporting copy starts at 19px with a loose line-height (1.57).

At widths through 1190px, the hero display uses a viewport-based size (5.25vw). At 720px and below it uses `clamp(40px, 8.8vw, 60px)` with line-height (1.12); at 370px and below it settles at 36px. Mobile section headings generally sit between 25px and 28px. The final mobile rules enlarge interactive chart labels, search text and course rows instead of scaling the entire dashboard down.

**The Open Heading Rule.** Preserve regular-weight display type, close letter spacing and deliberate line breaks; use size and placement to establish the hierarchy.

## Layout

The main content container has a maximum width of 1240px. Its desktop width subtracts 128px from the viewport, then subtracts 80px through 1190px and 32px through 720px. The header uses a wider independent container, capped at 1360px. Pale vertical boundaries align the main page sections; horizontal rules mark section changes.

Desktop composition alternates a split hero, a large dashboard, paired copy and follow-up list, a three-column metric band, feature demonstrations, horizontal academy stories, a feedback grid, two pricing columns and a split FAQ. Section spacing is generous, generally around 65px to 90px vertically. The frontmatter spacing entries name recurring values from the build; they are not an instruction to regularize every gap.

The dashboard uses a sidebar and main content, with a secondary right column on wider screens. At 980px and below, that secondary column disappears. At 720px and below, the sidebar disappears, the toolbar wraps, the course cards become rows, and the chart tabs form a two-column grid. The main follow-up demonstration remains available below the dashboard.

The same mobile boundary changes the hero, features, feedback, pricing and FAQ to a single column. The story carousel shows one complete story at a time. Navigation becomes a menu panel. A narrow-screen adjustment at 370px protects the headline and supporting content; a wide-screen adjustment at 1600px increases the hero space and dashboard chart height.

## Elevation & Depth

Hairlines and tonal surfaces provide the default separation. The translucent browser frame lifts the dashboard above the sky; follow-up cards, floating metric illustrations and temporary UI surfaces use soft shadows. Feedback cards and large page sections remain flat. The dialog adds a blurred backdrop to separate the active task from the page.

The exact shadow vocabulary lives in `.impeccable/design.json`: dashboard frame, follow-up card, floating metric, light action, navigation popup, search results and dialog. Small component samples in that file include their own state and focus styles.

**The Selective Lift Rule.** Use shadows where a surface overlaps another surface or temporarily sits above it; retain hairlines for adjoining content.

Motion supports state changes. Buttons move upward by 2px on hover and return on activation. Color and shadow transitions last 0.2s. Chart bars and academy stories use the existing easing curve over 0.65s; toast feedback uses 0.25s. Reduced-motion mode disables transitions and animation, removes the button lift and uses automatic page scrolling.

## Shapes

The system uses gently rounded rectangles with radius tied to the component. Compact controls, fields, buttons, feedback cards and full containers retain the distinct observed radii in frontmatter. The large dashboard frame and pricing shells have the softest outer corners. Pricing uses a smaller white inset inside its pale shell.

Round shapes have specific roles: avatars, browser controls and carousel buttons. The floating tour control is an isolated capsule. Botanical silhouettes remain photographic cutouts, with native transparency and containment inside their intended visual area. The pricing plant images use a square display area (80px) and `object-fit: contain`.

Interface icons use inline SVG with strokes that inherit the surrounding text color. The source icon default is 18px with a stroke width of 1.6; individual controls use smaller icons where needed. Social marks use inline SVG. Legacy text-glyph placeholders elsewhere are excluded from this reusable icon guidance.

## Components

### Buttons

White buttons sit on the sky and colored stories. Charcoal buttons carry the main action on white surfaces; bordered white buttons carry alternate actions. The shared button has a minimum height of 44px and the padding and typography recorded in frontmatter. Smaller dashboard and story variants exist in the source, but their dimensions are not the default for new touch controls.

Hover changes the fill and adds a slight lift; activation returns to rest. White actions include a translucent outer halo and a soft shadow. Outlined actions change their border to a pale blue on hover. All focusable controls use the shared visible outline (3px, offset 4px). Disabled buttons use reduced opacity (0.6).

### Inputs / Fields

Dialog fields use a pale background, one-pixel cool border and rounded corners. Labels sit above the control; multiline drafts have room for editing and vertical resize. Search uses a compact outlined container within the dashboard toolbar and expands on mobile. Preserve field labels, visible focus and the meaningful empty or storage-error messages already present in the demo.

### Navigation

The desktop header uses white links with generous gaps over the sky, plus a small feature dropdown. Hover reduces link opacity. On mobile, an explicit menu button opens a white panel with dark labels, comfortable rows and a nested feature group. The implementation updates expanded state and supports Escape. Footer links use underlines on hover.

### Tabs and status labels

Chart tabs are compact bordered rectangles, with white text on charcoal for the selected item. Selection uses `aria-selected` and keyboard arrow navigation. Their mobile form uses 44px rows and larger text. Positive status labels use the green semantic pair and a short written status.

### Cards / Containers

Follow-up cards group a heading, explanatory text and divided learner rows. A name, secondary course detail, initial avatar and contact control form each row. Feedback cards use a thin border without elevation. Feature demonstrations use pale containers and show different product tasks, including layered metric cards.

Pricing cards combine a pale shell with a white inset, a small transparent plant, large regular-weight price and full-width action. The lower feature list stays on the pale shell. The generated plant assets replace the earlier flat illustration and CSS pot treatments; those legacy treatments are not reusable components.

### Dialog and feedback

Dialogs use a compact reading width, a visible close button, labeled fields and clear next actions. The native dialog behavior handles modal focus and Escape, and the source restores focus after closing. A dark toast near the bottom provides brief status feedback. These are front-end demo states; their appearance does not imply a connected external service.

### Dashboard and academy stories

The large dashboard is the main product demonstration. Its browser frame, fine interior grid, visible chart selection and repeated follow-up pattern establish the precise side of the visual identity. Academy stories provide a wider image-and-copy composition on blue, followed by a coral companion. The photograph is illustrative; preserve the visible example-content disclosures.

## Do's and Don'ts

### Do:

- Do preserve the photographic sky, transparent natural decoration and white administration surfaces.
- Do use regular-weight DM Sans headings and the observed role hierarchy.
- Do align section dividers and card contents to the shared page container.
- Do keep fine borders as the default separation and reserve elevation for overlapping surfaces.
- Do preserve the mobile reflow, visible keyboard focus and reduced-motion behavior.
- Do keep sample data, academy stories, feedback and example pricing visibly identified as illustrative.

### Don't:

- Don't replace the approved photographic decorations with generic flat or CSS-drawn substitutes.
- Don't turn every surface into a pill or add a shadow to every card.
- Don't apply the compressed dashboard preview typography to general page copy or new form controls.
- Don't reuse unused root color variables as if they were the effective shipped palette.
- Don't treat glyph placeholders, the release eyebrow or the hard inline-icon offset shadow as reusable design rules.
- Don't remove the example-content disclosures when reusing the demonstration components.
