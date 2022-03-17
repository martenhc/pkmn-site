export const getPokemonSpriteAssetUrlByPokemonId = (pokemonId: number) =>
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
    pokemonId < 10
      ? `00${pokemonId}`
      : pokemonId < 100
      ? `0${pokemonId}`
      : `${pokemonId}`
  }.png`;

export const getPokemonIdFromDetailUrl = (datailUrl: string) => {
  // example: "https://pokeapi.co/api/v2/pokemon-species/446/"
  const urlSections = datailUrl.split('/');
  return Number(urlSections[urlSections.length - 2]);
};
