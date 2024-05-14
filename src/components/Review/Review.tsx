import { useAppSelector } from 'hooks/redux-hook';
import { FC } from 'react';

import { CartModalProduct, Heading } from 'components';

import * as S from './Review.styles';

export interface ReviewProps {}

export const Review: FC<ReviewProps> = () => {
  const cart = useAppSelector((state) => state.cartState);

  return (
    <S.Container>
      <Heading as="h3" transform="capitalize" fontWeight="700">
        resumo do pedido
      </Heading>

      {cart.cartItems.map((product) => (
        <CartModalProduct key={product.cartId} product={product} />
      ))}

      <Heading as="h3" transform="capitalize" fontWeight="700">
        endereço de entrega
      </Heading>

      <p>
        avenida conselheiro joão alfredo, 03, santa luzia, arcoverde, pernambuco
      </p>

      <Heading as="h3" transform="capitalize" fontWeight="700">
        método de pagamento
      </Heading>

      <p>crédito (.... .... .... 1234)</p>
    </S.Container>
  );
};
