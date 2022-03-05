import { FC, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import { HexColor } from '../../../data/enum/hex-color';
import PokemonType from '../../../data/enum/pokemon-type';
import { PokemonDetail } from '../../../data/type/pokemon';
import { getPokemonTypeHexColorByTypeName } from '../../../data/util/color';
import { uppercaseFirstLetter } from '../../../data/util/string';
import { getPokemonSpriteAssetUrlByPokemonId } from '../../../data/util/url';
import { Loader } from '../../atom/loader/loader';
import {
  StyledCardContentDiv,
  StyledPreviousFormImage,
  StyledTypeDiv,
} from './details-page.styled';

export const DetailsPage: FC = () => {
  const { id } = useParams();
  const pokemonId = Number(id);

  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;

  const [currentPokemonDetailedData, setCurrentPokemonDetailedData] =
    useState<PokemonDetail | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentPokemonTypes, setCurrentPokemonTypes] = useState<
    Array<keyof typeof PokemonType>
  >([]);

  useEffect(() => {
    let isMounted = true;

    Promise.all([
      pokedex.getPokemonDetailsById(pokemonId),
      pokedex.getPokemonTypesById(pokemonId),
    ])
      .then(([details, types]) => {
        if (isMounted) {
          setCurrentPokemonDetailedData(details);
          setCurrentPokemonTypes(types);
        }
      })
      .catch((error) => {
        console.log('error');
        setErrorMessage(
          "The requested Pokémon doesn't exist or we could find it. Try looking for something else!"
        );
      });

    return () => {
      isMounted = false;
    };
  }, []); // No deps as this is meant to run on mount only.

  return (
    <>
      {errorMessage ? (
        <div>{errorMessage}</div>
      ) : (
        <div>
          {!currentPokemonDetailedData ? (
            <Loader />
          ) : (
            <StyledCardContentDiv>
              {currentPokemonDetailedData.description}
              <b>{`* Type${currentPokemonTypes.length > 1 ? 's' : ''}`}:</b>
              <br />
              {currentPokemonTypes.map((typeName) => (
                <StyledTypeDiv
                  backgroundColor={getPokemonTypeHexColorByTypeName(typeName)}
                  key={typeName}
                >
                  {typeName}
                </StyledTypeDiv>
              ))}
              {currentPokemonDetailedData.isBaby && <b>* Baby</b>}
              {currentPokemonDetailedData.isLegendary && <b>* Legendary</b>}
              {currentPokemonDetailedData.isMythical && <b>* Mythical</b>}
              <img src={`${getPokemonSpriteAssetUrlByPokemonId(pokemonId)}`} />
              {currentPokemonDetailedData.previousForm && (
                <div>
                  Evolves from:{' '}
                  {uppercaseFirstLetter(
                    currentPokemonDetailedData.previousForm.name
                  )}
                  <StyledPreviousFormImage
                    src={getPokemonSpriteAssetUrlByPokemonId(pokemonId - 1)}
                  />
                </div>
              )}
            </StyledCardContentDiv>
          )}
        </div>
      )}
    </>
  );
};
