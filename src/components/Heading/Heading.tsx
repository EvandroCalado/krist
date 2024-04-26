import { FC } from 'react';

import * as S from './Heading.styles';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl';
  transform?: 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'left' | 'center' | 'right';
  fontWeight?:
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export const Heading: FC<HeadingProps> = ({
  children,
  as = 'h1',
  size,
  transform,
  align,
  fontWeight,
}) => {
  return (
    <S.Title
      as={as}
      size={size}
      transform={transform}
      align={align}
      fontWeight={fontWeight}
    >
      {children}
    </S.Title>
  );
};
