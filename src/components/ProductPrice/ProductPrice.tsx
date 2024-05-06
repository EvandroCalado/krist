import { FC } from 'react';

import { calcDiscount } from 'utils';

import * as S from './ProductPrice.styles';

export interface ProductPriceProps {
  price: number;
  discount?: number;
}

export const ProductPrice: FC<ProductPriceProps> = ({ price, discount }) => {
  const hasDiscount = discount ? calcDiscount(price, discount) : price;

  if (!discount) return <S.FinalPrice>R${price.toFixed(2)}</S.FinalPrice>;

  return (
    <S.Container>
      <S.FinalPrice>R${hasDiscount.toFixed(2)}</S.FinalPrice>
      <S.OriginalPrice>R${price}</S.OriginalPrice>
    </S.Container>
  );
};
