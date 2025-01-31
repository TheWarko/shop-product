import styled from "styled-components";
import BagIcon from "../../assets/icons/bag-2";

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
`;

const StyledCartIconWrapper = styled.div`
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledFlex>
      <StyledTitle>Products</StyledTitle>
      <StyledCartIconWrapper>
        <BagIcon />
      </StyledCartIconWrapper>
    </StyledFlex>
  );
};

export default Header;
