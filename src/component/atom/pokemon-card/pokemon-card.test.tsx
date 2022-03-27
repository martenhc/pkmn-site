import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { PokemonCard } from './pokemon-card';

jest.mock('react-router-dom');

const mockedPokemon = {
  id: 3,
  name: 'Venasaur',
  spriteUrl: 'https://test.com/',
};
const pokemonCardHeading = `#${mockedPokemon.id} - ${mockedPokemon.name}`;

test('pokemon card with default values is not clickable and header is visible', async () => {
  render(<PokemonCard pokemon={mockedPokemon} />);

  const pokemonCard = await screen.findByText(pokemonCardHeading);

  const button = screen.queryByRole('button');

  expect(pokemonCard).toBeTruthy();
  expect(button).toBeFalsy();
});

test('pokemon card with isClickable to have a button and hideHeader to not have header', async () => {
  render(<PokemonCard pokemon={mockedPokemon} hideHeader isClickable />);

  const pokemonCardWithHeader = screen.queryByText(pokemonCardHeading);

  const button = await screen.findByRole('button');

  expect(pokemonCardWithHeader).toBeFalsy();
  expect(button).toBeTruthy();
});
