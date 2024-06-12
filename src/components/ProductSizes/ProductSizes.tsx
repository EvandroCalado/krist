import { FC } from 'react';

import { Button, Heading } from 'components';
import { StrapiProductType } from 'types';

import * as S from './ProductSizes.styles';

export interface ProductSizesProps {
  sizes: StrapiProductType['attributes']['variants'][0]['sizes'];
  size: string;
  setSize: (size: string) => void;
  setQuantity: (quantity: number) => void;
}

export const ProductSizes: FC<ProductSizesProps> = ({
  sizes,
  size,
  setSize,
  setQuantity,
}) => {
  const handleOnClick = (size: string) => {
    setSize(size);
    setQuantity(1);
  };

  return (
    <S.Container>
      <Heading as="h4" fontWeight="700" transform="capitalize">
        tamanhos
      </Heading>

      <S.ButtonContainer>
        {sizes.map((singleSize) => (
          <Button
            key={singleSize.id}
            variant="secondary"
            disabled={singleSize.quantity === null}
            className={singleSize.size === size ? 'active' : ''}
            onClick={() => handleOnClick(singleSize.size)}
          >
            {singleSize.size}
          </Button>
        ))}
      </S.ButtonContainer>
    </S.Container>
  );
};
