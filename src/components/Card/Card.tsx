import styled from "styled-components";
import { ReactNode } from "react";

interface StyledCardProps {
  selected: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 18px;
  box-shadow: 0px 5px 6px rgba(50, 50, 50, 0.1);
  padding: 16px;
  cursor: pointer;
  border: ${({ selected, theme }) =>
    selected ? `2px solid ${theme.colors.primary}` : "none"};
`;

interface CardProps {
  children: ReactNode;
  selected?: boolean;
}

const Card = ({ children, selected = false, ...props }: CardProps) => {
  return (
    <StyledCard selected={selected} {...props}>
      {children}
    </StyledCard>
  );
};

export default Card;
