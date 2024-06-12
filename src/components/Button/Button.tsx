import { ButtonHTMLAttributes, FC } from 'react';
import { useNavigation } from 'react-router-dom';

import * as S from './Button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  width?: '100%' | 'max-content';
}

export const Button: FC<ButtonProps> = ({
  children,
  icon,
  variant,
  width,
  ...rest
}) => {
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  return (
    <S.Button width={width} variant={variant} disabled={isSubmitting} {...rest}>
      {isSubmitting ? 'Carregando...' : children} {icon}
    </S.Button>
  );
};
