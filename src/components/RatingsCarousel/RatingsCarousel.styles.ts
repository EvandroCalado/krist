// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from 'styled-components';

import { Container as CategoriesContainer } from '../CategoriesCarousel/CategoriesCarousel.styles';

export const Container = styled(CategoriesContainer)`
  margin: 4rem 0;
`;

export const Carousel = styled(Splide)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 ${({ theme }) => theme.spacings['10xl']};
`;

export const CarouselSlide = styled(SplideSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
