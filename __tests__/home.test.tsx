import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "../src/pages/index";

describe("Home page", () => {
  it("renderiza o texto inicial", () => {
    render(<Home />);
    expect(
      screen.getByText(/Get started by editing/i)
    ).toBeInTheDocument();
  });
});
