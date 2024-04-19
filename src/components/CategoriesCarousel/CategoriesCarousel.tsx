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
