import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import Product from "./Product";
import theme from "../../assets/styles/theme";

describe("Product component", () => {
  const product = {
    title: "t-shirt",
    rating: {
      rate: 4.5,
    },
    price: 29.9,
    image: "sample-product.jpg",
  };

  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <Product data-testid="product-card" product={product} />
      </ThemeProvider>
    );
  };

  it("renders the product title correctly", () => {
    renderComponent();
    const titleElement = screen.getByText("t-shirt");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the product image with correct alt text", () => {
    renderComponent();
    const imageElement = screen.getByAltText("t-shirt");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "sample-product.jpg");
  });

  it("renders the product price correctly", () => {
    renderComponent();
    const priceElement = screen.getByText("$29,90");
    expect(priceElement).toBeInTheDocument();
  });

  it("renders the rating component", () => {
    renderComponent();
    const ratingElement = screen.getByText("(4.5)");
    expect(ratingElement).toBeInTheDocument();
  });

  it("renders the add to cart button", () => {
    renderComponent();
    const buttonElement = screen.getByText("+");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the product not selected", () => {
    renderComponent();
    const cardElement = screen.getByTestId("product-card");
    expect(cardElement).toHaveStyleRule("border", "none");
  });
  it("renders the product selected", () => {
    render(
      <ThemeProvider theme={theme}>
        <Product data-testid="product-card" product={product} selected />
      </ThemeProvider>
    );
    const selectedCardElement = screen.getByTestId("product-card");
    expect(selectedCardElement).toHaveStyleRule(
      "border",
      `2px solid ${theme.colors.primary}`
    );
  });
});
