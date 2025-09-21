import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // simula o browser
    globals: true,        // describe/it/expect sem precisar importar
    setupFiles: "./vitest.setup.ts",
  },
});
