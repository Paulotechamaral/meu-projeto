import { vi } from "vitest";
import React from "react";

// 🚨 Mock crítico ANTES de tudo
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));

// Caso o Node tente carregar essas libs:
try {
  // @ts-ignore
  require.cache[require.resolve("whatwg-url")] = { exports: {} };
  // @ts-ignore
  require.cache[require.resolve("webidl-conversions")] = { exports: {} };
} catch {}

// Mock de CSS modules
vi.mock("@/styles/Home.module.css", () => ({}));

// Mock de next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

// Mock de next/font/google
vi.mock("next/font/google", () => ({
  Inter: () => ({ className: "inter-font" }),
}));
