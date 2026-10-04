import { copyFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages nie zna tras SPA: przy odświeżeniu /FKP/kontakt zwróciłby 404.
// Kopia index.html jako 404.html sprawia, że aplikacja ładuje się dla każdego adresu.
const spaFallback = () => ({
  name: "spa-fallback-404",
  apply: "build",
  closeBundle() {
    const dist = resolve(import.meta.dirname, "dist");
    copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
  },
});

export default defineConfig({
  // Strona jest serwowana z https://kosmasprojects.github.io/FKP/
  // Po przeniesieniu na własną domenę wystarczy zmienić na "/".
  base: "/FKP/",
  plugins: [react(), spaFallback()],
});
