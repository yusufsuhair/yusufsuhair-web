---
name: Growza Dashboard
description: A cloud-backed banking workspace with translucent panels and layered metal payment cards.
colors:
  ink: "#002f35"
  muted: "#506f75"
  green: "#83c69c"
  coral: "#e76672"
  ground: "#a3b2bd"
  white: "#ffffff"
  border: "rgba(255,255,255,.9)"
  panel: "rgba(249,252,253,.54)"
  sidebar: "rgba(248,251,252,.65)"
  dashboard: "rgba(243,248,249,.67)"
  button-light: "rgba(255,255,255,.8)"
  primary-hover: "#125057"
  positive: "#08733a"
  positive-bg: "#b7e1cb82"
  negative: "#ab3547"
  negative-bg: "#f1c4be91"
  dialog: "#f5fafb"
  input-border: "#b0c7cb"
  metal-text: "#ecf8fa"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "calc(42 * var(--unit))"
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: "-.045em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "calc(29 * var(--unit))"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-.035em"
  title:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "calc(16 * var(--unit))"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "calc(14 * var(--unit))"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "max(11px,calc(11 * var(--unit)))"
    fontWeight: 400
    lineHeight: 1.45
  metric:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "calc(23 * var(--unit))"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-.045em"
  brand:
    fontFamily: "Doto, monospace"
    fontSize: "calc(20 * var(--unit))"
    fontWeight: 700
    lineHeight: 1.45
    letterSpacing: "-.035em"
rounded:
  field: "10px"
  row: "calc(12 * var(--unit))"
  transaction: "calc(18 * var(--unit))"
  panel: "calc(24 * var(--unit))"
  sidebar: "calc(28 * var(--unit))"
  dashboard: "calc(32 * var(--unit))"
  pill: "99px"
  dialog: "24px"
  bank-card: "calc(15 * var(--unit)) calc(15 * var(--unit)) calc(9 * var(--unit)) calc(9 * var(--unit))"
spacing:
  compact: "calc(7 * var(--unit))"
  control-gap: "calc(11 * var(--unit))"
  grid-gap: "calc(13 * var(--unit))"
  shell: "calc(15 * var(--unit))"
  panel: "calc(18 * var(--unit))"
  dashboard: "calc(19 * var(--unit))"
  mobile-panel: "16px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "calc(11 * var(--unit)) calc(18 * var(--unit))"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.white}"
  button-secondary:
    backgroundColor: "{colors.button-light}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "calc(11 * var(--unit)) calc(18 * var(--unit))"
  navigation-active:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "calc(5 * var(--unit)) calc(13 * var(--unit)) calc(5 * var(--unit)) calc(5 * var(--unit))"
  input:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "13px 14px"
  change-positive:
    backgroundColor: "{colors.positive-bg}"
    textColor: "{colors.positive}"
    rounded: "50px"
    padding: "1px 6px"
  change-negative:
    backgroundColor: "{colors.negative-bg}"
    textColor: "{colors.negative}"
    rounded: "50px"
    padding: "1px 6px"
  panel:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel}"
  transaction:
    backgroundColor: "rgba(247,250,250,.65)"
    textColor: "{colors.ink}"
    rounded: "{rounded.transaction}"
    padding: "calc(8 * var(--unit)) calc(10 * var(--unit))"
  platinum-card:
    textColor: "{colors.metal-text}"
    rounded: "{rounded.bank-card}"
    padding: "calc(15 * var(--unit))"
    height: "calc(160 * var(--unit))"
  month-select:
    backgroundColor: "rgba(255,255,255,.6)"
    textColor: "{colors.ink}"
    rounded: "30px"
    padding: "calc(6 * var(--unit)) calc(31 * var(--unit)) calc(6 * var(--unit)) calc(14 * var(--unit))"
  dialog:
    backgroundColor: "{colors.dialog}"
    textColor: "{colors.ink}"
    rounded: "{rounded.dialog}"
    padding: "25px"
    width: "min(460px,calc(100% - 32px))"
---

# Design System: Growza Dashboard

## Overview

**Creative North Star: "Cloud-and-glass banking workspace"**

This system records the completed local recreation of Alamin Hossen's [Fintech Banking Dashboard UI Design](https://dribbble.com/shots/27892428-Fintech-Banking-Dashboard-UI-Design). The user-selected reference defines the visual authority. The interface places dense financial information over a photographic sky, with translucent pale surfaces and a prominent fan of payment cards. The metal shading, white seams, capsule navigation, and pixel details belong to that requested world.

The cloud image and profile portrait are replacement assets. The original reference supplies the composition and material direction, while the built HTML, CSS, and JavaScript supply the values below. This is a close recreation; the original standalone assets and exact original type metrics were unavailable. The fixed light appearance preserves the reference. The recorded dials are Energy 2, Rhythm 2, Motion 1.

**Key Characteristics:**

