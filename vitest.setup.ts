import React from "react";
import { vi } from "vitest";

// Mock do next/font/google para evitar erro com Geist
vi.mock("next/font/google", () => ({
  Geist: () => ({}),
  Geist_Mono: () => ({})
}));

// Mock do next/image para não quebrar
vi.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    return React.createElement('img', props);
  },
}));
