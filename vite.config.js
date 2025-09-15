import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react"; // keep if installed

export default defineConfig({
  // plugins: [react()],
  base: "/JErota/",        // <— IMPORTANT: repo name with slashes
  build: { outDir: "docs" } // <— Pages serves from /docs
});
