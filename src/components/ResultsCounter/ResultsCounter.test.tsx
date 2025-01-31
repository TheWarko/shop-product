import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import ResultsCounter from "./ResultsCounter";
import theme from "../../assets/styles/theme";

describe("ResultsCounter component", () => {
  const renderComponent = (total: number) => {
    return render(
      <ThemeProvider theme={theme}>
        <ResultsCounter total={total} />
      </ThemeProvider>
    );
  };

  it("renders the correct total number of results", () => {
    renderComponent(10);
    const counterElement = screen.getByText("10 Results");
    expect(counterElement).toBeInTheDocument();
  });
});
