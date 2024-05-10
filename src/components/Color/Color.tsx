import { FC } from 'react';

import * as S from './Color.styles';

export interface ColorProps {
  color: string;
  setColor: (color: string) => void;
  colorHex: string;
}

export const Color: FC<ColorProps> = ({ color, setColor, colorHex }) => {
  return (
    <S.Container>
      <S.Color colorHex={colorHex}></S.Color>
      <S.Button onClick={() => setColor(color)}>{color}</S.Button>
    </S.Container>
  );
};
