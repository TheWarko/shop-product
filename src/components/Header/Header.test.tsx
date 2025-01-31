import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import theme from "../../assets/styles/theme";

describe("Header component", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
  };

  it("renders correctly with title", () => {
    renderComponent();
    const titleElement = screen.getByText("Products");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the cart icon", () => {
    renderComponent();
    const iconElement = document.querySelector("svg");
    expect(iconElement).toBeInTheDocument();
  });
});
