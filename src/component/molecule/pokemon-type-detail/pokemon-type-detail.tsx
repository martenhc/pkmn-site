import { useContext, useEffect, FC, useState } from 'react';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import PokemonType from '../../../data/enum/pokemon-type';
import { getPokemonTypeHexColorByTypeName } from '../../../data/util/color';
import { Heading } from '../../core/heading/heading';
import {
  StyledTypeDiv,
  StyledTypesContainerDiv,
} from './pokemon-type-detail.styled';

type PokemonTypeDetailProps = {
  pokemonId: number;
};

export const PokemonTypeDetail: FC<PokemonTypeDetailProps> = ({
  pokemonId,
}) => {
  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;
  const [currentPokemonTypes, setCurrentPokemonTypes] = useState<
    Array<keyof typeof PokemonType>
  >([]);

  useEffect(() => {
    let isMounted = true;

    pokedex.getPokemonTypesById(pokemonId).then((types) => {
      if (isMounted) setCurrentPokemonTypes(types);
    });

    return () => {
      isMounted = false;
    };
  }, [pokedex, pokemonId]);

  return (
    <div>
      <Heading>Type{`${currentPokemonTypes.length > 1 ? 's' : ''}`}</Heading>
      <StyledTypesContainerDiv>
        {currentPokemonTypes.map((typeName) => (
          <StyledTypeDiv
            backgroundColor={getPokemonTypeHexColorByTypeName(typeName)}
            key={typeName}
          >
            {typeName}
          </StyledTypeDiv>
        ))}
      </StyledTypesContainerDiv>
    </div>
  );
};
