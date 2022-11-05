import { FC, createContext } from 'react';
import { WrappedPokedex } from '../wrapper/pokedex';

export type PokedexContextProps = {
  pokedex: WrappedPokedex;
};

// Creating context for showcasing and in case the app grows.
export const PokedexContext = createContext<PokedexContextProps | null>(null);

export const PokedexContextProvider: FC = ({ children }) => {
  const pokedex = new WrappedPokedex();

  return (
    <PokedexContext.Provider value={{ pokedex }}>
      {children}
    </PokedexContext.Provider>
  );
};
