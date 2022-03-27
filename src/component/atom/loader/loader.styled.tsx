import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }`;

export const StyledImage = styled.img`
  animation: ${rotateAnimation} 3s infinite;

  display: block;
  margin: 50px auto;
  width: 100%;
  max-width: 200px;
`;
