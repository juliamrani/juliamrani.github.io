# Portfolio — Julia El Amrani

A personal portfolio built with React, tracing my journey as a student at EPITECH: a first year focused on web development, and a second year specializing in Data & AI. Inspired by the sea, calm, deep, and always moving forward.

**Live site:** [juliamrani.github.io](https://juliamrani.github.io)

---

### Site Structure

- **Landing page** - Underwater video background, my name and a typewriter tagline
- **About** - Short introduction, academic background, professional experiences and skills
- **Projects** - School projects sorted by year (1st year · Web / 2nd year · Data & AI), with tech badges and an eye icon to preview each project on hover
- **This Year** - A reflection on my year at EPITECH, hackathons, and growth
- **Contact** - Contact form and CV download

---

### Installation

```bash
git clone https://github.com/juliamrani/juliamrani.github.io.git
cd juliamrani.github.io
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

### Where to Edit the Content

The texts are kept apart from the layout, so updating the portfolio does not require touching the components:

- `src/components/General/Projects/projectsData.js` - all projects, sorted by year
- `src/components/General/About/aboutData.js` - introduction, education, experiences and skills
- `src/components/General/common/` - shared components (cards, titles, colors)
- `public/cv.pdf` - the CV downloaded from the Contact section

---

### Deployment

The portfolio is deployed on **GitHub Pages** with GitHub Actions: every push to `main` builds the site and publishes it to the `gh-pages` branch (see `.github/workflows/deploy.yml`).

---

### Technologies and Choices

- [React](https://react.dev/) + JSX - Prior knowledge, wanted to explore a little bit more
- [Vite](https://vitejs.dev/) - Fast dev experience with instant reload
- [Material UI](https://mui.com/) - Prior knowledge, customizable component library
- [Framer Motion](https://motion.dev/) - Entrance animations
- [Formspree](https://formspree.io/) - Easy contact form without a backend
