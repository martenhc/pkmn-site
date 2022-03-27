import styled from 'styled-components';
import { HexColor } from '../../../data/enum/hex-color';

type StyledTypeDivProps = {
  backgroundColor: keyof typeof HexColor;
};

export const StyledPokemonTypeDetail = styled.div`
  height: 50%;
  margin: auto 0;
`;

export const StyledTypeDiv = styled.div`
  background-color: ${({ backgroundColor }: StyledTypeDivProps) =>
    HexColor[backgroundColor] || backgroundColor};
  border: 1px solid black;
  border-radius: 7px;
  color: ${({ backgroundColor }: StyledTypeDivProps) =>
    backgroundColor === 'black' || backgroundColor === 'dark-green'
      ? 'white'
      : 'black'};
  font-weight: bold;
  margin: 5px auto;
  padding: 3px 5px;
  text-align: center;
  width: 50%;
`;
