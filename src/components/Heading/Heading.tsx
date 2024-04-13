import { FC } from 'react';

import * as S from './Heading.styles';

export type HeadingProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'left' | 'center' | 'right';
};

export const Heading: FC<HeadingProps> = ({
  children,
  as = 'h1',
  size = 'md',
  transform = 'lowercase',
  align = 'left',
}) => {
  return (
    <S.Container as={as} size={size} transform={transform} align={align}>
      {children}
    </S.Container>
  );
};
