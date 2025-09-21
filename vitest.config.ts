import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",   // simula o browser
    globals: true,          // permite usar describe/it/expect sem importar
    setupFiles: "./vitest.setup.ts",  // mocks antes de qualquer teste
    deps: {
      inline: ["next/font/google", "next/image"], // força processamento inline
    },
  },
});
