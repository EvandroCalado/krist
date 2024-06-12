import { FC } from 'react';

import { Heading } from 'components';
import { StrapiProductType } from 'types';

import * as S from './ProductColors.styles';

export interface ProductColorsProps {
  variants: StrapiProductType['attributes']['variants'];
  color: string;
  setColor: (color: string) => void;
  setSize: (size: string) => void;
}

export const ProductColors: FC<ProductColorsProps> = ({
  variants,
  color,
  setColor,
  setSize,
}) => {
  const handleOnClick = (color: string) => {
    const variant = variants.filter((variant) => variant.name === color)[0];

    const initialSize = variant.sizes.filter(
      (singleSize) => singleSize.quantity !== null,
    )[0];

    setColor(color);
    setSize(initialSize.size);
  };

  return (
    <S.Container>
      <Heading as="h4" fontWeight="700" transform="capitalize">
        cores
      </Heading>

      <S.ButtonContainer>
        {variants.map((variant) => (
          <S.Button
            key={variant.id}
            color={variant.color}
            isActive={variant.name === color}
            onClick={() => handleOnClick(variant.name)}
          ></S.Button>
        ))}
      </S.ButtonContainer>

      <span>{color}</span>
    </S.Container>
  );
};
