import { Heart, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  const navigate = useNavigate();

  return (
    <S.Container className="menu-user">
      <span>Search</span>
      <Heart />
      <ShoppingBag />
      <Button onClick={() => navigate('/login')}>Entrar</Button>
    </S.Container>
  );
};
