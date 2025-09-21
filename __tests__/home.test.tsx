import React from "react";
// __tests__/home.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../src/pages/index"; // use caminho relativo


describe("Home page", () => {
  it("renderiza o texto inicial", () => {
    render(<Home />);
    expect(
      screen.getByText(/Get started by editing/i)
    ).toBeInTheDocument();
  });
});
