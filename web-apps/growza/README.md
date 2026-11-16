# Growza banking dashboard

An interactive, responsive recreation of [Alamin Hossen's Fintech Banking Dashboard UI Design](https://dribbble.com/shots/27892428-Fintech-Banking-Dashboard-UI-Design).

Live demo: https://growza-dashboard.broadcast-studio.workers.dev/

Source lives in `yusufsuhair-web/web-apps/growza`, listed in the repository's Web Apps portfolio. Cloudflare Worker: `growza-dashboard`, using its workers.dev address without a custom domain. Rebuild with `npm run build`, then deploy with `wrangler deploy`.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Vite. The current review server is at http://127.0.0.1:5173/.

```sh
npm run build
npm run preview
```

`dist/` contains the production website and can be served by any static web host. No runtime API keys or external services are required. Fonts and images are served locally.

## Working interactions

- Sidebar collapse, account disclosure, and keyboard-accessible mobile navigation.
- Overview and activity views; transaction type filters and text search.
- Global search with Command/Ctrl + K.
- Send and deposit forms with validation, a processing state, and local balance/transaction updates.
- Card selection, details, freeze/unfreeze, and creating additional demo cards.
- Account details and adding additional demo accounts.
- Month selection and responsive SVG charts.
- CSV statement export.
- Profile editing, balance visibility, and notification preferences.
- Notifications, help, portfolio details, rewards empty state, and plan preview.

## Demo scope

All amounts, identities, and transactions are demonstration content. The initial screen reproduces the reference's figures and date. Transfers, deposits, cards, and accounts are simulated in browser memory and reset on reload. Display name and preferences are saved in local storage. No financial operations are sent anywhere.

The layout, color system, stacked cards, and chart treatments closely follow the reference. The cloud photograph is a generated replacement, the portrait is a stock replacement, and chart dot positions are reconstructed. This is a close frontend recreation, not the original Figma/source file or a pixel-identical image.

## Assets

- Sky: `public/assets/sky.webp`, generated with the built-in imagegen tool using the supplied dashboard as a visual reference. Original full-resolution output is preserved outside the project; WebP is the optimized shipping copy.
- Avatar: [Unsplash image](https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces&auto=format&q=85), used as a demo profile portrait, not a claim about a real account holder.
- Type: locally served DM Sans and Doto from Google Fonts.
- Icons, card materials, flags, and charts: source-authored SVG/CSS.

Final sky generation prompt:

> Use the supplied image as an edit target: remove the entire banking dashboard, all UI panels, all text, all cards, all foreground objects. Reconstruct ONLY the underlying sky background across the entire image. Match the reference's original photographic sky precisely in color and mood: rich medium deep cerulean blue along the very top, billowing white and cyan clouds across the middle upper half including behind where the dashboard header was, bright pale cyan diffused center. White cloud masses around the sides. Lower half gradually fades into the same soft slate light blue gray haze seen at the original bottom. No horizon, no objects, no text, no UI. Output landscape 4:3. This is a clean background plate for rebuilding the foreground UI in code.

## Verification

Production build, browser interaction checks, responsive widths, and design review are recorded in `VERIFICATION.md`.
