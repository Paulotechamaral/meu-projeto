import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    // substitui deps.inline
    deps: {
      optimizer: {
        web: {
          include: ["react", "react-dom"], // coloque aqui os pacotes que precisar inline
        },
      },
    },
  },
});
