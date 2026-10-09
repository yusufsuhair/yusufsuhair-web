# App landing pages

These two standalone sites are versioned with the portfolio and deployed to separate Cloudflare Pages projects. Each `public/` directory is the complete deployable site; no build step is required.

| App | Live site | Google Play package |
| --- | --- | --- |
| Fake Live Prank Apps | https://fake-live-prank.pages.dev/ | `com.yusufsuhair.fake_live` |
| Fake Celebs Call Prank | https://fake-celebs-call.pages.dev/ | `com.yusufsuhair.fake_video_call` |

## Preview and deploy

From the repository root:

```sh
python3 -m http.server 3111 --directory landing-pages/fake-live/public
python3 -m http.server 3112 --directory landing-pages/fake-celebs-call/public
```

Run each preview server in its own terminal. Deploy with an authenticated Wrangler session:

```sh
npm run deploy:fake-live
npm run deploy:fake-celebs
```

The Pages projects use `main` as their production branch. They use direct uploads, so a Git push saves source but does not deploy these pages automatically. Run the scripts after changing a page.

The portfolio's existing Cloudflare Worker is `yusufsuhair-web`, serving `https://yusufsuhair.xyz`. `npm run deploy` builds with OpenNext and deploys to that Worker, using its existing R2 cache bucket, self-reference service and image binding. `npm run build:cloudflare` only builds; `npm run deploy:portfolio` publishes the completed build.

## Content and assets

Copy, download counts and screenshots were checked against each Google Play listing on 9 October 2026. Each footer links to the privacy policy linked from its store listing. Recheck store claims when updating the app. In particular, the Fake Celebs screenshot currently labels notifications as coming soon, so the landing page does not promote notifications as an available feature.

The icons and screenshots in `assets/` come from the owner's store listings. Geist is self-hosted and its SIL Open Font License is included alongside the font. No analytics, forms, camera capture or microphone access is used on these sites.

## Design and behavior

Native HTML/CSS/JavaScript with automatic light/dark themes, reduced-motion support, keyboard focus states and a selectable screenshot viewer. The screenshot buttons update an accessible caption and handle image-loading errors. FAQs use native disclosure controls.

Design variance 7, motion intensity 4, visual density 4: split heroes, real store imagery, one accent per page, brief entrance motion and standard browser scrolling. Buttons use pill corners; content panels use 24–32px corners; screenshots use 14–20px corners.
