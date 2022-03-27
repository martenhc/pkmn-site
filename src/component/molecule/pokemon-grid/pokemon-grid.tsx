import { FC, useContext, useEffect, useState } from 'react';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import { PokemonBase } from '../../../data/type/pokemon';
import { PokemonCard } from '../../atom/pokemon-card/pokemon-card';
import {
  StyledCardCointainerDiv,
  StyledContainerDiv,
} from './pokemon-grid.styled';

type PokemonGridProps = {
  startingOffset?: number;
  pokemonPerPage?: number;
};

export const PokemonGrid: FC<PokemonGridProps> = ({
  startingOffset = 0,
  pokemonPerPage = 12,
}) => {
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
        innerOffset += pokemonPerPage;
        setOffset(innerOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [setOffset, startingOffset, pokemonPerPage]);

  useEffect(() => {
    pokedex
      .getPokemonInInterval({ offset, limit: pokemonPerPage })
      .then((addedPokemonList) => {
        setPokemonList([...pokemonList, ...addedPokemonList]);
      });
    // Setting pokemonList as a dependency would loop indefinitely.
    // We only want to run this at mount, ideally.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, pokedex, setPokemonList]);

  return (
    <StyledContainerDiv>
      {pokemonList.map((pokemon) => (
        <StyledCardCointainerDiv>
          <PokemonCard key={pokemon.id} pokemon={pokemon} isClickable />
        </StyledCardCointainerDiv>
      ))}
    </StyledContainerDiv>
  );
};
