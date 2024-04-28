// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Splide as splide,
  SplideSlide as splideSlide,
} from '@splidejs/react-splide';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    & .splide__list {
      width: 100%;
    }

    & .product-image {
      width: 100%;
      height: 50rem;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    & .thumb-image {
      width: 10rem;
      height: 7rem;
      border-radius: ${({ theme }) => theme.spacings.xs};

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  `}
`;

export const Splide = styled(splide)`
  margin-bottom: 2rem;
`;

export const SplideSlide = styled(splideSlide)`
  background-size: contain !important;
  background-color: ${({ theme }) => theme.colors.secondary} !important;
  border-radius: ${({ theme }) => theme.spacings.xs};
`;
