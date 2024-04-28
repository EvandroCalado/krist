import { FC } from 'react';

import * as S from './ProductDetails.styles';

export interface ProductDetailsProps {
  children: React.ReactNode;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};
