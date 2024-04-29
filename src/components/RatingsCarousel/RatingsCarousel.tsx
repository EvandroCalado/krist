// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { FC } from 'react';

import { Heading, RatingCard, RatingCardProps } from 'components';

import * as S from './RatingsCarousel.styles';

export interface RatingsCarouselProps {
  ratings: RatingCardProps[];
}

export const RatingsCarousel: FC<RatingsCarouselProps> = ({ ratings }) => {
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
        {ratings.map((rating) => (
          <SplideSlide key={rating.id}>
            <RatingCard {...rating} />
          </SplideSlide>
        ))}
      </Splide>
    </S.Container>
  );
};
