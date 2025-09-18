import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    globals: true,             // permite usar describe/test sem importar
    environment: "jsdom",      // simula navegador
    setupFiles: "./vitest.setup.ts", 
    include: ["**/__tests__/**/*.ts?(x)"], // garante que pegue seus testes
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
