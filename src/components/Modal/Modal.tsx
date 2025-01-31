import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 1000;
  @media (min-width: 1200px) {
    display: none;
  }
`;

interface ModalContainerProps {
  $isExiting: boolean;
}

const ModalContainer = styled.div<ModalContainerProps>`
  background: white;
  width: 100%;
  border-radius: 10px 10px 0 0;
  padding: 20px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 2px solid #000;
  animation: ${(props) =>
    props.$isExiting
      ? css`
          ${slideOut} 0.5s forwards
        `
      : css`
          ${slideIn} 0.5s forwards
        `};
`;

const StyledTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: left;
`;

const StyledDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: left;
  margin-bottom: 16px;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 32px;
  padding: 8px;
  button {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
  p {
    font-size: 20px;
  }
`;

const TotalWrapper = styled.div`
  p {
    font-size: 20px;
    > span {
      font-weight: bold;
    }
  }
`;

const StyledButton = styled.button`
  background: linear-gradient(to bottom right, #3986fb, #38b4fb);
  color: ${({ theme }) => theme.colors.text.inverted};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  display: block;
  width: 100%;
  font-size: 20px;
  height: 48px;
  font-weight: bold;
`;

const Modal = ({
  isVisible,
  onClose,
  product,
}: {
  isVisible: boolean;
  onClose: () => void;
  product: { title: string; description: string; price: number };
}) => {
  const [isExiting, setIsExiting] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isVisible]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsExiting(true);
      setTimeout(() => {
        onClose();
        setIsExiting(false);
      }, 500); // Durata dell'animazione di uscita
    }
  };

  const handleSetTotal = (value: number) => {
    if (value < 0) {
      return;
    }
    setTotal(value);
  };

  return (
    isVisible && (
      <Backdrop onClick={handleBackdropClick}>
        <ModalContainer $isExiting={isExiting}>
          <StyledTitle>{product.title}</StyledTitle>
          <StyledDescription>{product.description}</StyledDescription>
          <StyledFlex>
            <QuantityWrapper>
              <button onClick={() => handleSetTotal(total - 1)}>-</button>
              <p>{total}</p>
              <button onClick={() => handleSetTotal(total + 1)}>+</button>
            </QuantityWrapper>
            <TotalWrapper>
              <p>
                Total:
                <span>
                  {" "}
                  $
                  {(product.price * total).toLocaleString("it-IT", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </span>
              </p>
            </TotalWrapper>
          </StyledFlex>
          <StyledButton>Add to cart</StyledButton>
        </ModalContainer>
      </Backdrop>
    )
  );
};

export default Modal;
