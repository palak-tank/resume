# Palak Tank — Resume Website

A personal resume site built with **React** and **Vite**, deployed automatically to **GitHub Pages**.

## Run it locally

Needs Node.js 18 or newer.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually http://localhost:5173).

## Update the content

All resume text lives in **`src/data/resume.js`**: profile, stats, summary, skills, experience, education and contact. Edit that file and the page updates. You don't need to touch the components.

In the summary, wrap a phrase in `**double asterisks**` to make it bold.

## Project structure

```
src/
├── data/resume.js        # all resume content
├── components/           # one component per section
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Job.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionHead.jsx
│   └── Icons.jsx
├── hooks/useReveal.js    # fade-in-on-scroll effect
├── index.css             # styles, including dark mode and print
└── main.jsx
```

## Deploy

Every push to `main` builds the site and publishes it through `.github/workflows/deploy.yml`.

One-time setup: in the GitHub repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Build for production

```bash
npm run build     # output goes to dist/
npm run preview   # serve the production build locally
```
