import { Logo, MenuMobile, MenuNav, MenuUser } from 'components';

import * as S from './Header.styles';

export const Header = () => {
  return (
    <S.Header>
      <Logo />
      <MenuNav />

      <S.InfoMenu>
        <MenuUser />
        <MenuMobile />
      </S.InfoMenu>
    </S.Header>
  );
};
