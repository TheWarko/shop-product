import styled from "styled-components";
import { ReactNode, ButtonHTMLAttributes } from "react";
import { lighten } from "polished";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 100%;
  color: ${({ theme }) => theme.colors.text.inverted};
  cursor: pointer;
  font-size: 1.5em;
  transition: background-color 0.3s;
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
`;

interface ButtonProps {
  children: ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
