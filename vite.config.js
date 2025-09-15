import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 👇 IMPORTANT: repo name as base
  base: "/JErota/",
  build: {
    outDir: "docs" // 👈 so Pages can serve from /docs on main
  }
});
