import { FC } from 'react';
import { PokemonGrid } from '../../molecule/pokemon-grid/pokemon-grid';
import { StyledTextContainer } from './home-page.styled';

export const HomePage: FC = () => (
  <div>
    <StyledTextContainer>
      Click on a Pokémon to see more detailed information
    </StyledTextContainer>
    <PokemonGrid />
  </div>
);
