import { Logo, MenuNav, MenuUser } from 'components';

import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <MenuNav />
      <MenuUser />
    </S.Header>
  );
};
