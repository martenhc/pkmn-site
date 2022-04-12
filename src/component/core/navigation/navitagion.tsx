import { FC } from 'react';
import { RoutePath } from '../../router';
import {
  StyledContentDiv,
  StyledNavContainer,
  StyledNavLink,
  StyledNavLogo,
} from './navigation.style';
import pokeballSvg from '../../../assets/svg/pokeball.svg';
import { SearchBar } from '../../atom/search-bar/searchBar';

export const Navigation: FC = () => {
  return (
    <StyledNavContainer>
      <StyledContentDiv>
        <StyledNavLink to={RoutePath.HOME}>
          <StyledNavLogo src={pokeballSvg} />
          PokéTest
        </StyledNavLink>
        <SearchBar />
      </StyledContentDiv>
    </StyledNavContainer>
  );
};
