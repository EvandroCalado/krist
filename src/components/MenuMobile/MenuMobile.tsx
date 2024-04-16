import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { MenuNav, MenuUser } from 'components';

import * as S from './MenuMobile.styled';

export const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <S.Container className="menu-mobile" data-testid="wrapper">
      <Menu onClick={() => setOpen(!open)} />

      <S.MenuContainer open={open} data-testid="menu-container">
        <X onClick={() => setOpen(!open)} />

        <MenuNav />
        <MenuUser />
      </S.MenuContainer>
    </S.Container>
  );
};
