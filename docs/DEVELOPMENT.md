# Development

## Setup

Package manager is **Bun** (`bun.lock` + `bunfig.toml` present; `package-lock.json` also exists — prefer Bun for new installs).

```bash
bun install
cp .env.example .env
```

`bunfig.toml` enforces a 24h "supply-chain guard": new/updated packages published less than 24h ago are blocked from install unless explicitly excluded. Ask the user before adding a package to `minimumReleaseAgeExcludes`.

## Commands

All defined in [package.json](../package.json):

| Command | Does |
|---|---|
| `bun run dev` | `vite dev` — local dev server |
| `bun run build` | `vite build` — production build (Netlify Functions target) |
| `bun run build:dev` | `vite build --mode development` |
| `bun run preview` | `vite preview` |
| `bun run lint` | `eslint .` |
| `bun run format` | `prettier --write .` |

There is **no test script** and no test framework configured — don't invent `bun test` / `npm test` commands for this repo unless one is added.

## Environment variables

Defined in [.env.example](../.env.example). Copy to `.env` for local dev; in production set them in **Netlify environment variables** (Project configuration → Environment variables).

| Variable | Purpose | Notes |
|---|---|---|
| `RESEND_API_KEY` | Auth for the Resend email API (`src/lib/email.ts`) | Secret. Set in the Netlify project's environment variables. Missing key = enquiry send fails loudly (by design, not silently). |
| `ENQUIRY_TO_EMAIL` | Destination address for enquiry notification emails | While using Resend's shared `onboarding@resend.dev` sender, Resend only delivers to the address the Resend account itself is registered with — this must match that, not the club inbox, until the domain is verified. |
| `ENQUIRY_FROM_EMAIL` | From-address for enquiry emails | Optional; defaults to `Masterclass Cricket <onboarding@resend.dev>`. Switch to a verified `masterclasscricket.co.uk` address before launch. |

See the header comment in [src/lib/email.ts](../src/lib/email.ts) for the full setup/launch checklist.

## Deployment

The app is configured for **Netlify** in [netlify.toml](../netlify.toml). The official Netlify TanStack Start Vite plugin packages SSR and server routes as Netlify Functions while publishing browser assets from `dist/client`.

Connect the repository in Netlify and deploy with the committed settings. Before launch, add the variables above for every required deploy context (Production and, if needed, Deploy Previews). Do not add a catch-all SPA redirect: TanStack Start and the Netlify adapter own request routing.

This repo is connected to **Lovable** (lovable.dev) — see [AGENTS.md](../AGENTS.md). Avoid force-pushing or rewriting published git history on the synced branch; it breaks Lovable's mirror of the project.

## Linting / formatting

- ESLint config: [eslint.config.js](../eslint.config.js) — typescript-eslint recommended + react-hooks + react-refresh + Prettier integration. Notably blocks importing the Next.js `server-only` package (use `*.server.ts` naming or `@tanstack/react-start/server-only` instead). `@typescript-eslint/no-unused-vars` is off.
- Prettier via `bun run format`.
- `tsconfig.json`: strict mode on, `noUnusedLocals`/`noUnusedParameters` off, `@/*` path alias to `src/*`.
