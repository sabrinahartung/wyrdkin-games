# Last Stop Games

Prototype website for our indie game studio — built in our spare time.

> ⚠️ Work in progress. Logo, copy, and game art are placeholders for now.

## Preview

![Last Stop Games — full page layout](design/webdesign.png)

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v3 (custom retro pixel theme)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type-check + production build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Editing content

All site copy and data (studio name, games, team, coming soon, devlog, socials)
live in [`src/content.ts`](src/content.ts) — edit there. Page sections are in
`src/components/`; the logo lives in `Navbar.tsx` and `Hero.tsx`.
