import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { Heart, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogout } from 'slices/userSlice';

import { Button, CartModal, CartModalProduct } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { user } = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  return (
    <S.Container className="menu-user">
      <span>Search</span>
      <Heart />

      <>
        <ShoppingBag onClick={() => setOpenCart(!openCart)} />
        <CartModal openCart={openCart} setOpenCart={setOpenCart}>
          <CartModalProduct />
          <CartModalProduct />
          <CartModalProduct />
          <CartModalProduct />

          <div className="subtotal">
            <span>subtotal</span>
            <span>R$200.00</span>
          </div>
        </CartModal>
      </>

      {user ? (
        <>
          <User onClick={() => setOpenUser(!openUser)} />
          <div className={`menu-hover ${openUser ? 'open' : ''}`}>
            <button onClick={handleLogout}>sair</button>
          </div>
        </>
      ) : (
        <Button onClick={() => navigate('/login')}>Entrar</Button>
      )}
    </S.Container>
  );
};
