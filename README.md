# Bharath Raju Subramani — Portfolio

Personal portfolio for Bharath Raju Subramani — Cybersecurity, Network Engineering and AI Security, Sydney NSW.

A single static page built with plain JavaScript — no framework, no build step.

## Files

| File | What it is |
| --- | --- |
| `js/data.js` | ✏️ **All the content** — edit this file to update the site |
| `js/render.js` | Builds every section of the page from `data.js` |
| `js/main.js` | Interactions: nav, scroll reveal, counters, terminal typing, network background |
| `css/style.css` | All styles |
| `index.html` | Page shell, SEO tags and script loading |
| `resume.pdf` | Résumé served by the "Download résumé" buttons |

## Run locally

```bash
python -m http.server 5173
```

Then open http://localhost:5173.

## Deploy on Vercel

1. Import this repository in Vercel.
2. Framework preset: **Other**. Leave the build command empty and the output directory as the root.
3. After the first deploy, add the final URL to the commented `og:url` / `canonical` lines near the top of `index.html`.

## Updating

- **Résumé:** replace `resume.pdf` with the new file (keep the same name).
- **Content:** open `js/data.js` — jobs, projects, skills, certifications and contact details are plain lists. Add an item to a list and it appears on the page.
  - `**text**` makes text bold; a tag starting with `*` (e.g. `"*Python"`) is shown as a core skill.
  - The first project with `featured: true` gets the large card with the diagram.
- **Colours:** change the variables in `:root` at the top of `css/style.css` (`--accent` is the green).
