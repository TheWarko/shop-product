import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Card from "./Card";
import theme from "../../assets/styles/theme";

describe("Card component", () => {
  const renderComponent = (children: React.ReactNode) => {
    return render(
      <ThemeProvider theme={theme}>
        <Card>{children}</Card>
      </ThemeProvider>
    );
  };

  it("renders correctly with given children", () => {
    renderComponent(<div>Card Content</div>);
    const cardElement = screen.getByText("Card Content");
    expect(cardElement).toBeInTheDocument();
  });
});
