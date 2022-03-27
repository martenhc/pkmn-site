import { PokemonDetail } from '../../../data/type/pokemon';
import { uppercaseFirstLetter } from '../../../data/util/string';
import {
  getPokemonIdFromDetailUrl,
  getPokemonSpriteAssetUrlByPokemonId,
} from '../../../data/util/url';
import { PokemonCard } from '../../atom/pokemon-card/pokemon-card';
import { Title } from '../../core/title/title';
import {
  StyledCardContainerDiv,
  StyledFeatureDiv,
  StyledPreviousFormDiv,
} from './pokemon-data-detail.styled';

type PokemonDetailDataProps = {
  pokemonDetailedData: PokemonDetail;
};

const feature = ['Baby', 'Legendary', 'Mythical'];

export const PokemonDataDetail = ({
  pokemonDetailedData: {
    description,
    isBaby,
    isLegendary,
    isMythical,
    previousForm,
  },
}: PokemonDetailDataProps) => {
  const previousFormId =
    // When a pre-evolution is from another generation, it's not the previous number
    previousForm && getPokemonIdFromDetailUrl(previousForm.url);

  return (
    <div>
      <Title size="MEDIUM">Description</Title>
      {description}

      {[isBaby, isLegendary, isMythical].map((hasFeature, index) =>
        hasFeature ? (
          <StyledFeatureDiv key={feature[index]}>
            - {feature[index]}
          </StyledFeatureDiv>
        ) : null
      )}

      {previousFormId && (
        <StyledPreviousFormDiv>
          <div>
            Evolves from: <span>{uppercaseFirstLetter(previousForm.name)}</span>
          </div>
          <StyledCardContainerDiv>
            <PokemonCard
              pokemon={{
                id: previousFormId,
                name: previousForm.name,
                spriteUrl: getPokemonSpriteAssetUrlByPokemonId(previousFormId),
              }}
              hideHeader
              isClickable
            />
          </StyledCardContainerDiv>
        </StyledPreviousFormDiv>
      )}
    </div>
  );
};
