import styled from "styled-components";

const StyledResultsCounter = styled.div`
  font-size: 16px;
  margin-bottom: 24px;
  font-weight: 600;
  text-align: left;
`;

interface ResultsCounterProps {
  total: number;
}

const ResultsCounter = ({ total, ...props }: ResultsCounterProps) => {
  return (
    <StyledResultsCounter {...props}>{total} Results</StyledResultsCounter>
  );
};

export default ResultsCounter;
