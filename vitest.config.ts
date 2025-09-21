import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // simula o browser
    globals: true,
    setupFiles: "./vitest.setup.ts",
  },
});
