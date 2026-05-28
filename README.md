# Eldrin Bernardino — Portfolio

A personal portfolio site showcasing UI/UX and web design work.

🌐 **Live Site:** [https://ldrin01.github.io/eldrinBernardinoPortfolio/](https://ldrin01.github.io/eldrinBernardinoPortfolio/)

---

## About

This portfolio highlights selected projects across product design, web design, and UI/UX — built and maintained as a living document of my work and growth as a designer.

## Tech Stack

- Nuxt 3 (Static Site Generation)
- Tailwind CSS
- Deployed via GitHub Pages

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Generate static output
npm run generate
```

## Deployment

This site is deployed to GitHub Pages using `git subtree`:

```bash
npm run generate
git add .
git commit -m "update"
git subtree split --prefix .output/public -b gh-pages-temp
git push origin gh-pages-temp:gh-pages --force
git branch -D gh-pages-temp
```

---

Built by [Eldrin Bernardino](https://github.com/ldrin01) 