import { FC } from 'react';
import { StyledImage } from './loader.styled';
import pokeballSvg from '../../../assets/svg/pokeball.svg';

export const Loader: FC = () => (
  <StyledImage src={pokeballSvg} alt="loading..." />
);
