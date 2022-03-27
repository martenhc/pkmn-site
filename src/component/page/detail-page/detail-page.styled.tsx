import styled, { keyframes } from 'styled-components';

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

const backAndForthAnimation = (isNext: boolean) => {
  const side = isNext ? 'left' : 'right';

  return keyframes`{
  0% {
    margin-${side}: 0;
  }
  50% {
    margin-${side}: 5%;
  }
  100% {
    margin-${side}: 0;
  }
}`;
};

export const StyledPrevNextButton = styled.button`
  animation-duration: 2s;
  animation-name: ${({ isNext = false }: StyledPrevNextDivProps) =>
    backAndForthAnimation(isNext)};
  animation-iteration-count: infinite;

  background: url('/svg/arrow.svg') no-repeat center center;

  cursor: pointer;
  height: 40px;
  margin: auto;
  transform: ${({ isNext = false }: StyledPrevNextDivProps) =>
    `rotate(${isNext ? '90deg' : '270deg'})`};
  width: 40px;
`;

export const StyledErrorContainerDiv = styled.div`
  margin: 75px auto;
`;
