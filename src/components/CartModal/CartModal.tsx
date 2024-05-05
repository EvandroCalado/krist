import { X } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';

import * as S from './CartModal.styles';

export interface CartModalProps {
  children: React.ReactNode;
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartModal: FC<CartModalProps> = ({
  children,
  openCart,
  setOpenCart,
}) => {
  const navigate = useNavigate();

  return (
    <S.Container openCart={openCart}>
      <S.HeaderContainer>
        <span>você tem 3 itens no carrinho</span>
        <X onClick={() => setOpenCart(!openCart)} />
      </S.HeaderContainer>
      {children}
      <Button
        onClick={() => [navigate('/cart'), setOpenCart(!openCart)]}
        variant="secondary"
      >
        ver carrinho
      </Button>
      <Button onClick={() => navigate('/checkout')}>finalizar compra</Button>
    </S.Container>
  );
};
