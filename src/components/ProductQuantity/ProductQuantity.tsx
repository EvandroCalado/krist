import { FC } from 'react';

import * as S from './ProductQuantity.styles';

export interface ProductQuantityProps {
  quantity: number;
  setQuantity: (number: number) => void;
}

export const ProductQuantity: FC<ProductQuantityProps> = ({
  quantity,
  setQuantity,
}) => {
  if (quantity < 1) setQuantity(1);

  return (
    <S.Container>
      <button onClick={() => setQuantity(quantity - 1)}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </S.Container>
  );
};
