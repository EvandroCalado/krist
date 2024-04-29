import { FC } from 'react';

import { Button, Heading } from 'components';
import { StrapiProductSizesType } from 'types';

import * as S from './ProductSizes.styles';

export interface ProductSizesProps {
  sizes: StrapiProductSizesType;
  size: string;
  setSize: (size: string) => void;
}

export const ProductSizes: FC<ProductSizesProps> = ({
  sizes,
  size,
  setSize,
}) => {
  return (
    <S.Container>
      <Heading as="h4" fontWeight="700" transform="capitalize">
        tamanhos
      </Heading>

      <S.ButtonContainer>
        {sizes.data.map((singleSize) => (
          <Button
            key={singleSize.id}
            variant="secondary"
            className={singleSize.attributes.name === size ? 'active' : ''}
            onClick={() => setSize(singleSize.attributes.name)}
          >
            {singleSize.attributes.name}
          </Button>
        ))}
      </S.ButtonContainer>
    </S.Container>
  );
};