- A photographic cloud field remains visible around and above the financial workspace.
- Deep teal text anchors pale glass surfaces, with green and coral financial marks.
- Five overlapping payment cards use distinct frosted, green, platinum, and gold materials.
- Rounded geometric text and a dotted wordmark connect with the circle and pixel charts.
- Short feedback transitions and responsive reflow preserve access to the banking tools.

## Colors

The palette pairs cool blue-gray surfaces with dark teal content; green and coral carry chart and change meaning.

### Primary

- **Deep teal (`ink`)** supplies body text, active navigation icons, the Deposit button, and incoming flow marks. Its high visual weight keeps the photo from competing with financial information.
- **Muted teal (`muted`)** distinguishes dates, legends, descriptions, and supporting labels.
- **Deep teal hover (`primary-hover`)** identifies the primary action's hover state.

### Secondary

- **Soft green (`green`)** distinguishes transfer share and contributes to the positive pixel charts. Green payment-card gradients remain material treatments, separate from the data palette.
- **Positive green (`positive`, `positive-bg`)** pairs a readable dark percentage with a pale background. Positive transaction amounts use the implemented darker green variant.

### Tertiary

- **Coral (`coral`)** marks outgoing flow; the negative change chip uses its darker text and translucent surface variants.
- Gold appears only in the payment-card material and small pending-status marker. It is not a general action color.

### Neutral

- **Cloud ground (`ground`)** continues the photographic field below the image.
- **White and white border (`white`, `border`)** form the fine seams and active surfaces.
- **Panel, sidebar, and dashboard** preserve three different translucent layers. Their alpha values are part of the material, so do not replace them with opaque sampled colors.
- **Dialog** uses a more solid pale surface for forms. **Input border** provides a stronger field outline than the white seams used by display panels.

**The Financial Color Rule.** Keep incoming and outgoing series consistently distinguishable, and retain their text labels alongside color.

## Typography

DM Sans supplies the interface and numeric hierarchy. Its rounded geometric forms approximate the reference's relaxed lettering without adding a heavy display voice. Doto appears in the Growza wordmark and its payment-card variants; its dotted construction echoes the chart marks. Both families ship as local font files.

The frontmatter records the desktop hierarchy: the large flow total is `display`, the greeting is `headline`, panel headings are `title`, and summary amounts are `metric`. Regular weight dominates. Medium and semibold weights support emphasis within the upgrade and status content. Financial totals use tabular numerals; decimal fractions use a quieter teal to soften the long number strings.

The source uses a fluid sizing unit, `clamp(.8px,.0625vw,1.05px)`, across much of the desktop composition. It switches to `.9px` at the compact desktop breakpoint and `1px` on mobile. Mobile overrides include a 27px greeting, 40px flow total, 23px summary amounts, and 17px panel headings. Supporting transaction and chart labels retain an 11px floor where implemented. Form inputs use 16px text.

**The Numeric Hierarchy Rule.** Use the large display role for the principal flow amount, the metric role for summary balances, and quieter text for decimals and context.

## Layout

The desktop shell occupies 86.5% of the viewport, up to 1660px, with a 19.2% sidebar and the remaining width allocated to the main workspace. The shell gap and inset share the `shell` spacing token. The top navigation and greeting sit over the sky. The payment-card fan occupies the space above the financial surface and deliberately overlaps its upper edge.

Four summary figures form a single horizontal band. Under them, the financial grid uses column proportions of 1.49:0.79:1.05. The tall flow chart spans two rows at left; Spending and Monthly Overview sit above Transactions at right. Financial panels vary in height and content structure because each chart has a different reading pattern.

The actual responsive transitions are:

- At 1250px and below, the shell widens to 94%, uses a 20% sidebar, and compresses control spacing with a `.9px` sizing unit.
- At 1050px and below, the shell uses a 185px sidebar and 12px outer gaps. The summary becomes two columns. Flow and Transactions span the full main width, with the two smaller charts between them. Inactive top-navigation labels collapse to icons.
- At 760px and below, the shell has 12px viewport gutters, the sidebar becomes a 245px fixed drawer, and money actions move beneath the greeting. Summary figures remain two columns. Financial panels stack in reading order with 12px gaps and 16px padding. Menu and principal actions use 44px minimum height; navigation and panel detail controls receive mobile sizing overrides.
- From 540px through 760px, Spending and Monthly Overview share a row, while Flow and Transactions span both columns. The card fan grows taller and restores more top-navigation icons.
- At 1700px and above, panel corners become 28px and the flow plot retains a larger minimum height.

The overlapping payment cards are intentional. Financial panels and transaction text must remain within their containers. The drawer uses a scrim, moves keyboard focus into navigation, makes the main workspace inert while open, and closes with Escape.

## Elevation & Depth

Depth comes mainly from photographic distance, translucent fills, white borders, and card overlap. The primary financial surface applies a 15px backdrop blur. The dialog backdrop uses 6px blur; the mobile drawer scrim uses 4px blur. These treatments reproduce the requested cloud-and-glass world and isolate temporary controls. Most chart panels rely on their surface and seam rather than a cast shadow.

