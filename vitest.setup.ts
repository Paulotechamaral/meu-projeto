import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock("next/font/google", () => {
  return {
    Geist: () => ({}),
    Geist_Mono: () => ({}),
  };
});