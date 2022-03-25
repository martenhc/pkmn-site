import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PokedexContextProvider } from '../../../context/PokedexContext';
import { PokemonGrid } from './pokemon-grid';

jest.mock('react-router-dom');

const POKEMON_PER_PAGE = 12;

const renderPokemonGridWithContext = () =>
  render(
    <PokedexContextProvider>
      <PokemonGrid pokemonPerPage={POKEMON_PER_PAGE} />
    </PokedexContextProvider>
  );

test('loads only the necessary pokemon on startup', async () => {
  renderPokemonGridWithContext();

  const pokemonImages = await screen.findAllByText(
    /#[0-9]{1,2} - [A-Z]([a-z]|\-)*/
  );

  expect(pokemonImages).toHaveLength(POKEMON_PER_PAGE);
});
