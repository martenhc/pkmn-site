import { HexColor } from '../enum/hex-color';
import PokemonType from '../enum/pokemon-type';

export type ApiTypeResponse = {
  type: {
    name: keyof typeof PokemonType;
    url: string;
  };
};

export type ApiPokemonIntervalResponse = {
  results: Array<{
    name: string;
    url: string;
  }>;
};

export type ApiPokemonResponse = {
  name: string;
  types: Array<ApiTypeResponse>;
  // Will be using the official Pokémon images from their assets service.
  // TODO: Cache that.
  // sprites: {
  //   front_default: string;
  // };
};

export type ApiPokemonSpeciesResponse = {
  id: number;
  name: string;
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
  color: {
    name: keyof typeof HexColor;
  };
  is_baby: boolean;
  is_mythical: boolean;
  is_legendary: boolean;
  pokedex_numbers: Array<{
    entry_number: number;
  }>;
};
