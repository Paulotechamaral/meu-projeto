import { vi } from "vitest";
import React from "react";

// 🚨 Mock crítico ANTES de tudo
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));

if (typeof globalThis.URL === "undefined") {
  globalThis.URL = class {
    href: string;
    constructor(href: string) { this.href = href; }
  } as any;
}

vi.mock("whatwg-url", () => ({ URL: globalThis.URL }));
vi.mock("webidl-conversions", () => ({}));


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
