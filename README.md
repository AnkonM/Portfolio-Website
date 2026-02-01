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

1. In the repo, go to **Settings → Pages**.
2. Source: **GitHub Actions** (recommended) or deploy the `dist` folder from a branch.
3. If using a project site (e.g. `username.github.io/repo-name`), set `base` in `vite.config.js` to the repo name:
   ```js
   base: '/repo-name/',
   ```
4. Rebuild and push the `dist` output or use a GitHub Actions workflow that runs `npm run build` and publishes `dist`.

## Live demo

[Add your live URL here after deployment.]

---

© Ankon Mukherjee. Content reflects verified CV information only.
