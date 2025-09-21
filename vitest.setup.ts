import React from "react";
import { vi } from "vitest";

// Mock CSS modules
vi.mock("@/styles/Home.module.css", () => ({}));

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

// Mock next/font/google
vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

// Mock módulos que quebram no CI
vi.mock("whatwg-url", () => ({}));
vi.mock("webidl-conversions", () => ({}));
