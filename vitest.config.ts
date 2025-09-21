import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      inline: ["webidl-conversions", "whatwg-url"]
    },
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    // 🚨 impede o Vitest de tentar empacotar libs problemáticas
    exclude: ["whatwg-url", "webidl-conversions"],
  },
});
