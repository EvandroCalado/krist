import { useAppSelector } from 'hooks/redux-hook';
import { Heart, ShoppingBag, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  const { user } = useAppSelector((state) => state.userState);

  const navigate = useNavigate();

  return (
    <S.Container className="menu-user">
      <span>Search</span>
      <Heart />
      <ShoppingBag />

      {user ? (
        <User />
      ) : (
        <Button onClick={() => navigate('/login')}>Entrar</Button>
      )}
    </S.Container>
  );
};
