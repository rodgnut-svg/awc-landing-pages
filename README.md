# Anywhere Clubs landing pages

Three design directions for the Anywhere Clubs ad landing pages. Each folder is its own Next.js project.

| Folder | Direction |
| --- | --- |
| `direction-a-marketplace` | Dark, closest to the live site. Steps, platform chips, testimonial. |
| `direction-b-two-sides` | Light theme. Gym owners ↔ platform ↔ trainers diagram. |
| `direction-c-quiet-hours` | Dark with red glow. Weekday timeline showing quiet hours. |

Each project has two pages:

- `/gym-owners`: CTA is "Book a call" (Calendly)
- `/trainers`: CTA is "Sign up & get verified", with an "explore gyms" link underneath
- `/`: simple index linking to both, handy when presenting

## Run one

```bash
cd direction-a-marketplace
npm install
npm run dev
```

## Swapping in the real assets

Everything to change before launch is in `src/config/site.ts`:

- **Video:** put the file in `public/video/` and set `video.src` (and optionally `video.poster`).
- **Logo:** put it in `public/` and set `logo.src`.
- **Links:** Calendly link, trainer signup link and explore link.
- **Gyms listed stat (direction A):** `gymsListed` was copied from anywhereclubs.com on 25 Nov 2026. Check it is current.

Copy is in `src/content/copy.ts`. Styling is in `src/app/globals.css`.
The pages are set to `noindex` while they are concepts; remove `robots` in `src/app/layout.tsx` when they go live.
