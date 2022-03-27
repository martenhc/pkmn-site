import { FC, PropsWithChildren } from 'react';
import { FontSizeInPixels } from '../../../data/enum/size';
import { StyledDiv } from './heading.style';

type HeadingProps = {
  size?: keyof typeof FontSizeInPixels;
};

export const Heading: FC<PropsWithChildren<HeadingProps>> = ({
  children,
  size = 'MEDIUM',
}) => <StyledDiv size={size}>{children}</StyledDiv>;
