import { Link } from 'react-router-dom';

import * as S from './Logo.styles';

export const Logo = () => {
  return (
    <Link to="/">
      <S.Logo src="/logo.png" alt="logo" />
    </Link>
  );
};
