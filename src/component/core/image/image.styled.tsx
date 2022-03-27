import styled from 'styled-components';

type StyledImageProps = {
  isLoaded: boolean;
  withOnHoverScaling: boolean;
};

export const StyledImage = styled.img`
  visibility: ${({ isLoaded }: StyledImageProps) =>
    isLoaded ? 'visible' : 'hidden'};
  transform: scale(1);
  transition: 0.5s;
  width: 100%;

  ${({ withOnHoverScaling }: StyledImageProps) => {
    if (withOnHoverScaling)
      return `:hover {
          transform: scale(1.2);
          transition: 0.5s;
      }`;
  }}
`;
