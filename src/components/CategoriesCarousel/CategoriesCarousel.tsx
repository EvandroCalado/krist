// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useLoaderData } from 'react-router-dom';

import { CategoryCard, Heading } from 'components';
import { StrapiCategoriesType } from 'types';

import * as S from './CategoriesCarousel.styles';

import '@splidejs/react-splide/css';

export const CategoriesCarousel = () => {
  const { categories } = useLoaderData() as {
    categories: StrapiCategoriesType;
  };

  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
        Categorias
      </Heading>

      <Splide
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 2,
          gap: '3rem',
          mediaQuery: 'min',
          breakpoints: {
            576: {
              perPage: 3,
            },
            992: {
              perPage: 4,
            },
            1200: {
              perPage: 5,
            },
          },
        }}
      >
        {categories.data.map((category) => (
          <SplideSlide key={category.id}>
            <CategoryCard
              title={category.attributes.name}
              image={
                category.attributes.cover.data.attributes.formats.medium.url
              }
              buttonLabel={category.attributes.name}
            />
          </SplideSlide>
        ))}
      </Splide>
    </S.Container>
  );
};
