import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import { describe, expect, test } from "vitest";

describe("Página inicial", () => {
  test("renderiza instrução inicial", () => {
    render(<Home />);
    expect(
      screen.getByText(/Get started by editing/i)
    ).toBeInTheDocument();
  });

  test("renderiza o botão de deploy", () => {
    render(<Home />);
    expect(screen.getByText("Deploy now")).toBeInTheDocument();
  });

  test("renderiza o botão de documentação", () => {
    render(<Home />);
    expect(screen.getByText("Read our docs")).toBeInTheDocument();
  });
});
