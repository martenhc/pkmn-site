import { FC } from 'react';
import { PokemonBase } from '../../../data/type/pokemon';
import { StyledContainerDiv, StyledPokemonHeader } from './pokemon-card.styled';
import { useNavigate } from 'react-router-dom';
import { Image } from '../../core/image/image';
import { ConditionalWrapper } from '../../core/conditional-wrapper/conditionalWrapper';

type PokemonCardProps = {
  hideHeader?: boolean;
  isClickable?: boolean;
  pokemon: PokemonBase;
};

export const PokemonCard: FC<PokemonCardProps> = ({
  hideHeader = false,
  isClickable = false,
  pokemon,
}) => {
  const navigate = useNavigate();

  const handlePokemonClick = () => {
    navigate(`/details/${pokemon.id}`);
  };

  const buttonWrapper: FC = ({ children }) => (
    <button onClick={handlePokemonClick}>{children}</button>
  );

  return (
    <StyledContainerDiv>
      {!hideHeader && (
        <StyledPokemonHeader>
          #{pokemon.id} - {pokemon.name}
        </StyledPokemonHeader>
      )}
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
