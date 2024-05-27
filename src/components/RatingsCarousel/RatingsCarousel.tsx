// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Heading, RatingCard } from 'components';
import { StrapiRatingsType } from 'types';

import * as S from './RatingsCarousel.styles';

export interface RatingsCarouselProps {}

export const RatingsCarousel: FC<RatingsCarouselProps> = () => {
  const { ratings } = useLoaderData() as {
    ratings: StrapiRatingsType;
  };

  return (
    <S.Container>
      <Heading as="h2" transform="capitalize" size="2xl" fontWeight="700">
        clientes dizem
      </Heading>

      <Splide
        options={{
          type: 'loop',
          perMove: 1,
          perPage: 1,
          pagination: false,
          gap: '6rem',
          mediaQuery: 'min',
          breakpoints: {
            992: {
              perPage: 2,
            },
            1200: {
              perPage: 3,
            },
          },
        }}
      >
        {ratings.data
          .map((rating) => (
            <SplideSlide key={rating.id}>
              <RatingCard rating={rating} />
            </SplideSlide>
          ))
          .reverse()}
      </Splide>
    </S.Container>
  );
};
