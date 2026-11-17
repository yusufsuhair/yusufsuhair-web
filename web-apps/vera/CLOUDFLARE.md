# Vera deployment

Public URL: https://vera-academy-lms.pages.dev/

Source is maintained in `yusufsuhair-web/web-apps/vera`. The portfolio lists it under Web Apps.

Deploy from this directory:

```sh
wrangler pages deploy dist --project-name vera-academy-lms --branch main
```

The Open Graph and Twitter share image is `dist/assets/og-hero.jpg`, a 1200 × 630 capture of the deployed hero. The HTML head supplies absolute public image URLs and image alt text. Refresh the capture when the hero changes, then regenerate the portfolio's `public/projects/vera-480.webp` and `vera-960.webp` thumbnails.
