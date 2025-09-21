import React from "react";
import { vi } from "vitest";

// Mock CSS modules
vi.mock("../src/styles/Home.module.css", () => ({}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

// Mock fonts se estiver usando
vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

// Mock de dependências que quebram no node
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));
