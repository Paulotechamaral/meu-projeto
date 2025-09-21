import React from "react";
import { vi } from "vitest";

// Mocks para Next.js
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

// Mock CSS Modules
vi.mock("@/styles/Home.module.css", () => ({}));

// Mocks críticos para webidl-conversions e whatwg-url
vi.mock("webidl-conversions", () => ({}));
vi.mock("whatwg-url", () => ({}));
