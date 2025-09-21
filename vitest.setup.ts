import React from "react";
import { vi } from "vitest";

// Mock correto para next/font/google
vi.mock("next/font/google", () => {
  return {
    Inter: vi.fn(() => ({
      className: "mocked-inter",
      variable: "--font-inter",
    })),
  };
});

// Mock para next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => React.createElement("img", props),
}));
