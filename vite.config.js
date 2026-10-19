import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

const SITE_URL = "https://sumitshinde.com.au";
const pages = { main: "index.html", projects: "projects.html", marketing: "marketing.html" };

const resolvePath = (p) => fileURLToPath(new URL(p, import.meta.url));

// Writes dist/sitemap.xml from the page entries on every build, so new pages are listed automatically.
const sitemap = () => ({
  name: "sitemap",
  apply: "build",
  generateBundle() {
    const lastmod = new Date().toISOString().slice(0, 10);
    const urls = Object.values(pages)
      .map((file) => `  <url><loc>${SITE_URL}/${file === "index.html" ? "" : file}</loc><lastmod>${lastmod}</lastmod></url>`)
      .join("\n");
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    });
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap()],
  resolve: {
    alias: {
      "@": resolvePath("./src"),
    },
  },
  build: {
    rolldownOptions: {
      input: Object.fromEntries(
        Object.entries(pages).map(([name, file]) => [name, resolvePath(`./${file}`)]),
      ),
    },
  },
});
