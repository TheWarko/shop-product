import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Product from "../../components/Product";
import useProductList from "./useProductList";
import ResultsCounter from "../../components/ResultsCounter";
import Modal from "../../components/Modal";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 32px;
`;

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

const ProductsList = () => {
  const { products, loading, error } = useProductList();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalVisible(true);
  };

  return (
    <>
      <Header />

      {error && <p>Something went wrong...</p>}
      {loading && (
        <StyledLoading>
          <p>Loading...</p>
        </StyledLoading>
      )}
      {products && (
        <>
          <ResultsCounter total={products.length} />
          <StyledGrid>
            {products.map((product) => (
              <article
                key={product.id}
                onClick={() => handleProductClick(product)}
              >
                <Product
                  selected={product.id === selectedProduct?.id}
                  product={product}
                />
              </article>
            ))}
          </StyledGrid>
          {selectedProduct && (
            <Modal
              isVisible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              product={selectedProduct}
            />
          )}
        </>
      )}
    </>
  );
};

export default ProductsList;
