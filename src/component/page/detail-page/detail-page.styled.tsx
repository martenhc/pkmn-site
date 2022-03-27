import styled, { keyframes } from 'styled-components';
import { FontSizeInPixels } from '../../../data/enum/size';

type StyledPrevNextDivProps = {
  isNext?: boolean;
};

const fadeInAnimation = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
  `;

export const StyledContainerDiv = styled.div`
  animation: ${fadeInAnimation} 1s;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  width: 100%;
`;

export const StyledContentDiv = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 50%;

  font-weight: 500;
  line-height: 1.2rem;
  margin: 75px auto;
  max-width: 900px;
  padding: 10px;
`;

const backAndForthAnimation = (isNext: boolean) => keyframes`{
  0% {
    margin-${isNext ? 'left' : 'right'}: 0;
  }
  50% {
    margin-${isNext ? 'left' : 'right'}: 5%;
  }
  100% {
    margin-${isNext ? 'left' : 'right'}: 0;
  }
}`;

export const StyledPrevNextDiv = styled.div`
  animation-duration: 2s;
  animation-name: ${({ isNext = false }: StyledPrevNextDivProps) =>
    backAndForthAnimation(isNext)};
  animation-iteration-count: infinite;

  cursor: pointer;
  font-size: ${FontSizeInPixels.BIG}px;
  font-wight: bold;
  margin: auto;
`;
