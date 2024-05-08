import { useAppSelector } from 'hooks/redux-hook';
import { PackageOpen, X } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Heading } from 'components';

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
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart,
  );
  const navigate = useNavigate();

  return (
    <>
      <S.FadeContainer openCart={openCart} onClick={() => setOpenCart(false)} />
      <S.CartContainer openCart={openCart}>
        <S.HeaderContainer>
          <span>você tem {numItemsInCart} itens no carrinho</span>
          <X onClick={() => setOpenCart(!openCart)} />
        </S.HeaderContainer>

        {numItemsInCart === 0 ? (
          <S.EmptyContainer>
            <Heading as="h2" size="xl" transform="uppercase">
              vazio <PackageOpen />
            </Heading>
          </S.EmptyContainer>
        ) : (
          <>
            {children}
            <Button
              onClick={() => [navigate('/cart'), setOpenCart(!openCart)]}
              variant="secondary"
            >
              ver carrinho
            </Button>
            <Button onClick={() => navigate('/checkout')}>
              finalizar compra
            </Button>
          </>
        )}
      </S.CartContainer>
    </>
  );
};
