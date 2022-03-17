import styled from 'styled-components';
import { FontSizeInPixels } from '../../../data/enum/size';
import { TitleProps } from './title';

export const StyledTitle = styled.div`
  font-family: 'Pokemon Solid Normal';
  font-size: ${({ size = 'MEDIUM' }: TitleProps) =>
    `${FontSizeInPixels[size]}px`};
  letter-spacing: 2px;
  margin-bottom: 5%;
  padding: 2%;
  text-align: center;
`;
