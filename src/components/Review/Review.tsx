import { useAppSelector } from 'hooks/redux-hook';
import { FC } from 'react';

import { CartModalProduct, Heading } from 'components';

import * as S from './Review.styles';

export interface ReviewProps {
  children: React.ReactNode;
}

export const Review: FC<ReviewProps> = ({ children }) => {
  const cart = useAppSelector((state) => state.cartState);

  return (
    <S.Container>
      <Heading as="h3" transform="capitalize" fontWeight="700">
        resumo do pedido
      </Heading>

      {cart.cartItems.map((product) => (
        <CartModalProduct key={product.cartId} product={product} />
      ))}

      {children}
    </S.Container>
  );
};
