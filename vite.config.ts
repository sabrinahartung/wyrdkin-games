import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Project pages live under /<repo>/, so the production build must use that
  // base for assets to resolve. Dev stays at "/".
  // ⚠️ When you move to a custom domain (served at the root), change this to "/".
  base: command === "build" ? "/wyrdkin-games/" : "/",
}));
