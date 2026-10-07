import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Zapasowa strona 404 dla hostingów bez .htaccess (np. GitHub Pages).
const spaFallback = () => ({
  name: "spa-fallback-404",
  apply: "build",
  closeBundle() {
    const dist = resolve(import.meta.dirname, "dist");
    copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
  },
});

const robotsMeta = (noindex) => ({
  name: "robots-noindex",
  transformIndexHtml: () =>
    noindex
      ? [{ tag: "meta", attrs: { name: "robots", content: "noindex, nofollow" }, injectTo: "head" }]
      : [],
});

export default defineConfig(({ mode }) => ({
  // Ścieżka, pod którą działa strona. Na subdomenie / własnej domenie: "/".
  // (Dla GitHub Pages pod /FKP/ ustaw zmienną BASE_PATH=/FKP/ przy budowaniu.)
  base: process.env.BASE_PATH || "/",
  plugins: [
    react(),
    spaFallback(),
    // Wersja testowa (npm run build:new → new.fundacjakochaniapoznania.pl)
    // dostaje znacznik noindex, żeby nie trafiła do Google.
    robotsMeta(mode === "staging" || process.env.NOINDEX === "1"),
  ],
}));
