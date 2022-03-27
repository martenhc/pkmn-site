import styled from 'styled-components';

type StyledButtonProps = {
  backgroundUrl: string;
};

export const StyledFeatureDiv = styled.div`
  font-weight: bold;
  margin: 15px 0;
  width: 100%;
`;

export const StyledPreEvolutionDiv = styled.div`
  display: flex;
  margin-top: 10%;

  div {
    align-self: center;

    span {
      font-weight: bold;
    }
  }
`;

export const StyledButton = styled.button`
  background: ${({ backgroundUrl }: StyledButtonProps) =>
    `url(${backgroundUrl}) no-repeat center`};
  background-size: 100%;
  border: none;
  cursor: pointer;
  height: 75px;
  width: 75px;
`;
