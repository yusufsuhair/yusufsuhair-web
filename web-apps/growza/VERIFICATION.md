# Verification

## Build and browser checks

- Production build: `npm run build` passed.
- Browser console: no warnings or errors observed after the interaction and resize checks.
- Responsive widths: 320, 390, 600, 900, 1280, and 1440 pixels; no horizontal document overflow.
- Desktop, tablet, mobile, and mobile form screenshots inspected.
- All transactions and balances are sample data; no real bank is connected.

## Recorded interaction checks (58)

- PASS: Invest → Your portfolio
- PASS: Rewards → Rewards
- PASS: Statements → Account statements
- PASS: US Dollar → US Dollar account
- PASS: Euro → Euro account
- PASS: Add account → Add an account
- PASS: Add card → Add a card
- PASS: Security → Security settings
- PASS: Help → How can we help?
- PASS: Upgrade → Growza Infinite
- PASS: Wallets → Your wallets
- PASS: Settings → Settings
- PASS: Messages → Messages
- PASS: Notifications → Notifications
- PASS: Profile → Your profile
- PASS: Spending → Spending breakdown
- PASS: Monthly overview → October overview
- PASS: Send empty form → Enter a recipient’s name or email.
- PASS: Send over balance → You have $579.02 available. Enter a smaller amount.
- PASS: Send $5 → Transfer complete
- PASS: Balance after send → $574.02
- PASS: Deposit $5 → Deposit complete
- PASS: Balance restored → $579.02
- PASS: Search with no matches → No matching transactions; ; Try another name or select a different transaction type.; ; Clear filters
- PASS: Income filter → 3 results
- PASS: Name search → Northwind Ltd
- PASS: Month selector → $1,100.00
- PASS: Freeze card → Card number; •••• •••• •••• 4821; Cardholder; Alex Morgan; Network; Visa; Monthly limit; $5,000.00; Status; Frozen
- PASS: debit card selected → true
- PASS: virtual card selected → true
- PASS: gold card selected → true
- PASS: infinite card selected → true
- PASS: platinum card selected → true
- PASS: Create card → Card created
- PASS: Create account → Account created
- PASS: Accounts collapse → false
- PASS: Sidebar collapse and expand → restored
- PASS: Balance visibility toggle → ••••.••
- PASS: Profile saved → Good morning, Alex
- PASS: Global search → Coffee Lab; Food & Drink · $4.50
- PASS: Transaction detail → Coffee Lab
- PASS: Escape closes dialog → false
- PASS: CSV statement download: produced and inspected the local CSV file.
- PASS: Mobile menu opened → true
- PASS: Mobile Escape → false
- PASS: help-transfer → Sending and depositing
- PASS: help-cards → Managing your cards
- PASS: help-demo → About this dashboard
- PASS: Transaction 1 → Alex Smith
- PASS: Transaction 2 → Add to Invest
- PASS: Transaction 3 → Coffee Lab
- PASS: Transaction 4 → Music subscription
- PASS: Transaction 5 → Northwind Ltd
- PASS: Portfolio activity → Add to Invest
- PASS: Spending activity → 3 outgoing records
- PASS: Transaction alerts → toggled and restored
- PASS: Card spending notifications → toggled and restored
- PASS: Top Activity and Overview → switched views

## Contrast evidence

- Secondary text `#506f75` against panel `#e4edf0`: 4.56:1.
- Primary text `#002f35` against header sky/panel `#b8dfe6`: 10.11:1.
- Platinum card text `#ecf8fa` against the lightest shaded surface `#567274`: 4.78:1.
- Gold card text `#30290b` against darkest gold `#b19a43`: 5.23:1.
- Upgrade copy `#ffffff` against lightest gradient stop `#377a50`: 5.17:1.
- The embossed Visa wordmark follows the low-contrast reference material and is a decorative logotype, not body text.

## Scope

This is a frontend demo. Chart distributions are reconstructed from the reference, and the sky and avatar are replacement assets. The checks above are implementation checks, not a formal accessibility certification.

## Antislop delivery gate

The user selected During mode. The supplied visual reference is the design authority; its requested glass panels, card layering, gradients, capsule navigation, and logo treatments are intentional.

### Hard gate

