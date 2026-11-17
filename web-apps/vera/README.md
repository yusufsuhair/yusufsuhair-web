# Vera LMS landing page

A responsive HTML, CSS and JavaScript recreation of the [Vera design by JetDesigns](https://dribbble.com/shots/27845171-Vera-AI-EdTech-LMS-Landing-Page).

## Run locally

From this directory:

```sh
npm run dev
```

Open http://localhost:4173. No npm installation is needed. The command uses Python 3's static server. You can also serve `dist/` with any static web server.

## Files

- `dist/index.html`: page sections and dashboard markup.
- `dist/styles.css`: desktop, tablet and mobile styles.
- `dist/app.js`: interactive demo behavior and local persistence.
- `dist/assets/`: local fonts, generated photographs, transparent decorations and favicon.
- `PRODUCT.md` and `.impeccable/landing-brief.md`: confirmed scope and visual reference.
- `ASSETS.md` and `asset-prompts/`: asset sources and generation prompts.
- `QA.md`: verification evidence and scope.

## Working interactions

Navigation and the mobile menu; feature dropdown; chart metrics, date ranges and period controls; learner/course search; editable follow-up drafts; sample course creation; Favorites; workspace personalization; academy story carousel; example plan selection; FAQ; accessible dialogs.

Workspace names, added courses, favorites and follow-up drafts are saved under `vera-demo-workspace-v1` in the current browser. Reset them through the demo's Settings. All dynamic user text is escaped before insertion.

## Scope

This is a front-end design concept. Authentication, payment processing, email delivery, video lessons and production LMS data are not connected. Sample learners, academy statistics, story results, testimonials and plan prices are labeled illustrative. Replace example content with verified material before presenting it as a real product.

The layout follows the supplied reference. The sky, flowering branch, bird and academy photograph were regenerated for this implementation; fonts and some compact dashboard details are approximations. Mobile layouts are adapted because no mobile reference was supplied.

The public site is hosted on [Cloudflare Workers](https://vera-academy-lms.broadcast-studio.workers.dev/). Source lives in `web-apps/vera` on the repository's `main` branch. See [CLOUDFLARE.md](CLOUDFLARE.md) for deployment commands and native Git integration settings.
