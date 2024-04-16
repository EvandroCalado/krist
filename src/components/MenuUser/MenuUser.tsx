import { Heart, ShoppingBag } from 'lucide-react';

import { Button } from 'components/Button';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  return (
    <S.Container>
      <span>Search</span>
      <Heart />
      <ShoppingBag />
      <Button>Entrar</Button>
    </S.Container>
  );
};
