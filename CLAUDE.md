# CLAUDE.md

Context for Claude Code sessions working in this repository.

## Read this first

1. Read this file before making any change.
2. Inspect only the source files relevant to the task at hand — don't read the whole tree.
3. Update this file and the `docs/` files below when structure or behaviour changes materially (new route type, new data flow, new deploy target, new env var, etc).
4. Never assume a feature, page, or integration exists unless it's documented here or you've confirmed it in the code. This repo has dead-but-intentionally-kept code (see below) — check before deleting or "fixing" it.

## What this is

Marketing site for **Masterclass Cricket**, a cricket coaching business (Chiswick/Richmond, UK). Content-driven brochure site: hero, programmes, coaches, events, contact — no user accounts, no CMS, no database. Content lives in typed TypeScript data files.

## Tech stack

- **TanStack Start** (file-based router, SSR) on **React 19** + **TypeScript**
- **Vite 8** via `@lovable.dev/vite-tanstack-config` (wraps TanStack Start, Tailwind, path aliases, Nitro build) — see [vite.config.ts](vite.config.ts) comment before editing
- **Tailwind CSS v4**
- Deployed on **Vercel** — no `vercel.json` is committed, so deployment is managed through the Vercel dashboard/Git integration rather than in-repo config (see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)). Note: `package.json` and some code comments still reference Nitro/Cloudflare Workers/`wrangler` from a prior setup — those are stale, not the current deploy target.
- Package manager: **Bun** (`bun.lock`, `bunfig.toml`) — npm lockfile also present, prefer Bun
- This project originates from **Lovable** (lovable.dev) — see [AGENTS.md](AGENTS.md) for the sync constraint (don't force-push / rewrite published history)

Full structure notes: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).
Setup, commands, env vars: [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md).

## Notable conventions and risks

- **shadcn/radix UI kit is being removed.** `src/components/ui/*` and several `src/components/sections/*` files show as deleted in git status; `components.json` (shadcn config) and many `@radix-ui/*` / other deps in `package.json` still reference the old kit. Don't assume any `components/ui` primitive beyond what currently exists on disk — check first.
- **Intentional dead code, do not delete:** [src/routes/api/indoor-interest.ts](src/routes/api/indoor-interest.ts) and [src/lib/email.ts](src/lib/email.ts) have no current caller. The in-file comments explain why they're kept (a future general enquiry form should reuse this handler). Read the comment block before touching either file.
- **Email is unfinished for production.** `src/lib/email.ts` sends via Resend's shared `onboarding@resend.dev` sender, which only delivers to the Resend account holder's own address. Going live requires domain verification in Resend and two env var changes — see the file header and [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md). Note: that file's comments describe setting the Resend key via `wrangler secret put`, which is stale guidance from a prior Cloudflare Workers setup — on Vercel, secrets are set as Vercel environment variables instead (see [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)).
- **WhatsApp is the primary contact channel**, not the email form. Most CTAs across the site deep-link to `wa.me` with a pre-filled message (see [src/data/site.ts](src/data/site.ts)).
- **No test framework is configured.** There is no `test` script and no `*.test.*`/`*.spec.*` files. Don't invent test commands.
- **`src/routeTree.gen.ts` is auto-generated** by the TanStack router plugin — never hand-edit it.
- Routing conventions are documented in [src/routes/README.md](src/routes/README.md) — read it before adding a route file.
