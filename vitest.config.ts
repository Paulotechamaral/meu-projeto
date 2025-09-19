import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  test: {
    environment: "jsdom", // simula o browser
    globals: true,        // permite usar describe/it/expect sem importar
    setupFiles: "./vitest.setup.ts" // se você tiver configs extras
  },
});