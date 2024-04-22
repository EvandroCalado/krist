import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { Heart, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogout } from 'slices/userSlice';

import { Button } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  return (
    <S.Container className="menu-user">
      <span>Search</span>
      <Heart />
      <ShoppingBag />

      {user ? (
        <>
          <User onClick={() => setOpen(!open)} />
          <div className={`menu-hover ${open ? 'open' : ''}`}>
            <button onClick={() => dispatch(userLogout())}>sair</button>
          </div>
        </>
      ) : (
        <Button onClick={() => navigate('/login')}>Entrar</Button>
      )}
    </S.Container>
  );
};
