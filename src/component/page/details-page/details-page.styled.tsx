import styled from 'styled-components';
import { HexColor } from '../../../data/enum/hex-color';

type StyledTypeDivProps = {
  backgroundColor: keyof typeof HexColor;
};

// background-color: ${({ backgroundColor }: StyledContainerDivProps) =>
// HexColor[backgroundColor] || backgroundColor};
// color: ${({ backgroundColor }: StyledContainerDivProps) =>
// backgroundColor === 'black' ? 'white' : 'black'};
// export const StyledContainerDiv = styled.div`
//   transition: 0.5s;
// `;

export const StyledCardContentDiv = styled.div`
  font-weight: 500;
  line-height: 1.2rem;
  padding: 10px;
`;

export const StyledPreviousFormImage = styled.img`
  height: 60px;
`;

export const StyledTypeDiv = styled.div`
  background-color: ${({ backgroundColor }: StyledTypeDivProps) =>
    HexColor[backgroundColor] || backgroundColor};
  border: 1px solid black;
  border-radius: 7px;
  color: ${({ backgroundColor }: StyledTypeDivProps) =>
    backgroundColor === 'black' ? 'white' : 'black'};
  padding: 3px 5px;
`;
