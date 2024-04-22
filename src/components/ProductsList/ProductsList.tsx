import { FC } from 'react';

import { Heading } from 'components';
import { ProductCard, ProductCardProps } from 'components/ProductCard';

import * as S from './ProductsList.styles';

export interface ProductsListProps {
  products: ProductCardProps[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="600">
        em destaque
      </Heading>
      <S.GridContainer>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </S.GridContainer>
    </S.Container>
  );
};
