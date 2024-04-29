import { FC } from 'react';

import { Heading } from 'components';
import { StrapiProductType } from 'types';

import * as S from './ProductColors.styles';

export interface ProductColorsProps {
  colors: StrapiProductType['data']['attributes']['colors'];
  color: string;
  setColor: (color: string) => void;
}

export const ProductColors: FC<ProductColorsProps> = ({
  colors,
  color,
  setColor,
}) => {
  return (
    <S.Container>
      <Heading as="h4" fontWeight="700" transform="capitalize">
        cores
      </Heading>

      <S.ButtonContainer>
        {colors.data.map((singleColor) => (
          <S.Button
            key={singleColor.id}
            color={singleColor.attributes.color}
            isActive={singleColor.attributes.name === color}
            onClick={() => setColor(singleColor.attributes.name)}
          ></S.Button>
        ))}
      </S.ButtonContainer>

      <span>{color}</span>
    </S.Container>
  );
};
