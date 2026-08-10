import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Two real HTML entries instead of a client-side router: the studio page and
  // the Whiskers In The Sand game page. Each ships its own <title>/OG tags, and
  // GitHub Pages serves /whiskers-in-the-sand/ as a plain static file — no
  // 404.html rewrite needed.
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        whiskers: "whiskers-in-the-sand/index.html",
      },
    },
  },
  // Project pages live under /<repo>/, so the production build must use that
  // base for assets to resolve. Dev stays at "/".
  // ⚠️ When you move to a custom domain (served at the root), change this to "/".
  base: command === "build" ? "/wyrdkin-games/" : "/",
}));