- R-02 PASS: source scan found no em dash in authored UI copy.
- R-03 PASS: six browser widths checked with zero horizontal document overflow; full desktop, tablet, and mobile captures reviewed.
- R-17 PASS: starting figures are transcribed from the reference; all account content is identified as demonstration data.
- R-18 PASS: no testimonials or customer endorsements are presented.
- R-23 PASS: requested brand and layout follow the supplied reference; the stock demo portrait and generated sky are disclosed.
- R-24 PASS: navigation opens implemented views or dialogs; the original-design link resolves to the supplied Dribbble page.
- R-25 PASS: measured text pairings above meet the applicable contrast threshold; material contrast findings were corrected and reviewed. Decorative logotype exception is documented above.
- R-26 PASS: interactive controls have real local behavior; 58 recorded checks cover navigation, actions, forms, filters, exports, settings, and details.
- R-27 PASS: empty search/account/reward/message states, processing feedback, and explicit transfer validation errors are implemented and exercised.
- R-28 PASS: no generic FAQ was added; help covers the implemented demo operations.
- R-32 PASS: native buttons, inputs, and select controls; visible focus styles; dialog Escape; mobile focus containment; hidden navigation is inert; icon-only navigation has accessible names.
- R-33 PASS: UI features were authored in HTML, CSS, and JavaScript using source patches, without source-rewriting helper scripts.
- R-34 PASS: the requested light appearance is the only theme; no incomplete theme toggle is exposed.
- R-35 PASS: production build passed; browser interaction evidence and valid screenshots recorded; console clean.
- R-36 PASS: no invented compliance, security certification, or performance claims. Upgrade benefits are identified as a preview of the original design.
- R-37 PASS: the original Dribbble design is explicit direction, recorded in the product and direction documents.
- R-38 PASS: illustrative content is labeled; no fictitious real customer, testimonial, or active bank integration is claimed.

### Purpose gate

- R-01 PASS: cloud color and metallic gradients reproduce the requested background and payment-card material.
- R-04 PASS: hand-authored banking icons reflect the supplied shapes and identify their functions; the upgrade emblem follows the reference.
- R-06 PASS: DM Sans was selected for the reference's rounded geometric type; Doto recreates the pixel wordmark. Financial numerals are tabular.
- R-07 PASS: chart rules and dot fields encode financial categories and periods; no unrelated background grid.
- R-08 PASS: arrows denote sending money or opening details, following the reference.
- R-09 PASS: small capsules carry numerical deltas, navigation, or actions; no redundant eyebrow badge.
- R-10 PASS: translucency is explicitly required by the reference, concentrated in the shell and dashboard surface.
- R-12 PASS: restrained shadows distinguish active navigation, card elevation, and dialogs; no page-wide floating effect.
- R-13 PASS: the notification marker represents an unread notification and clears when opened; no animated decorative glow.
- R-14 PASS: component sizes reflect their distinct content: tall flow chart, semicircle spending, month grid, transaction rows.
- R-19 PASS: ENERGY 2 / RHYTHM 2 / MOTION 1; short state transitions only, with reduced-motion support.
- R-22 PASS: photographic background and code-native card/chart geometry follow the specified scene; no generic filler illustration.

### Liveliness

- Dials PASS: ENERGY 2 / RHYTHM 2 / MOTION 1 documented before building.
- Consistency PASS: composed financial panels and restrained interaction transitions match those dials.
- Focal point PASS: the dark platinum card anchors the card fan above the financial overview.
- Whitespace PASS: navigation, greeting, card fan, and financial tools are separated at reference-derived intervals.
- Accent PASS: dark teal anchors the interface; green and coral communicate money direction, with gold used for card material.
- Identity PASS: cloud ground, glass panel edges, pixel wordmark, and dot charts recur as the reference's recognizable visual system.
- Design read PASS: banking dashboard, personal account review, supplied cloud-and-glass language documented before implementation.

### Craftsmanship and quality locks

- C-1 PASS: major material, type, palette, spacing, and icon choices are tied to the supplied reference.
- C-2 PASS: the control inventory is implemented and browser-checked.
- C-3 PASS: panel composition follows the reference's financial tasks and data.
- C-4 PASS: responsive reflow, validation, empty states, processing states, keyboard access, and reduced motion are covered.
- C-5 PASS: demonstration content and replacement assets are disclosed.
- R-05 PASS: the supplied asymmetric dashboard composition is retained; no additional template sections.
- R-11 PASS: panel, card, input, row, and capsule radii have distinct roles that follow the reference.
- R-15 PASS: actions use specific labels such as Send, Deposit, Export CSV, Freeze card, and Save profile.
- R-16 PASS: no generic AI marketing claims were introduced.
- R-20 PASS: the distinctive reference identity is maintained across views and dialogs.
- R-21 PASS: the fixed light treatment is explicitly governed by the user-selected reference.
- R-29 PASS: teal, green, and coral form the functional palette; sky and gold are reference-directed material colors.
- R-30 PASS: this recreation was explicitly requested by the user.
- R-31 PASS: one-line design reasons are recorded in the direction contract and final design documentation.

## Independent review

Disposition: **ship**. The fresh-context reviewer found no material fixes after inspecting the reference, five required screenshots, source, and verification evidence. Scope: a close local interactive recreation, not pixel-exact reproduction. Full review is in `REVIEW.md`.
