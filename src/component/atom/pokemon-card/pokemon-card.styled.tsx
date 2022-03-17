import styled from 'styled-components';

type StyledImageProps = {
  isLoaded: boolean;
  isClickable: boolean;
};

export const StyledContainerDiv = styled.div`
  margin: auto;
`;

export const StyledPokemonHeader = styled.h3`
  text-align: center;
`;

export const StyledImage = styled.img`
  cursor: ${({ isClickable }: StyledImageProps) =>
    isClickable ? 'pointer' : 'arrow'};

  visibility: ${({ isLoaded }: StyledImageProps) =>
    isLoaded ? 'visible' : 'hidden'};
  transform: scale(1);
  transition: 0.5s;

  ${({ isClickable }: StyledImageProps) => {
    if (isClickable)
      return `:hover {
    transform: scale(1.2);
    transition: 0.5s;
  }`;
  }}
`;
