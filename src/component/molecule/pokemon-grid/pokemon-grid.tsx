import { FC, useContext, useEffect, useState } from 'react';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import { PokemonBase } from '../../../data/type/pokemon';
import { PokemonCard } from '../../atom/pokemon-card/pokemon-card';
import { StyledContainerDiv } from './pokemon-grid.styled';

type PokemonGridProps = {
  startingOffset?: number;
};

const POKEMON_PER_PAGE = 12;

export const PokemonGrid: FC<PokemonGridProps> = ({ startingOffset = 0 }) => {
  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;

  const [offset, setOffset] = useState(startingOffset);
  const [pokemonList, setPokemonList] = useState<Array<PokemonBase>>([]);

  useEffect(() => {
    let innerOffset = startingOffset;

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1
      ) {
        innerOffset += POKEMON_PER_PAGE;
        setOffset(innerOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setOffset]);

  useEffect(() => {
    pokedex
      .getPokemonInInterval({ offset, limit: POKEMON_PER_PAGE })
      .then((addedPokemonList) => {
        setPokemonList([...pokemonList, ...addedPokemonList]);
      });
  }, [offset]);

  return (
    <StyledContainerDiv>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </StyledContainerDiv>
  );
};
