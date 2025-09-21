import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    server: {
      deps: {
        inline: ["next/font/google", "next/image"], // substitui o deprecated deps.inline
      },
    },
  },
});
