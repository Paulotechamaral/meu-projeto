import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",        // simula o browser
    globals: true,               // permite describe/it/expect sem importar
    setupFiles: "./vitest.setup.ts",
    deps: {
      inline: ["next/font/google"], // força o Vitest a não transformar esse pacote
    },
  },
});
