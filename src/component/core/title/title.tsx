import { FC, PropsWithChildren } from 'react';
import { FontSizeInPixels } from '../../../data/enum/size';
import { StyledTitle } from './title.style';

export type TitleProps = {
  size?: keyof typeof FontSizeInPixels;
};

export const Title: FC<PropsWithChildren<TitleProps>> = ({
  children,
  size = 'MEDIUM',
}) => <StyledTitle size={size}>{children}</StyledTitle>;
