import styled from "styled-components";
import { ReactNode } from "react";

const StyledCard = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  border-radius: 18px;
  box-shadow: 0px 5px 6px rgba(50, 50, 50, 0.1);
  padding: 16px;
`;

interface CardProps {
  children: ReactNode;
}

const Card = ({ children, ...props }: CardProps) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;
