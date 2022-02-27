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
  visibility: ${({ isLoaded }: StyledImageProps) =>
    isLoaded ? 'visible' : 'hidden'};
`;
