import { FC } from 'react';

import { Button } from 'components/Button';

import * as S from './CartTotals.styles';

export interface CartTotalsProps {}

export const CartTotals: FC<CartTotalsProps> = () => {
  return (
    <S.Container className="totals">
      <S.SubtotalContainer>
        <span>subtotal</span>
        <span>R$200</span>
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
        <span>R$5.00</span>
      </S.DeliveryContainer>

      <S.TotalContainer>
        <span>total</span>
        <span>RS205.00</span>
      </S.TotalContainer>

      <Button>finalizar compra</Button>
    </S.Container>
  );
};
