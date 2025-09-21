import { vi } from "vitest";
import React from "react";
import { mock } from "node:test";
import { Geist } from "./__mocks__/next/font/google";

// Mock CSS modules
vi.mock("../src/styles/Home.module.css", () => ({}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

// Mock de fonts
vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

vi.mock("next/font/local", () => ({
  Geist: () => ({ className: "geist-font" }),
  Geist_Mono: () => ({ className: "geist-mono-font" }),
}));
// Mock de dependências que quebram no Node
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));
