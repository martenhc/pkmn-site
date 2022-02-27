import { FC } from 'react';
import { PokemonGrid } from '../../molecule/pokemon-grid/pokemon-grid';
import { StyledContainerDiv } from './home-page.styled';

export const HomePage: FC = () => (
  <StyledContainerDiv>
    <PokemonGrid />
  </StyledContainerDiv>
);
