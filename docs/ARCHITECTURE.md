# Architecture

## Routing

File-based routing via TanStack Start/Router, rooted at `src/routes/`. Full conventions (dynamic segments, splats, layouts) are in [src/routes/README.md](../src/routes/README.md) — read that before adding a route.

Current routes:

- `index.tsx` — home
- `about.tsx`, `founder.tsx`, `coaches.tsx`, `safeguarding.tsx`, `contact.tsx`
- `elite-academy.tsx`, `strength-conditioning.tsx`, `international.tsx`, `consultancy.tsx`
- `programmes/$slug.tsx` — dynamic programme detail page
- `sitemap[.]xml.ts` — generated sitemap
- `api/indoor-interest.ts` — POST-only server route (see CLAUDE.md, currently unused by any page)
- `__root.tsx` — app shell: `<html>`/`<head>`/`<Scripts>`, global `<head>` metadata (fonts, favicon, `styles.css`), the app's 404 and error boundary components, wraps everything in `QueryClientProvider`

`routeTree.gen.ts` is generated from these files by the TanStack router Vite plugin — never edit it directly; it regenerates on `dev`/`build`.

## Server / SSR

- `src/start.ts` — configures `createStart` middleware: a CSRF middleware for server functions, and an error middleware that catches server function throws and renders a fallback error page instead of leaking a raw 500.
- `src/server.ts` — the app's `fetch`-style SSR entry point (wired via `vite.config.ts`'s `tanstackStart.server.entry: "server"` and packaged by Netlify's TanStack Start adapter). Wraps the generated SSR handler to normalize opaque JSON 500 responses into the site's HTML error page.
- `src/lib/error-page.ts` / `src/lib/error-capture.ts` / `src/lib/lovable-error-reporting.ts` — supporting error-handling/reporting utilities used by the above and by `__root.tsx`'s error boundary.
- `src/router.tsx` — client router factory (`createRouter`), sets up the React Query client passed into route context.

## Data layer

No database, no CMS, no external content API. All page content is hand-authored, typed TypeScript in `src/data/*.ts` (e.g. `site.ts` for nav/booking links/WhatsApp helpers, `services.ts`, `events.ts`, `pages.ts`, `international.ts`, `strength.ts`, `consultancy.ts`, `content.ts`, `sections.ts`). Components import from these files directly — there is no fetch/query layer for content. `@tanstack/react-query` is wired up (`QueryClientProvider` in `__root.tsx`) but not currently used for content fetching.

The one real network call in the app is outbound: `src/lib/email.ts` POSTs to the Resend API from the `api/indoor-interest` server route.

## Components

- `src/components/sections/*` — page-section-level components (hero, navigation, footer, journey, method, manifesto, partners, proof-bar, coaching, camp-detail, etc.), each generally backed by one or more `src/data/*.ts` files.
- `src/components/ui/*` — smaller shared primitives (`action.tsx`, `cursor.tsx`, `reel-card.tsx`, `reveal.tsx`, `smooth-scroll.tsx`, `social-icons.tsx`, `whatsapp-float.tsx`, `wordmark.tsx`, `field-decor.tsx`). This directory previously held a full shadcn/radix component kit; most of those files are being removed (see CLAUDE.md) — check what's actually present before assuming a primitive exists.
- `src/lib/utils.ts` — `cn()` Tailwind class helper (clsx + tailwind-merge), used throughout.
- `src/hooks/use-prefers-reduced-motion.ts` — the one custom hook currently in the codebase.

## Styling

- Tailwind CSS v4, configured via the `@tailwindcss/vite` plugin (bundled inside `@lovable.dev/vite-tanstack-config`, not configured directly in this repo).
- `src/styles.css` — global stylesheet, loaded via `?url` import in `__root.tsx`'s `head()`.
- Fonts (Archivo, Inter Tight, Geist Mono) are loaded from Google Fonts via `<link>` tags in `__root.tsx`, not self-hosted.

## Assets

- `src/assets/*` — imported images (coach photos, service photos, partner logos, hero image) — bundled by Vite.
- `public/*` — served as-is: favicon, `robots.txt`, camp poster image, and `reels/*` (video + poster pairs used by a reel/video component).
