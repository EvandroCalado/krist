import { FC } from 'react';

import { CartProduct, CartProductsList, CartTotals, Heading } from 'components';

import * as S from './Cart.styles';

export interface CartProps {}

export const Cart: FC<CartProps> = () => {
  return (
    <S.Container>
      <Heading size="4xl" transform="capitalize">
        carrinho
      </Heading>

      <S.Info>
        <CartProductsList>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </CartProductsList>

        <CartTotals />
      </S.Info>
    </S.Container>
  );
};
