import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Product from "../../components/Product";
import useProductList from "./useProductList";
import ResultsCounter from "../../components/ResultsCounter";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
`;

const ProductsList = () => {
  const { products, loading, error } = useProductList();

  return (
    <>
      <Header />

      {error && <p>Something went wrong...</p>}
      {loading && <p>Loading...</p>}
      {products && (
        <>
          <ResultsCounter total={products.length} />
          <StyledGrid>
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </StyledGrid>
        </>
      )}
    </>
  );
};

export default ProductsList;
