import { FC } from 'react';

import { StrapiProductSizesType } from 'types';

import * as S from './ProductQuantity.styles';

export interface ProductQuantityProps {
  quantity: number;
  setQuantity: (number: number) => void;
  currentSize: StrapiProductSizesType;
}

export const ProductQuantity: FC<ProductQuantityProps> = ({
  quantity,
  setQuantity,
  currentSize,
}) => {
  if (currentSize.quantity === null) {
    return (
      <S.Container>
        <button disabled={true} onClick={() => setQuantity(quantity - 1)}>
          -
        </button>
        <span>0</span>
        <button disabled={true} onClick={() => setQuantity(quantity + 1)}>
          +
        </button>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <button
        disabled={quantity <= 1}
        onClick={() => setQuantity(quantity - 1)}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        disabled={quantity >= currentSize.quantity}
        onClick={() => setQuantity(quantity + 1)}
      >
        +
      </button>
    </S.Container>
  );
};
