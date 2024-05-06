import { useAppSelector } from 'hooks/redux-hook';
import { FC } from 'react';

import { Button } from 'components/Button';

import * as S from './CartTotals.styles';

export interface CartTotalsProps {}

export const CartTotals: FC<CartTotalsProps> = () => {
  const cart = useAppSelector((state) => state.cartState);

  const deliveryValue = 5;

  return (
    <S.Container className="totals">
      <S.SubtotalContainer>
        <span>subtotal</span>
        <span>R${cart.cartTotal.toFixed(2)}</span>
      </S.SubtotalContainer>

      <S.InputContainer>
        <label htmlFor="cupom">cupom de desconto</label>
        <div>
          <input type="text" id="cupom" />
          <button>aplicar</button>
        </div>
      </S.InputContainer>

      <S.DeliveryContainer>
        <span>frete</span>
        <span>R${deliveryValue.toFixed(2)}</span>
      </S.DeliveryContainer>

      <S.TotalContainer>
        <span>total</span>
        <span>RS{(cart.cartTotal + deliveryValue).toFixed(2)}</span>
      </S.TotalContainer>

      <Button>finalizar compra</Button>
    </S.Container>
  );
};