The shadow vocabulary in the sidecar records the subtle active sidebar row, the almost-flat transaction rows, the resting platinum card, the lifted selected card, the modal, and the toast. The modal has the largest diffuse shadow because it sits above the workspace. Payment-card metal uses conic gradients plus low-opacity concentric engraving, with a dark overlay on platinum to keep its text readable.

**The Material Hierarchy Rule.** Keep the sky behind translucent financial surfaces, reserve metallic shading for payment cards, and use stronger elevation for selection or temporary overlays.

## Shapes

Broad rounded containers surround the workspace, while financial panels use the `panel` radius. Navigation and action buttons use full capsules. Fields have smaller 10px corners, transaction rows have medium corners, and chart marks use circles or small rounded squares. This variation separates controls from data containers.

Payment cards use softer top corners and tighter bottom corners. Their complete rectangular bodies extend below the financial surface to produce the staggered fan. On mobile, each card uses 12px top corners and 6px bottom corners. The sidebar, avatar, flags, status marks, and icon holders retain their individual silhouettes.

## Components

### Buttons

The dark teal primary capsule marks Deposit and form submission. Light capsules mark Send and secondary actions. Both share the body face, a thin border, centered content, and concise labels. Hover changes the surface; active press translates a control down 1px. The common transition is 180ms for background or shadow and 220ms for transform. Disabled form submission uses lower opacity and a wait cursor.

All keyboard controls use a 3px teal focus outline with a 4px offset. Card focus keeps the outline inside the overlap. Icons use inline SVG with rounded 1.7px strokes; send and detail arrows describe the action they open.

### Navigation

The active top-navigation capsule has a white surface and a dark icon circle. Inactive capsules remain translucent. Sidebar selection uses a nearly white rounded row and a small shadow. The nested account tree uses a fine vertical rule. At compact widths, icon-only controls retain accessible labels; on mobile the drawer supplies the complete navigation.

### Inputs and selectors

Form fields have white surfaces, a pale teal outline, 10px corners, and visible labels. Activity search uses a larger joined icon-and-field container. The month selector retains its translucent capsule and an inline chevron. Error feedback pairs burgundy text with a pale pink block. Empty states use a clear heading and muted explanation; money forms show a disabled pending action before the success state.

### Change chips

Percentage chips use small rounded tinted backgrounds and 10px type. Green indicates a positive change; muted red indicates a negative one. These chips annotate actual sample metrics rather than act as promotional badges.

### Financial panels and charts

Panels share a white seam and translucent pale surface. The flow panel uses a bubble matrix with category labels, month labels, and a key for size and color. The spending panel uses a dotted semicircle surrounding its amount. The monthly panel uses filled and outlined square marks. Keep these distinct geometries: they are part of the reference's visual identity and give the different measures recognizable shapes.

### Payment-card fan

Five selectable cards overlap, with platinum foremost at rest and the financial surface masking their lower edges. The outer cards have frosted finishes; the next cards use green and gold; platinum uses dark conic shading with fine circular engraving. Hover lifts a card 7px. Selection raises it 15px on desktop or 8px on mobile and changes its stacking order. The transition lasts 350ms with `cubic-bezier(.2,.8,.2,1)`. These movements confirm card selection; the interface has no autonomous decorative animation.

### Transactions

Each row is a button containing a circular category icon, a flexible description, and a right-aligned amount and status. The entire row becomes white on hover. Names truncate when space is tight; amounts remain on one line. On mobile, rows grow to a 65px minimum height and use smaller name and amount text while preserving the 11px supporting labels.

### Dialogs and feedback

Dialogs use the pale solid surface, a white border, 24px corners, and a 25px inset. Their width is limited by both the 460px desktop cap and 16px viewport gutters, with an 85dvh maximum height and internal scrolling. Close controls and Escape return users to the workspace. Toasts use a dark teal surface and white text. The reduced-motion media query removes transitions and animations throughout the interface.

## Do's and Don'ts

### Do:

- Do preserve the photographic cloud field, translucent layers, and payment-card materials supplied by the reference.
- Do keep the desktop card fan and four-part summary band recognizable when extending this recreation.
- Do retain the distinct bubble, dotted arc, and square chart geometries.
- Do pair financial colors with labels, amounts, or status text.
- Do use the recorded responsive transitions and visible keyboard focus when adding controls.
- Do disclose demo activity and replacement imagery wherever the interface explains its provenance.

### Don't:

- Don't flatten the payment cards into identical white panels or remove their intentional overlap.
- Don't apply metallic gradients to forms, charts, or ordinary navigation.
- Don't replace the local DM Sans and Doto pairing without a new approved visual direction.
- Don't introduce decorative entrance animations into this quiet interaction model.
- Don't describe the replacement sky, portrait, or font match as pixel-exact source assets.

