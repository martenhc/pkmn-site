import { FC } from 'react';
import { PokemonBase } from '../../../data/type/pokemon';
import {
  StyledButton,
  StyledContainerDiv,
  StyledPokemonHeader,
} from './pokemon-card.styled';
import { useNavigate } from 'react-router-dom';
import { Image } from '../../core/image/image';
import { ConditionalWrapper } from '../../core/conditional-wrapper/conditionalWrapper';

type PokemonCardProps = {
  pokemon: PokemonBase;
  isClickable?: boolean;
};

export const PokemonCard: FC<PokemonCardProps> = ({
  pokemon,
  isClickable = false,
}) => {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate(`/details/${pokemon.id}`);
  };

  const buttonWrapper: FC = ({ children }) => (
    <StyledButton onClick={handlePokemonClick}>{children}</StyledButton>
  );

  return (
    <StyledContainerDiv>
      <StyledPokemonHeader>
        #{pokemon.id} - {pokemon.name}
      </StyledPokemonHeader>
      <ConditionalWrapper condition={isClickable} wrapper={buttonWrapper}>
        <Image
          src={pokemon.spriteUrl}
          alt={pokemon.name}
          withOnHoverScaling={isClickable}
        />
      </ConditionalWrapper>
    </StyledContainerDiv>
  );
};
