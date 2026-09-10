// @ts-check
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  site: "https://rossi.example.com",
  trailingSlash: "never",
  compressHTML: true,
  prefetch: {
    defaultStrategy: "hover",
  },
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    layout: "constrained",
    responsiveStyles: true,
    breakpoints: [640, 750, 828, 1080, 1280],
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
