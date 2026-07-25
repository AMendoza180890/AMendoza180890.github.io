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

## Deploy on GitHub Pages

This repo uses **GitHub Actions** (not Jekyll). Astro builds to `dist/` and publishes that folder.

1. Push to `main` (the workflow `.github/workflows/deploy.yml` runs automatically).
2. In GitHub → **Settings** → **Pages** → **Build and deployment** → **Source**, choose **GitHub Actions** (not “Deploy from a branch”).

If Source stays on “Deploy from a branch”, GitHub tries to build with **Jekyll** and the deploy fails on an Astro project.

Site URL: `https://amendoza180890.github.io`

## Deploy on Hostinger (Git)

Hostinger shared hosting usually **does not build Astro**. This repo includes the built **`dist/`** folder so Git deploy can publish static files.

### Required Hostinger settings

In hPanel → your website → **Git** (or Advanced → Git):

| Setting | Value |
|--------|--------|
| Repository | `https://github.com/AMendoza180890/AMendoza180890.github.io.git` |
| Branch | `main` |
| **Deploy / public directory** | **`dist`** |

Important: the document root must be **`dist`**, not the repo root.  
If Hostinger only clones into `public_html`, set the domain document root to `public_html/dist` (or equivalent).

### After each content change

1. Locally: `pnpm build`
2. Commit the updated `dist/` together with your source changes
3. `git push`
4. In Hostinger, pull / redeploy (or wait for auto-deploy)

### Manual upload (alternative)

1. `pnpm build`
2. hPanel → **Files** → **File Manager** → `public_html`
3. Upload **the contents of** `dist/` (not the `dist` folder itself as a nested wrapper if `public_html` is already the site root)

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
