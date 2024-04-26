import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { CategoryCard, CategoryCardProps, Heading } from 'components';
import { StrapiCategoriesType } from 'types/strapi-categories-type';

import * as S from './CategoriesCarousel.styles';

import '@splidejs/react-splide/css';

export interface CategoriesCarouselProps {
  categories: CategoryCardProps[];
}

export const CategoriesCarousel: FC<CategoriesCarouselProps> = () => {
  const { categories } = useLoaderData() as {
    categories: StrapiCategoriesType;
  };

  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
        Categorias
      </Heading>

      <S.Carousel
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
          <S.CarouselSlide key={category.id}>
            <CategoryCard
              title={category.attributes.name}
              image={
                category.attributes.cover.data.attributes.formats.medium.url
              }
              buttonLabel={category.attributes.name}
            />
          </S.CarouselSlide>
        ))}
      </S.Carousel>
    </S.Container>
  );
};
