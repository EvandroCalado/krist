import { Heart, ShoppingBag } from 'lucide-react';

import { Button } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  return (
    <S.Container className="menu-user">
      <span>Search</span>
      <Heart />
      <ShoppingBag />
      <Button>Entrar</Button>
    </S.Container>
  );
};
