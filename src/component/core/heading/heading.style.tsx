import styled from 'styled-components';
import { FontSizeInPixels } from '../../../data/enum/size';

type HeadingProps = {
  size: keyof typeof FontSizeInPixels;
};

const getTopAndBottomMargin = (size: keyof typeof FontSizeInPixels) => {
  switch (size) {
    case 'BIG':
      return 45;
    case 'MEDIUM':
      return 15;
    default:
      return 0;
  }
};

export const StyledDiv = styled.div`
  font-family: Verdana, Geneva, sans-serif;
  font-size: ${({ size }: HeadingProps) => `${FontSizeInPixels[size]}px`};
  font-weight: 600;
  margin: ${({ size }: HeadingProps) =>
    `${getTopAndBottomMargin(size)}px auto`};
  max-width: 900px;
  text-align: center;
`;
