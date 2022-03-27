import { FC } from 'react';
import { Heading } from '../../core/heading/heading';
import { PokemonGrid } from '../../molecule/pokemon-grid/pokemon-grid';

export const HomePage: FC = () => (
  <>
    <Heading size="BIG">
      Click on a Pokémon to see more detailed information
    </Heading>
    <PokemonGrid />
  </>
);
