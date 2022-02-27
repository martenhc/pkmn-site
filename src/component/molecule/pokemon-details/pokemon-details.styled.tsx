import styled from 'styled-components';
import { HexColor } from '../../../data/enum/hex-color';

type StyledCardContentDivProps = {
  backgroundColor: keyof typeof HexColor;
};

export const StyledContainerDiv = styled.div`
  position: absolute;
  width: 20%;
`;

export const StyledCardContentDiv = styled.div`
  background-color: ${({ backgroundColor }: StyledCardContentDivProps) =>
    HexColor[backgroundColor] || backgroundColor};
  border: 1px solid black;
  border-radius: 5px;
  color: ${({ backgroundColor }: StyledCardContentDivProps) =>
    backgroundColor === 'black' ? 'white' : 'black'};
  font-weight: 500;
  line-height: 1.1rem;
  padding: 10px;
  text-align: justify;
`;
