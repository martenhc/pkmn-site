import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PokedexContextProvider } from '../context/PokedexContext';
import { Navigation } from './core/navigation/navitagion';
import { DetailPage } from './page/detail-page/detail-page';
import { HomePage } from './page/home-page/home-page';
import { NotFoundPage } from './page/not-found-page/not-found-page';

export enum RoutePath {
  HOME = '/',
  DETAILS = '/details/:id',
}

export const Router: FC = () => (
  <PokedexContextProvider>
    <Navigation />
    <Routes>
      <Route path={RoutePath.HOME} element={<HomePage />} />
      <Route path={RoutePath.DETAILS} element={<DetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </PokedexContextProvider>
);
