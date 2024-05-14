import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Heading } from 'components';
import { ProductCard } from 'components/ProductCard';
import { StrapiProductsType } from 'types';

import * as S from './ProductsList.styles';

export interface ProductsListProps {
  title?: string;
}

export const ProductsList: FC<ProductsListProps> = ({ title }) => {
  const { products } = useLoaderData() as { products: StrapiProductsType };

  return (
    <S.Container className="products-list">
      {title && (
        <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
          {title}
        </Heading>
      )}
      <S.GridContainer>
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.GridContainer>
    </S.Container>
  );
};
