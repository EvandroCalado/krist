import { FC, InputHTMLAttributes } from 'react';

import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'password' | 'number' | 'date';
  label: string;
  name: string;
}

export const Input: FC<InputProps> = ({ type, label, name, ...rest }) => {
  return (
    <S.Container className="input">
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input type={type} id={name} name={name} {...rest} />
    </S.Container>
  );
};
