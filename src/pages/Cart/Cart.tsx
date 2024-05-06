import { useAppSelector } from 'hooks/redux-hook';
import { PackageOpen } from 'lucide-react';
import { FC } from 'react';

import { CartProduct, CartProductsList, CartTotals, Heading } from 'components';

import * as S from './Cart.styles';

export interface CartProps {}

export const Cart: FC<CartProps> = () => {
  const cart = useAppSelector((state) => state.cartState);

  if (cart.cartItems.length === 0) {
    return (
      <S.EmptyContainer>
        <Heading as="h2" size="4xl" transform="uppercase">
          vazio <PackageOpen />
        </Heading>
      </S.EmptyContainer>
    );
  }

  return (
    <S.Container>
      <Heading size="4xl" transform="capitalize">
        carrinho
      </Heading>

      <S.Info>
        <CartProductsList>
          {cart.cartItems.map((product) => (
            <CartProduct key={product.cartId} product={product} />
          ))}
        </CartProductsList>

        <CartTotals />
      </S.Info>
    </S.Container>
  );
};
