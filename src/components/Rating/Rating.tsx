import styled from "styled-components";

const StyledIcon = styled.span`
  color: #ffc107;
`;

const StyledRating = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  vertical-align: middle;

  > span {
    vertical-align: top;
`;

interface RatingProps {
  rate?: number;
}

const Rating = ({ rate = 0, ...props }: RatingProps) => {
  return (
    <StyledRating {...props}>
      <StyledIcon>★</StyledIcon>
      <span>({rate})</span>
    </StyledRating>
  );
};

export default Rating;
