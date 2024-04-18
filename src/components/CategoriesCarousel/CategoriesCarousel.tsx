import { FC } from 'react';

import { CategoryCard, CategoryCardProps, Heading } from 'components';

import '@splidejs/react-splide/css';
import * as S from './CategoriesCarousel.styles';

export interface CategoriesCarouselProps {
  categories: CategoryCardProps[];
}

export const CategoriesCarousel: FC<CategoriesCarouselProps> = ({
  categories,
}) => {
  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
        Categorias
      </Heading>

      <S.Carousel
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 1,
          gap: '3rem',
          mediaQuery: 'min',
          breakpoints: {
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
        {categories.map((category) => (
          <S.CarouselSlide key={category.title}>
            <CategoryCard
              title={category.title}
              image={category.image}
              buttonLabel={category.buttonLabel}
            />
          </S.CarouselSlide>
        ))}
      </S.Carousel>
    </S.Container>
  );
};
