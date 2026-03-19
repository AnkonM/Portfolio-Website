# Ankon Mukherjee — Portfolio

Static GitHub Pages deployment of the portfolio built with Next.js (App Router) + Tailwind CSS.

## Tech stack

- **Framework:** Next.js (React, App Router)
- **Styling:** Tailwind CSS
- **Animations:** `tw-animate-css` (used in the source project)
- **Backend:** None
- **Deployment target:** GitHub Pages

## Folder structure

```
Portfolio-Website/
├── app/
│   ├── page.tsx
│   └── layout.tsx
├── components/
│   └── portfolio/        # Section components (navigation, hero, about, skills, etc.)
├── styles/
├── public/
├── .github/workflows/
│   └── deploy.yml        # Builds and deploys to GitHub Pages
├── package.json
├── postcss.config.mjs
└── next.config.mjs
```

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Open the URL shown in the terminal (typically `http://localhost:3000`).

## Build (static export)

```bash
npm run build
```

The GitHub Pages workflow uploads the static-export output from `out/`.

## Deployment (GitHub Pages)

1. Push the repo to GitHub (branch `main`).
2. In the repo, go to **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. After the workflow runs, the site will be available at:
   `https://<username>.github.io/Portfolio-Website/`

## Live demo

[Add your live URL here after deployment.]

---

© Ankon Mukherjee.
