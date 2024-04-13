import { FC, InputHTMLAttributes } from 'react';

import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password' | 'number';
  label: string;
  name: string;
}

export const Input: FC<InputProps> = ({ type, label, name, ...rest }) => {
  return (
    <S.Container>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type={type} id={name} name={name} {...rest} />
    </S.Container>
  );
};
