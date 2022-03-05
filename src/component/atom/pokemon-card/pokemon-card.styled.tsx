import styled from 'styled-components';

type StyledImageProps = {
  isLoaded: boolean;
};

export const StyledContainerDiv = styled.div`
  margin: auto;
`;

export const StyledPokemonHeader = styled.h3`
  text-align: center;
`;

export const StyledImage = styled.img`
  cursor: pointer;
  visibility: ${({ isLoaded }: StyledImageProps) =>
    isLoaded ? 'visible' : 'hidden'};
  transform: scale(1);
  transition: 0.5s;

  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
