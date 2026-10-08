import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://asociacionlajadiguillin.cl",
  output: "static",
  trailingSlash: "always",
  compressHTML: true,
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
