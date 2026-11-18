# Bharath Raju Subramani — Portfolio

Personal portfolio for Bharath Raju Subramani — Cybersecurity, Network Engineering and AI Security, Sydney NSW.

A single static page: plain HTML, CSS and JavaScript with no build step.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The whole site — content, styles and scripts |
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
- **Content:** each section in `index.html` is marked with an HTML comment (`<!-- EXPERIENCE -->`, `<!-- PROJECTS -->`, …).
- **Colours:** change the variables in `:root` at the top of the `<style>` block (`--accent` is the green).
