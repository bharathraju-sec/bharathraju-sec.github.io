# Bharath Raju Subramani — Cybersecurity Portfolio

Personal portfolio website. GitHub Pages ready. **One file to update when your resume changes.**

---

## ✏️ How to Update Your Portfolio

**All resume content lives in one file:**

```text
js/data.js
```

Open it, edit your details, save. **Every page automatically reflects the changes.**

### Common updates

| What changed | Where in data.js |
| --- | --- |
| New job | Add to `experience` array (top = most recent) |
| New project | Add to `projects` array |
| New skill / tool | Add to `skills` or `tools` arrays |
| Phone / email | `contact` object |
| New degree / cert | Add to `education` array |
| Availability status | `availability.open` → `true` / `false` |
| GitHub URL | `contact.githubUrl` |
| Skill percentages | Each skill object's `pct` value |

---

## 🗂 File Structure

```text
bharath-portfolio/
│
├── index.html                  ← Home page
│
├── pages/
│   ├── about.html              ← About + Education (data from data.js)
│   ├── experience.html         ← Work Experience  (data from data.js)
│   ├── projects.html           ← Projects + CTF   (data from data.js)
│   ├── skills.html             ← Skills + Tools   (data from data.js)
│   └── contact.html            ← Contact Form     (data from data.js)
│
├── css/
│   └── style.css               ← All styles (edit for visual changes only)
│
├── js/
│   ├── data.js     ✏️ ← EDIT THIS to update resume content
│   ├── render.js               ← Reads data.js, builds DOM (do not edit)
│   ├── nav.js                  ← Shared nav + footer injection (do not edit)
│   └── main.js                 ← Animations, scroll, interactions (do not edit)
│
└── README.md
```

---

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `bharath-portfolio`)
2. Upload all files maintaining the folder structure above
3. Go to **Settings → Pages**
4. Set Source: **Deploy from branch → main → / (root)**
5. Your site will be live at `https://yourusername.github.io/bharath-portfolio/`

---

## 🔧 Wiring Up the Contact Form

The contact form currently shows a success message on submit. To make it actually send emails:

**Option A — Formspree (free, no backend needed):**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, copy your endpoint (e.g. `https://formspree.io/f/xabcdefg`)
3. In `pages/contact.html`, replace the `form` tag's submit handler in `main.js`:

```js
// In js/main.js, replace the form submit handler with:
const formData = new FormData(form);
fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: formData });
```

**Option B — EmailJS (free tier):**
See [emailjs.com/docs](https://www.emailjs.com/docs/)

---

## 🎨 Visual Customisation

All colours are CSS variables at the top of `css/style.css`:

```css
:root {
  --accent:  #0057ff;   /* Main blue */
  --accent2: #00c2ff;   /* Cyan accent */
  --navy:    #0b1426;   /* Dark navy */
  --success: #16a34a;   /* Green */
  /* ... */
}
```

Change `--accent` to change the entire colour theme in one edit.
