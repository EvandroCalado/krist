// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Heading, ProductCard } from 'components';
import { StrapiProductsByCategoriesType } from 'types';

import * as S from './RelatedProducts.styles';

export interface RelatedProductsProps {}

export const RelatedProducts: FC<RelatedProductsProps> = () => {
  const { byCategories } = useLoaderData() as {
    byCategories: StrapiProductsByCategoriesType;
  };

  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
        produtos relacionados
      </Heading>

      <Splide
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 2,
          gap: '3rem',
          mediaQuery: 'min',
          breakpoints: {
            0: {
              perPage: 1,
            },
            576: {
              perPage: 2,
            },
            992: {
              perPage: 3,
            },
            1200: {
              perPage: 4,
            },
          },
        }}
      >
        {byCategories.data.map((product) => (
          <SplideSlide key={product.id}>
            <ProductCard product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </S.Container>
  );
};
