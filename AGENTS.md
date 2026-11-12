# AGENTS.md

Marketing and information website for **Ananta Self Study Point**, a 24-hour self-study library in Jehanabad, Bihar. It's a static-content TanStack Start app on Netlify. There's no backend, database or forms. All contact goes through tel:, mailto:, WhatsApp and Google links.

## Architecture

- `src/routes/__root.tsx`: HTML shell, global SEO meta, JSON-LD (`Library` schema), Google Fonts, and the layout: skip link, `SiteHeader`, `<main>`, `SiteFooter`, `WhatsAppFab`.
- `src/routes/index.tsx`: Home. It contains Hero, StatsStrip, PhotosSection (`id="photos"`, which is the target of the "Photos" nav item; there is deliberately **no** separate gallery page), IntroSection, HighlightsSection, SocialSection and Reviews.
- `src/routes/{about,facilities,reviews,contact}.tsx`: inner pages. Each one sets its own `head()` title and description.
- `src/lib/site.ts`: the **single source of truth** for business details (name, phone, email, address, socials, review URLs, nav links). Never hard-code these elsewhere.
- `src/lib/facilities.ts`: facility cards and the AC schedule.
- `src/lib/photos.ts`: loads owner photos with `import.meta.glob` from `src/assets/library-photos/` and serves them through `/.netlify/images` (but not in dev, and not for inlined data: URLs).
- `src/components/site/`: reusable site components (header, footer, brand mark, social icons as inline SVG, photo slider, CSS 3D `LibraryScene`, `TiltCard`, `Reveal` scroll animation, `PageHero`, `SectionHeading`, `ReviewsPanel`, `CtaBand`, `OpenBadge`, `WhatsAppFab`).
- `src/components/ui/`: shadcn/ui primitives from the template (Sheet is used for the mobile menu, and sonner for toasts).

## Design system

- Dark navy, white and subtle gold. The tokens are in `src/styles.css` (`--navy-*`, `--gold*`), and Tailwind exposes them as `bg-navy-950`, `text-gold`, `text-gold-light` and so on.
- Fonts: Cormorant Garamond for headings (`font-display`, and applied to h1–h3 automatically) and Manrope for body text.
- Custom component classes in `styles.css`: `container-site`, `eyebrow`, `glass`, `gold-border`, `card-premium`, `btn` + `btn-gold` / `btn-ghost`, `icon-tile`, `text-gold-gradient`, `divider-gold`. In Tailwind v4 you can't `@apply` these classes inside each other, so combine them in JSX instead (for example `className="btn glass btn-ghost"`).
- Motion: `Reveal` (IntersectionObserver) is used for below-the-fold content. Hero and page-hero headings use CSS `animate-in` so they render without JS. A global `prefers-reduced-motion` rule turns animations off.

## Non-obvious decisions / content rules

- **Never invent content.** Don't add fake reviews, ratings, testimonials or stock library photos. The slider shows only files in `src/assets/library-photos/` and falls back to a tasteful empty state. The home hero uses `src/assets/hero-study-hall.jpg` (cropped from the owner's banner). The logo lives at `src/assets/logo.png` and is shown on a white tile in `BrandMark` because its dark-grey lettering doesn't show up on navy. The owner's video tour is `public/library-tour.mp4`.
- The Google Reviews section links out to Google for writing and reading reviews. Showing live reviews would need the Places API and a key.
- Social links open in a new tab with `rel="noopener noreferrer"`.
