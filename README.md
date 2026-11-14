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
