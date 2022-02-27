import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokedexContextProvider } from '../context/PokedexContext';
import { HomePage } from './page/home-page/home-page';

export const Router: FC = () => (
  <PokedexContextProvider>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </PokedexContextProvider>
);
