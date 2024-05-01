import { FC } from 'react';

import { StrapiProductColorsType, StrapiProductSizesType } from 'types';

import * as S from './ProductInfo.styles';

export interface ProductInfoProps {
  colors: StrapiProductColorsType;
  sizes: StrapiProductSizesType;
}

export const ProductInfo: FC<ProductInfoProps> = ({ colors, sizes }) => {
  return (
    <S.Container>
      <S.ItemContainer>
        <S.ItemTitle>cores</S.ItemTitle>
        {colors.data.map((color) => (
          <S.Item key={color.id}>{color.attributes.name}</S.Item>
        ))}
      </S.ItemContainer>

      <S.ItemContainer>
        <S.ItemTitle>tamanhos</S.ItemTitle>
        {sizes.data.map((size) => (
          <S.Item key={size.id}>{size.attributes.name}</S.Item>
        ))}
      </S.ItemContainer>
    </S.Container>
  );
};
