import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Rating from "./Rating";
import theme from "../../assets/styles/theme";

describe("Rating component", () => {
  const renderComponent = (rate?: number) => {
    return render(
      <ThemeProvider theme={theme}>
        <Rating rate={rate} />
      </ThemeProvider>
    );
  };

  it("renders the default rating correctly", () => {
    renderComponent();
    const ratingElement = screen.getByText("(0)");
    expect(ratingElement).toBeInTheDocument();
  });

  it("renders the provided rating correctly", () => {
    renderComponent(4.5);
    const ratingElement = screen.getByText("(4.5)");
    expect(ratingElement).toBeInTheDocument();
  });

  it("renders the star icon", () => {
    renderComponent();
    const starElement = screen.getByText("★");
    expect(starElement).toBeInTheDocument();
  });

  it("applies correct styles to the star icon", () => {
    const { container } = renderComponent();
    const starElement = container.querySelector("span");
    expect(starElement).toHaveStyleRule("color", "#ffc107");
  });
});
