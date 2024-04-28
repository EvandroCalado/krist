import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;

    & .splide {
      margin-bottom: 2rem;
    }

    & .splide__list {
      width: 100%;
    }

    & .splide__slide {
      background-size: contain !important;
      background-color: ${theme.colors.secondary} !important;
      border-radius: ${theme.spacings.xs};
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
