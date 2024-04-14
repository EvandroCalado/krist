import { FC, InputHTMLAttributes } from 'react';

import * as S from './Checkbox.styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  checked?: boolean;
}

export const Checkbox: FC<CheckboxProps> = ({
  label,
  name,
  checked,
  ...rest
}) => {
  return (
    <S.Container>
      <S.Input type="checkbox" id={name} name={name} {...rest} />
      <S.Label htmlFor={name}>{label}</S.Label>
    </S.Container>
  );
};
