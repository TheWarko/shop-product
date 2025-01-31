import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ProductsList from "./ProductsList";
import theme from "../../assets/styles/theme";
import useProductList from "./useProductList";
import "jest-styled-components";

jest.mock("./useProductList");

const mockUseProductList = useProductList as jest.MockedFunction<
  typeof useProductList
>;

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    rating: { rate: 4.5 },
    price: 29.99,
    image: "image1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    rating: { rate: 4.0 },
    price: 19.99,
    image: "image2.jpg",
  },
];

describe("ProductsList component", () => {
  const renderComponent = () => {
    return render(
      <ThemeProvider theme={theme}>
        <ProductsList />
      </ThemeProvider>
    );
  };

  it("shows loading message when loading", () => {
    mockUseProductList.mockReturnValue({
      products: [],
      loading: true,
      error: "",
    });
    renderComponent();
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  it("shows error message when there is an error", () => {
    mockUseProductList.mockReturnValue({
      products: [],
      loading: false,
      error: "Something went wrong...",
    });
    renderComponent();
    const errorElement = screen.getByText("Something went wrong...");
    expect(errorElement).toBeInTheDocument();
  });

  it("renders the correct number of products", () => {
    mockUseProductList.mockReturnValue({
      products: mockProducts,
      loading: false,
      error: "",
    });
    renderComponent();
    const productElements = screen.getAllByRole("article");
    expect(productElements).toHaveLength(mockProducts.length);
  });
});
