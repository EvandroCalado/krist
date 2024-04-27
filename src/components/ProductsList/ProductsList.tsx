import { useLoaderData } from 'react-router-dom';

import { Heading } from 'components';
import { ProductCard } from 'components/ProductCard';
import { StrapiFeaturedType } from 'types';

import * as S from './ProductsList.styles';

export const ProductsList = () => {
  const { products } = useLoaderData() as { products: StrapiFeaturedType };

  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="600">
        em destaque
      </Heading>
      <S.GridContainer>
        {products.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </S.GridContainer>
    </S.Container>
  );
};
