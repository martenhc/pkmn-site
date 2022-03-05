import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HexColor } from '../../../data/enum/hex-color';

const BAR_HEIGHT = 30;

export const StyledNavContainer = styled.div`
  background-color: ${HexColor.red};
  color: white;
  display: grid;
  grid-template-columns: 15% 85%;
  height: ${BAR_HEIGHT}px;
  line-height: ${BAR_HEIGHT}px;
  padding: 5px;
  width: 100%;

  a {
    text-decoration: none;

    :visited {
      color: white;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  text-align: center;
`;

export const StyledNavLogo = styled.img`
  height: ${BAR_HEIGHT}px;
  vertical-align: middle;
  width: 20%;
`;
