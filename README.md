# Ankon Mukherjee — Portfolio

A single-page portfolio site built with React (Vite), Tailwind CSS, and Framer Motion. Dark theme, recruiter-oriented, and deployable to Vercel or GitHub Pages.

## Tech stack

- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **State:** Local React state only
- **Backend:** None

## Folder structure

```
Portfolio Website/
├── .github/workflows/
│   └── deploy.yml    # GitHub Pages deploy workflow
├── public/           # Static assets (favicon)
├── src/
│   ├── components/   # Navbar, Hero, About, Skills, Experience, Education, Projects, Contact, Footer
│   ├── data/        # skills.js, experience.js, education.js, personal.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
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
3. Open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview the production build:

```bash
npm run preview
```

## Deployment

### Vercel

1. Push the repo to GitHub.
2. In [Vercel](https://vercel.com), import the repository.
3. Use default settings (framework: Vite; build: `npm run build`; output: `dist`).
4. Deploy. The live URL will be provided by Vercel.

### GitHub Pages

The repo is set up to deploy via **GitHub Actions**:

1. **Push the repo to GitHub** (default branch `main`; if you use `master`, edit `.github/workflows/deploy.yml` and change `branches: ['main']` to `branches: ['master']`).

2. **Enable GitHub Pages:** In the repo go to **Settings → Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. **Repo name:** `vite.config.js` uses `base: '/Portfolio-Website/'`. If your repo name is different (e.g. `portfolio-website`), change it to match:
   ```js
   base: '/your-repo-name/',
   ```

4. **Deploy:** Push to `main` (or run the workflow manually under **Actions → Deploy to GitHub Pages**). After the workflow finishes, the site will be at `https://<username>.github.io/Portfolio-Website/`.

## Live demo

[Add your live URL here after deployment.]

---

© Ankon Mukherjee. Content reflects verified CV information only.
