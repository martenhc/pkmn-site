import { FC, useContext, useEffect, useState } from 'react';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import { PokemonBase, PokemonDetail } from '../../../data/type/pokemon';
import { Loader } from '../../atom/loader/loader';
import {
  StyledCardContentDiv,
  StyledContainerDiv,
} from './pokemon-details.styled';

export const PokemonDetails: FC<{ pokemonBaseData: PokemonBase }> = ({
  pokemonBaseData,
}) => {
  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;

  const [currentPokemonDetailedData, setCurrentPokemonDetailedData] =
    useState<PokemonDetail | null>(null);

  useEffect(() => {
    let isMounted = true;

    pokedex.getPokemonDetailsById(pokemonBaseData.id).then((details) => {
      if (isMounted)
        setCurrentPokemonDetailedData({ ...pokemonBaseData, ...details });
    });

    return () => {
      isMounted = false;
    };
  }, []); // No deps as this is meant to run on mount only.

  return (
    <StyledContainerDiv>
      {!currentPokemonDetailedData ? (
        <Loader />
      ) : (
        <StyledCardContentDiv
          backgroundColor={currentPokemonDetailedData.mainColorName}
        >
          {currentPokemonDetailedData.description}
          {/* <b>
            {`* Type${currentPokemonDetailedData.typeNames.length > 1 ? 's' : ''}`}:
          </b>
          <br />
          {currentPokemonDetailedData.typeNames.map((typeName, index) => (
            <span key={typeName}>{`${typeName}${
              index === currentPokemonDetailedData.typeNames.length - 1 ? '' : ' - '
            }`}</span>
          ))} */}
          {currentPokemonDetailedData.isBaby && <b>* Baby</b>}
          {currentPokemonDetailedData.isLegendary && <b>* Legendary</b>}
          {currentPokemonDetailedData.isMythical && <b>* Mythical</b>}
        </StyledCardContentDiv>
      )}
    </StyledContainerDiv>
  );
};
