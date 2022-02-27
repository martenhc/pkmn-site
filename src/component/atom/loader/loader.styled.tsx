import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`;

export const StyledImage = styled.img`
  animation-duration: 3s;
  animation-name: ${rotateAnimation};
  animation-iteration-count: infinite;

  display: block;
  margin: auto;
  width: 100%;
`;
