import styled from 'styled-components';
import { HexColor } from '../../../data/enum/hex-color';

export const StyledContainerDiv = styled.div`
  display: flex;
  margin-left: auto;
  width: 370px;
`;

export const StyledTextInput = styled.input`
  width: 300px;
`;

export const StyledMagnifierImage = styled.img`
  width: 20px;
`;

export const StyledSearchButton = styled.button`
  background-color: ${HexColor.white};
  border: 1px solid ${HexColor.black};
  border-radius: 5px;
  padding: 3px;
  width: 50px;

  :hover {
    filter: drop-shadow(0px 0px 5px ${HexColor.white});
  }
`;

type StyledPopUpProps = {
  isVisible: boolean;
};

export const StyledPopUp = styled.div`
  background-color: ${HexColor['dark-gray']};
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  text-align: center;
  top: 38px;
  visibility: ${({ isVisible }: StyledPopUpProps) =>
    isVisible ? 'visible' : 'hidden'};
`;
