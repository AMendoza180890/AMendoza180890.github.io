# AMendoza Portfolio (Astro)

Static portfolio rebuilt with **Astro**, keeping your content, teal accent (`#1b847c`), and pages (Home, Resume, Projects).

## Features

- **Static export** (`dist/`) — works on Hostinger shared hosting
- **English + Spanish** — routes `/en/` and `/es/`
- **Language detection** — uses browser/OS language (`navigator.language`) on first visit, then remembers your choice
- **Light / dark theme** — follows system `prefers-color-scheme`, with a manual toggle (saved in `localStorage`)
- Same content as the previous BootstrapMade template

## Requirements

- Node.js 20+
- **pnpm** (this project uses pnpm as its package manager)

If you don't have pnpm yet:

```bash
npm install -g pnpm
```

Or enable it through Corepack:

```bash
corepack enable pnpm
```

## Local development

```bash
pnpm install
pnpm dev
```

Open the URL Astro prints (usually `http://localhost:4321`).

## Build

```bash
pnpm build
pnpm preview
```

Production files are written to **`dist/`**.

## Deploy on Hostinger (Git)

Because Astro is a build step, Hostinger must publish **`dist/`**, not the repo root.

### Option A — Hostinger Node / build (recommended if available)

In Hostinger → Website → Git / Node.js:

| Setting | Value |
|--------|--------|
| Build command | `pnpm install --frozen-lockfile && pnpm build` |
| Output / public directory | `dist` |
| Node version | 20+ |

If the host cannot run `pnpm` directly, prefix it with Corepack:
`corepack enable pnpm && pnpm install --frozen-lockfile && pnpm build`

### Option B — Deploy only the build output

1. Run `pnpm build` locally (or in GitHub Actions).
2. Point Hostinger’s document root at the contents of `dist/`, **or**
3. Use a GitHub Action that builds and syncs `dist/` to Hostinger via FTP/SFTP.

### Important URL change

Old URLs:

- `/index.html`, `/resume.html`, `/projects.html`

New URLs:

- `/` → auto-redirects to `/en/` or `/es/`
- `/en/`, `/en/resume/`, `/en/projects/`
- `/es/`, `/es/resume/`, `/es/projects/`

Update any Hostinger redirects or bookmarks if needed.

## Project structure

```
src/
  components/   Header, Footer, theme & language controls
  i18n/         EN/ES strings + resume/projects content
  layouts/      BaseLayout
  pages/        en/ and es/ routes + root locale redirect
  styles/       global.css (dark/light tokens)
  scripts/      nav, theme, typed text
public/         images, Resume.pdf, favicons, _headers
_legacy/        previous HTML template (reference only)
```

Root config files:

- `astro.config.mjs` — static output, i18n (`en`/`es`)
- `pnpm-workspace.yaml` — allows `esbuild` / `sharp` install scripts
- `pnpm-lock.yaml` — lockfile (commit this; do not use `package-lock.json`)

## Editing content

- Texts / UI labels: `src/i18n/ui.ts`
- Resume, projects, contact links: `src/i18n/content.ts`
- Colors / themes: `src/styles/global.css`
