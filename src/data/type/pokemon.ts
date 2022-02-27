// import PokemonType from '../enum/pokemon-type';
import { HexColor } from '../enum/hex-color';

export type PokemonBase = {
  id: number;
  name: string;
  spriteUrl: string;
};

export type PokemonDetail = PokemonBase & {
  description: string;
  mainColorName: keyof typeof HexColor;
  pokedexIndex: number;
  isBaby: boolean;
  isMythical: boolean;
  isLegendary: boolean;
};
