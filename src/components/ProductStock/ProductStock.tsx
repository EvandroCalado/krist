import { FC } from 'react';

import * as S from './ProductStock.styles';

export interface ProductStockProps {
  inStock: boolean;
}

export const ProductStock: FC<ProductStockProps> = ({ inStock }) => {
  return (
    <S.Stock inStock={inStock}>{inStock ? 'em estoque' : 'esgotado'}</S.Stock>
  );
};
