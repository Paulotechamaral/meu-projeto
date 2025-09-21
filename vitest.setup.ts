import { vi } from "vitest";
import React from "react";

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

// Mock de dependências que quebram no Node
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));
