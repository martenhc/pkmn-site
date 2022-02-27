import { FC, useState } from 'react';
import { PokemonBase } from '../../../data/type/pokemon';
import { PokemonDetails } from '../../molecule/pokemon-details/pokemon-details';
import { Loader } from '../loader/loader';
import {
  StyledContainerDiv,
  StyledImage,
  StyledPokemonHeader,
} from './pokemon-card.styled';

type PokemonCardProps = {
  pokemon: PokemonBase;
};

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const [displayDetails, setDisplayDetails] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleOnMouseEnter = () => {
    setDisplayDetails(true);
  };

  const handleOnMouseOut = () => {
    setDisplayDetails(false);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <StyledContainerDiv>
      <StyledPokemonHeader>
        #{pokemon.id} - {pokemon.name}
      </StyledPokemonHeader>
      {!isImageLoaded && <Loader />}
      <StyledImage
        isLoaded={isImageLoaded}
        onMouseEnter={handleOnMouseEnter}
        onMouseOut={handleOnMouseOut}
        onLoad={handleImageLoad}
        src={pokemon.spriteUrl}
        alt={pokemon.name}
      />
      {displayDetails && <PokemonDetails pokemonId={pokemon.id} />}
    </StyledContainerDiv>
  );
};
