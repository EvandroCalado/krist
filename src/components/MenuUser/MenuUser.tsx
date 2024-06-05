import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLogout } from 'slices/userSlice';

import { Button, CartModal, CartModalProduct, Search } from 'components';

import * as S from './MenuUser.styles';

export const MenuUser = () => {
  const [openUser, setOpenUser] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const cart = useAppSelector((state) => state.cartState);
  const { user } = useAppSelector((state) => state.userState);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(userLogout());
    navigate('/');
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setOpenUser(!openUser);
  };

  return (
    <S.Container className="menu-user">
      <Search placeholder="Pesquisar" />

      <>
        <ShoppingBag className="bag" onClick={() => setOpenCart(!openCart)} />
        {cart.numItemsInCart > 0 && <span>{cart.numItemsInCart}</span>}
        <CartModal openCart={openCart} setOpenCart={setOpenCart}>
          {cart.cartItems.map((product) => (
            <CartModalProduct key={product.cartId} product={product} />
          ))}
          <div className="subtotal">
            <span>subtotal</span>
            <span>R${cart.cartTotal.toFixed(2)}</span>
          </div>
        </CartModal>
      </>

      {user ? (
        <>
          <User onClick={() => setOpenUser(!openUser)} />
          <div className={`menu-hover ${openUser ? 'open' : ''}`}>
            <button onClick={handleProfileClick}>conta</button>
            <button onClick={handleLogout}>sair</button>
          </div>
        </>
      ) : (
        <Button onClick={() => navigate('/login')}>Entrar</Button>
      )}
    </S.Container>
  );
};
