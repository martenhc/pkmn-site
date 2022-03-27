import { useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../../../data/type/pokemon';
import { uppercaseFirstLetter } from '../../../data/util/string';
import {
  getPokemonIdFromDetailUrl,
  getPokemonSpriteAssetUrlByPokemonId,
} from '../../../data/util/url';
import { Title } from '../../core/title/title';
import {
  StyledButton,
  StyledFeatureDiv,
  StyledPreEvolutionDiv,
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
  const navigate = useNavigate();

  const preEvolutionId =
    // When a pre-evolution is from another generation, it's not the previous number
    previousForm && getPokemonIdFromDetailUrl(previousForm.url);

  const onPreEvolutionClick = () => navigate(`/details/${preEvolutionId}/`);

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

      {preEvolutionId && (
        <StyledPreEvolutionDiv>
          <div>
            Evolves from: <span>{uppercaseFirstLetter(previousForm.name)}</span>
          </div>
          <StyledButton
            onClick={onPreEvolutionClick}
            backgroundUrl={getPokemonSpriteAssetUrlByPokemonId(preEvolutionId)}
            aria-label={`see ${uppercaseFirstLetter(
              previousForm.name
            )} details`}
          />
        </StyledPreEvolutionDiv>
      )}
    </div>
  );
};
