import { ButtonHTMLAttributes, FC } from 'react';

import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  width?: '100%' | 'auto';
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  variant = 'primary',
  width = 'auto',
  ...rest
}) => {
  return (
    <S.Button width={width} variant={variant} {...rest}>
      {children} {icon}
    </S.Button>
  );
};
