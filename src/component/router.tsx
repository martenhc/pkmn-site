import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokedexContextProvider } from '../context/PokedexContext';
import { DetailsPage } from './page/details-page/details-page';
import { HomePage } from './page/home-page/home-page';

export enum RoutePath {
  HOME = '/',
  DETAILS = '/details/:id',
}

export const Router: FC = () => (
  <PokedexContextProvider>
    <Routes>
      <Route path={RoutePath.HOME} element={<HomePage />} />
      <Route path={RoutePath.DETAILS} element={<DetailsPage />} />
    </Routes>
  </PokedexContextProvider>
);
