import { Interval, Pokedex } from '../data/type/pokedex';
import { Pokedex as PokeApi } from 'pokeapi-js-wrapper';
import { PokemonBase, PokemonDetail } from '../data/type/pokemon';
import { uppercaseFirstLetter } from '../data/util/string';
import { getPokemonSpriteAssetUrlByPokemonId } from '../data/util/url';
import PokemonType from '../data/enum/pokemon-type';

export class WrappedPokedex {
  private _pokedex: Pokedex;

  constructor() {
    this._pokedex = new PokeApi();
  }

  // The original API takes names or IDs for this poorly called method, hence the wrapper.
  public async getPokemonTypesById(
    id: number
  ): Promise<Array<keyof typeof PokemonType>> {
    const { types } = await this._pokedex.getPokemonByName(id);
    return types.map(({ type: { name: typeName } }) => typeName);
  }

  public async getPokemonInInterval(
    interval: Interval
  ): Promise<Array<PokemonBase>> {
    const { results } = await this._pokedex.getPokemonsList(interval);

    return results.map(({ name }, index) => {
      const id = index + interval.offset + 1;
      return {
        id,
        name: uppercaseFirstLetter(name),
        spriteUrl: getPokemonSpriteAssetUrlByPokemonId(id),
      };
    });
  }

  public async getPokemonDetailsById(
    pokemonId: number
  ): Promise<PokemonDetail> {
    const {
      id,
      name: lowercaseName,
      pokedex_numbers: [{ entry_number: pokedexIndex }],
      flavor_text_entries,
      color: { name: mainColorName },
      is_baby: isBaby,
      is_mythical: isMythical,
      is_legendary: isLegendary,
      evolves_from_species: previousForm,
    } = await this._pokedex.getPokemonSpeciesByName(pokemonId);

    const englishFlavorText = flavor_text_entries.find(
      ({ language: { name: languageName } }) => languageName === 'en'
    );

    return {
      id,
      name: uppercaseFirstLetter(lowercaseName),
      spriteUrl: getPokemonSpriteAssetUrlByPokemonId(pokemonId),
      description:
        englishFlavorText?.flavor_text || flavor_text_entries[0].flavor_text,
      mainColorName,
      pokedexIndex,
      isBaby,
      isMythical,
      isLegendary,
      previousForm,
    };
  }
}
