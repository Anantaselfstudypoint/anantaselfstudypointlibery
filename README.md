# Ananta Self Study Point – Jehanabad

The official website of **Ananta Self Study Point**, a premium 24-hour self-study library in Jehanabad, Bihar.
*A Better Place to Focus on Your Future.*

## Pages

| Route         | Contents                                                                                     |
| ------------- | -------------------------------------------------------------------------------------------- |
| `/`           | Hero with 3D library scene, stats, photo slider (`/#photos`), intro, highlights, social, Google Reviews |
| `/about`      | Story, mission, owner, administrator, seating capacity, hours, values                         |
| `/facilities` | All eight facilities and the AC timings for each hall                                         |
| `/reviews`    | Google Reviews call-to-action (write and read reviews on Google)                              |
| `/contact`    | Address, click-to-call, click-to-email, WhatsApp, directions, Google Map                      |

## Adding library photos (owner)

1. Put the photos (`.jpg`, `.jpeg`, `.png`, `.webp` or `.avif`) in **`src/assets/library-photos/`**.
2. Name them in the order you want, e.g. `01-main-study-hall.jpg`, `02-hall-b.jpg`. The name after the number becomes the caption ("Main Study Hall").
3. Push or redeploy. The slider and the home-page hero background pick the photos up automatically, and they're resized and served as WebP through the Netlify Image CDN.

Until the folder has photos, the slider shows a "photo tour coming soon" panel. No placeholder or broken images appear.

## Updating business details

Every phone number, email, address, social link and review link lives in `src/lib/site.ts`. Facilities and AC timings live in `src/lib/facilities.ts`.

## Tech

TanStack Start (React 19, file-based routing, server-side rendering), Tailwind CSS 4, lucide icons, Netlify Image CDN, and deployment on Netlify.

## Run locally

```bash
pnpm install
pnpm dev            # http://localhost:3000
# or, with Netlify emulation (Image CDN etc.)
netlify dev
```
