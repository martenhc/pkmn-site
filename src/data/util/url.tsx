export const getPokemonSpriteAssetUrlByPokemonId = (pokemonId: number) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
    pokemonId < 10
      ? `00${pokemonId}`
      : pokemonId < 100
      ? `0${pokemonId}`
      : `${pokemonId}`
  }.png`;
