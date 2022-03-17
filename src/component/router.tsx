import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokedexContextProvider } from '../context/PokedexContext';
import { DetailPage } from './page/detail-page/detail-page';
import { HomePage } from './page/home-page/home-page';

export enum RoutePath {
  HOME = '/',
  DETAILS = '/details/:id',
}

export const Router: FC = () => (
  <PokedexContextProvider>
    <Routes>
      <Route path={RoutePath.HOME} element={<HomePage />} />
      <Route path={RoutePath.DETAILS} element={<DetailPage />} />
    </Routes>
  </PokedexContextProvider>
);
