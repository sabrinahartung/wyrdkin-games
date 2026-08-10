# Wyrdkin Games

Prototype website for our indie game studio — built in our spare time.

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

## Pages

Two real HTML entry points (no client-side router), both listed in
[`vite.config.ts`](vite.config.ts):

| URL | Entry | Source |
| --- | --- | --- |
| `/` | `index.html` | `src/` — the studio page |
| `/whiskers-in-the-sand/` | `whiskers-in-the-sand/index.html` | `src/game/` — the game page |

Each page ships its own `<title>` and social tags, and GitHub Pages serves the
subpage as a plain static file — no `404.html` redirect trick needed.

## Editing content

- Studio copy + the homepage game showcase: [`src/content.ts`](src/content.ts)
  (sections in `src/components/`).
- Whiskers In The Sand copy — pitch, features, items, cats, screenshots,
  trailer, Steam links: [`src/game/content.ts`](src/game/content.ts)
  (sections in `src/game/components/`).

Game art lives in `public/` (`art/`, `features/`, `items/`, `portraits/`,
`screens/`). Reference it through the `asset()` helper so paths stay correct
under the GitHub Pages base path.

## Theme

Two source colors in [`src/theme.ts`](src/theme.ts) (`accent` + `base`, both
taken from the logo) derive the studio palette. Tweak them live via the 🎨 Theme
Lab panel in dev, then Export and paste the result into `src/index.css`.

The game page keeps its own ancient-Egypt palette (`tomb`, `sand`, `dune`,
`gold`, `papyrus`…) — it's switched on by the `theme-desert` class on `<body>`
in `whiskers-in-the-sand/index.html`, which re-points the shared `--gold` and
`--muted` vars and restyles `.pixel-card`. Both palettes live in
[`tailwind.config.js`](tailwind.config.js).
