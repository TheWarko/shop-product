import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Button from "./Button";
import theme from "../../assets/styles/theme";

describe("Button component", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <Button>Click me</Button>
      </ThemeProvider>
    );
  };

  it("renders correctly with given children", () => {
    renderComponent();
    const buttonElement = screen.getByText("Click me");
    expect(buttonElement).toBeInTheDocument();
  });
});
