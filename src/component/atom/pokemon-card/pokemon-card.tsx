import { FC, useState } from 'react';
import { PokemonBase } from '../../../data/type/pokemon';
import { Loader } from '../loader/loader';
import {
  StyledContainerDiv,
  StyledImage,
  StyledPokemonHeader,
} from './pokemon-card.styled';
import { useNavigate } from 'react-router-dom';

type PokemonCardProps = {
  pokemon: PokemonBase;
};

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
  const navigate = useNavigate();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleImageClick = () => {
    navigate(`/details/${pokemon.id}`);
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
        onClick={handleImageClick}
        isLoaded={isImageLoaded}
        onLoad={handleImageLoad}
        src={pokemon.spriteUrl}
        alt={pokemon.name}
      />
    </StyledContainerDiv>
  );
};
