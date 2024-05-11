import { FC } from 'react';

import * as S from './Color.styles';

export interface ColorProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  color: string;
  label: string;
  colorHex: string;
}

export const Color: FC<ColorProps> = ({ color, label, colorHex, ...rest }) => {
  return (
    <S.Container>
      <S.Color
        colorHex={colorHex}
        className={color === label ? 'active' : ''}
      ></S.Color>
      <S.Input type="checkbox" id={label} {...rest} />
      <S.Label htmlFor={label}>{label}</S.Label>
    </S.Container>
  );
};
