# shardreel-site

Landing page and documentation for **shardreel**, a local tool that turns long gameplay recordings into vertical 9:16 clips on Apple Silicon Macs and Linux (including WSL2).

Built with Next.js, Fumadocs and Tailwind. Package manager: bun.

## Run

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
bun run start    # serve the production build
```

Set `NEXT_PUBLIC_SITE_URL` to your deployed URL so social-card links resolve.

## Analytics

The site uses [PostHog](https://posthog.com) for pageviews, clicks and time on page. It is off unless `NEXT_PUBLIC_POSTHOG_KEY` is set. Copy `.env.example` to `.env.local`, add your project key from PostHog, and use `NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com` for an EU project. Anonymous visitors get no person profile, and Do Not Track is respected. Rebuild after changing the variables, since `NEXT_PUBLIC_*` values are baked in at build time.

## Layout

| Path | What it is |
| --- | --- |
| `app/(home)/page.tsx` | Landing page |
| `components/landing.tsx` | Landing page sections |
| `components/logo.tsx` | Logo mark and wordmark |
| `content/docs/` | Documentation (MDX). Folder `meta.json` files set page order |
| `lib/layout.shared.tsx` | Nav title and links |
| `app/global.css` | Black and white theme tokens, Geist fonts |

## Naming

The product is shardreel. The engine's package, data folder (`~/.clipforge`) and environment variables (`CLIPFORGE_*`) keep the internal name `clipforge`.
