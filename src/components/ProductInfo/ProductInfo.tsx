import { FC } from 'react';

import { StrapiProductVariantType } from 'types';

import * as S from './ProductInfo.styles';

export interface ProductInfoProps {
  variants: StrapiProductVariantType[];
}

export const ProductInfo: FC<ProductInfoProps> = ({ variants }) => {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.ItemTitle>cores</S.ItemTitle>
        {variants.map((variant) => (
          <S.Item key={variant.id}>{variant.name}</S.Item>
        ))}
      </S.ItemContainer>
    </S.Container>
  );
};
