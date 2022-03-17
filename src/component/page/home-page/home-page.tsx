import { FC } from 'react';
import { Title } from '../../core/title/title';
import { PokemonGrid } from '../../molecule/pokemon-grid/pokemon-grid';

export const HomePage: FC = () => (
  <>
    <Title size="BIG">
      Click on a Pokémon to see more detailed information
    </Title>
    <PokemonGrid />
  </>
);
