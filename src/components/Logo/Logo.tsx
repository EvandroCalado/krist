import { FC } from 'react';
import { Link } from 'react-router-dom';

import * as S from './Logo.styles';

export interface LogoProps {
  isWhite?: boolean;
}

export const Logo: FC<LogoProps> = ({ isWhite }) => {
  return (
    <Link to="/">
      <S.Logo src={isWhite ? '/logo-white.png' : '/logo.png'} alt="logo" />
    </Link>
  );
};
