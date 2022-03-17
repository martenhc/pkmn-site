import { HexColor } from '../enum/hex-color';
import PokemonType from '../enum/pokemon-type';

export const getPokemonTypeHexColorByTypeName = (
  typeName: keyof typeof PokemonType
): keyof typeof HexColor => {
  switch (typeName) {
    case PokemonType.grass:
      return 'green';
    case PokemonType.dark:
    case PokemonType.shadow:
      return 'black';
    case PokemonType.flying:
    case PokemonType.unknown:
      return 'white';
    case PokemonType.dragon:
    case PokemonType.electric:
      return 'yellow';
    case PokemonType.fairy:
      return 'pink';
    case PokemonType.fighting:
    case PokemonType.ground:
    case PokemonType.rock:
      return 'brown';
    case PokemonType.fire:
      return 'red';
    case PokemonType.ghost:
    case PokemonType.psychic:
      return 'purple';
    case PokemonType.ice:
    case PokemonType.water:
      return 'blue';
    case PokemonType.poison:
    case PokemonType.bug:
      return 'dark-green';
    case PokemonType.steel:
      return 'gray';
    default:
      return 'white';
  }
};
