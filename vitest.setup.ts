import React from "react";
import { vi } from "vitest";

// Mock do next/font/google
vi.mock("next/font/google", () => ({
  Inter: () => ({}),
}));

// Mock do next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));

vi.mock("../styles/Home.module.css", () => ({}));

