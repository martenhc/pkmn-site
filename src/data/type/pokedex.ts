import {
  ApiPokemonSpeciesResponse,
  ApiPokemonResponse,
  ApiPokemonIntervalResponse,
} from './api-response';

export type Interval = {
  offset: number;
  limit: number;
};

export type Pokedex = {
  getPokemonByName: (id: number) => Promise<ApiPokemonResponse>;
  getPokemonSpeciesByName: (id: number) => Promise<ApiPokemonSpeciesResponse>;
  getPokemonsList: (interval: Interval) => Promise<ApiPokemonIntervalResponse>;
};
