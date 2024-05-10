import { FC, InputHTMLAttributes } from 'react';

import * as S from './Checkbox.styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: FC<CheckboxProps> = ({ label, ...rest }) => {
  return (
    <S.Container>
      <S.Input type="checkbox" id={label} {...rest} />
      <S.Label htmlFor={label}>{label}</S.Label>
    </S.Container>
  );
};
