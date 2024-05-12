import { useLoaderData } from 'react-router-dom';

import { ProductCard } from 'components/ProductCard';
import { StrapiProductsType } from 'types';

import * as S from './ProductsList.styles';

export const ProductsList = () => {
  const { products } = useLoaderData() as { products: StrapiProductsType };

  return (
    <S.GridContainer>
      {products.data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.GridContainer>
  );
};
