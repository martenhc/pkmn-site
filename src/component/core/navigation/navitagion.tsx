import { FC } from 'react';
import { RoutePath } from '../../router';
import {
  StyledNavContainer,
  StyledNavLink,
  StyledNavLogo,
} from './navigation.style';
import pokeballSvg from '../../../assets/svg/pokeball.svg';

export const Navigation: FC = () => {
  return (
    <StyledNavContainer>
      <StyledNavLink to={RoutePath.HOME}>
        <StyledNavLogo src={pokeballSvg} />
        PokéTest
      </StyledNavLink>
    </StyledNavContainer>
  );
};
