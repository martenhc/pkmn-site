import { FC, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import { PokemonDetail } from '../../../data/type/pokemon';
import { getPokemonSpriteAssetUrlByPokemonId } from '../../../data/util/url';
import { Loader } from '../../atom/loader/loader';
import { PokemonCard } from '../../atom/pokemon-card/pokemon-card';
import { PokemonDataDetail } from '../../molecule/pokemon-data-detail/pokemon-data-detail';
import { PokemonTypeDetail } from '../../molecule/pokemon-type-detail/pokemon-type-detail';
import {
  StyledContainerDiv,
  StyledContentDiv,
  StyledPrevNextButton,
} from './detail-page.styled';

export const DetailPage: FC = () => {
  const { id } = useParams();
  const pokemonId = Number(id);

  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;
  const navigate = useNavigate();

  const [currentPokemonDetailedData, setCurrentPokemonDetailedData] =
    useState<PokemonDetail | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isMounted = true;

    pokedex
      .getPokemonDetailsById(pokemonId)
      .then((details) => {
        if (isMounted) {
          setCurrentPokemonDetailedData(details);
        }
      })
      .catch(() => {
        setErrorMessage(
          "The requested Pokémon doesn't exist or we could find it. Try looking for something else!"
        );
      });

    return () => {
      isMounted = false;
    };
  }, [pokedex, pokemonId]);

  const handlePrevClick = () => {
    navigate(`/details/${pokemonId - 1}`);
  };

  const handleNextClick = () => {
    navigate(`/details/${pokemonId + 1}`);
  };

  if (errorMessage) return <div>{errorMessage}</div>;

  return (
    <>
      {!currentPokemonDetailedData ? (
        <Loader />
      ) : (
        <StyledContainerDiv>
          <StyledPrevNextButton onClick={handlePrevClick} />
          <StyledContentDiv>
            <PokemonCard
              pokemon={{
                id: currentPokemonDetailedData.id,
                name: currentPokemonDetailedData.name,
                spriteUrl: getPokemonSpriteAssetUrlByPokemonId(pokemonId),
              }}
            />
            <PokemonTypeDetail pokemonId={pokemonId} />
            <PokemonDataDetail
              pokemonDetailedData={currentPokemonDetailedData}
            />
          </StyledContentDiv>
          <StyledPrevNextButton isNext onClick={handleNextClick} />
        </StyledContainerDiv>
      )}
    </>
  );
};
