import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",  // <-- importante para testes que usam DOM
    globals: true,
    setupFiles: "./vitest.setup.ts", // se precisar de setup adicional
  },
});
