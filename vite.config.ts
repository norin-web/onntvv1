import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // No custom domain: GitHub Pages serves the site at norin-web.github.io/onntvv1/.
  // If a custom domain is added later, switch to base "/" and add public/CNAME in the same commit.
  base: "/onntvv1/",
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
