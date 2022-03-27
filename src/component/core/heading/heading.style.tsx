import styled from 'styled-components';
import { FontSizeInPixels } from '../../../data/enum/size';

type HeadingProps = {
  size: keyof typeof FontSizeInPixels;
};

export const StyledDiv = styled.div`
  font-family: 'Pokemon Solid Normal';
  font-size: ${({ size }: HeadingProps) => `${FontSizeInPixels[size]}px`};
  letter-spacing: 2px;
  margin-bottom: 5%;
  padding: 2%;
  text-align: center;
`;
