# Vera deployment

Public site: https://vera-academy-lms.broadcast-studio.workers.dev/

Source: https://github.com/yusufsuhair/yusufsuhair-web/tree/main/web-apps/vera

Vera is listed under Web Apps in the portfolio. The portfolio Worker and Vera Worker deploy separately from the same repository.

## Native Workers Builds

Manage the connection in Cloudflare → Workers & Pages → `vera-academy-lms` → Settings → Builds.

| Setting | Value |
| --- | --- |
| GitHub repository | `yusufsuhair/yusufsuhair-web` (public) |
| Production branch | `main` |
| Application root | `web-apps/vera` |
| Worker | `vera-academy-lms` |
| Cloudflare account | `3fed402660f31f6d09f132e093f352a7` |
| Build command | Empty; `dist/` contains authored static files |
| Deploy command | `npm run deploy` |
| Watch paths | `web-apps/vera/*` |
| Preview deployments | Disabled |
| Node version | `24.11.1` |

Push changes under `web-apps/vera/` to `main` for automatic deployment. The lockfile and pinned Wrangler dependency make deployment reproducible. `npm run deploy` first runs the JavaScript syntax check through the `predeploy` script. Cloudflare manages the build credential; no token belongs in Git.

## Local validation and recovery deployment

From this directory:

```sh
npm ci
npm run check
npx wrangler deploy --dry-run
```

Use `npm run deploy` only for an intentional manual recovery deployment. Normal releases flow through Git and native Workers Builds. A manual upload alone does not verify the Git integration.

The former Pages address, https://vera-academy-lms.pages.dev/, remains available as a migration fallback. It is a separate Direct Upload project and does not receive Workers Builds updates. Do not delete it or add a second CI pipeline without an explicit decision.

## Share preview

`dist/assets/og-hero.jpg` is a 1200 × 630 capture of the hero. The HTML head supplies public Workers URLs and image alt text. Refresh the capture when the hero changes, then regenerate the portfolio thumbnails with `npm run optimize:images -- vera` from the repository root.
