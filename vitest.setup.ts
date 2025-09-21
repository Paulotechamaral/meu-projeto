import React from "react";
import { vi } from "vitest";

// Mock do CSS modules
vi.mock("@/styles/Home.module.css", () => ({}));

// Mock de next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

// Mock de next/font/google se ainda estiver usando
vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));
