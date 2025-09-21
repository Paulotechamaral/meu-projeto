import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "@/pages/index";

describe("Home page", () => {
  it("renderiza o texto inicial", () => {
    render(<Home />);
    expect(
      screen.getByText(/Get started by editing/i)
    ).toBeInTheDocument();
  });
});
