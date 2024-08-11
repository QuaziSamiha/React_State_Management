import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// ============= modified =========
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ============= modified =========
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
