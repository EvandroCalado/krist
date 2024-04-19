// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    position: relative;
    padding: ${theme.spacings.lg} ${theme.spacings['5xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg} ${theme.spacings.lg};
    }

    & > h2 {
      margin-bottom: ${theme.spacings.lg};

      @media ${theme.media.lteOrEqMedium} {
        font-size: ${theme.font.sizes.lg};
      }
    }

    & .splide__arrows {
      position: absolute;
      top: -46px;
      right: 40px;

      @media ${theme.media.lteOrEqMedium} {
        top: -38px;
      }
    }

    & .splide__arrow.splide__arrow--next {
      position: absolute;
      right: -40px;
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.spacings.xs};
      color: ${theme.colors.primary};
      padding: 2rem;
      opacity: 1;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &::after {
        position: absolute;
        top: 10px;
        right: 10px;
        content: '⃗';
        font-size: 4rem;
      }
    }

    & .splide__arrow.splide__arrow--prev {
      position: absolute;
      left: -50px;
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.spacings.xs};
      color: ${theme.colors.primary};
      padding: 2rem;
      opacity: 1;
      transition: ${theme.transitions.faster};
      outline: none;

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &::after {
        position: absolute;
        top: 10px;
        right: 10px;
        content: '⃖';
        font-size: 4rem;
      }
    }
  `}
`;

export const Carousel = styled(Splide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselSlide = styled(SplideSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
