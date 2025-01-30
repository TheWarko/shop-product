import React from "react";
import Card from "../Card";
import Button from "../Button";
import Rating from "../Rating";
import styled from "styled-components";
import { screens } from "../../assets/styles/screens";

interface ProductProps {
  product: {
    title: string;
    rating: {
      rate: number;
    };
    price: number;
    image: string;
  };
}

const StyledCard = styled(Card)`
  position: relative;
`;

const StyledImageWrapper = styled.div`
  aspect-ratio: 1 / 1;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    max-width: 250px;
    object-fit: contain;
  }
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 32px;
  gap: 4px;
`;

const StyledTitle = styled.h3`
  text-align: left;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media ${screens.large} {
    white-space: normal;
  }
`;

const StyledRating = styled(Rating)`
  font-size: 16px;
`;

const StyledPrice = styled.p`
  font-size: 20px;
  text-align: left;
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 12px;
  right: 16px;
`;

const Product: React.FC<ProductProps> = ({ product, ...props }) => {
  return (
    <StyledCard {...props}>
      <StyledImageWrapper>
        <img src={product.image} alt={product.title} />
      </StyledImageWrapper>
      <StyledFlex>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledRating rate={8} />
      </StyledFlex>
      <StyledPrice>${product.price}</StyledPrice>

      <StyledButton>+</StyledButton>
    </StyledCard>
  );
};

export default Product;
