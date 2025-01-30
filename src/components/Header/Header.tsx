import styled from "styled-components";
import CartIcon from "../../assets/icons/bag-2.svg?react";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
`;

const StyledCartIcon = styled(CartIcon)`
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledFlex>
      <StyledTitle>Products</StyledTitle>
      <StyledCartIcon />
    </StyledFlex>
  );
};

export default Header;
