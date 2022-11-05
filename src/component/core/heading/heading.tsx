import { FC } from 'react';
import { FontSizeInPixels } from '../../../data/enum/size';
import { StyledDiv } from './heading.style';

type HeadingProps = {
  size?: keyof typeof FontSizeInPixels;
};

export const Heading: FC<HeadingProps> = ({ children, size = 'MEDIUM' }) => (
  <StyledDiv size={size}>{children}</StyledDiv>
);
