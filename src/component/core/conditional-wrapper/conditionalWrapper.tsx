import { FC, ReactElement } from 'react';

type ConditionalWrapperProps = {
  condition: boolean;
  wrapper: FC;
  children: ReactElement;
};

export const ConditionalWrapper: FC<ConditionalWrapperProps> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper({ children }) : children);
