import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    height: 87.5vh;
    margin: 0 ${theme.spacings.lg};
    background-color: ${theme.colors.secondary};

    @media ${theme.media.lteOrEqMedium} {
      height: 100%;
    }

    & .splide__arrow.splide__arrow--next {
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.spacings.xs};
      color: ${theme.colors.primary};
      padding: 2rem;
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
      background-color: ${theme.colors.secondary};
      border-radius: ${theme.spacings.xs};
      color: ${theme.colors.primary};
      padding: 2rem;
      transition: ${theme.transitions.faster};

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

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: 100%;

    @media ${theme.media.lteOrEqMedium} {
      height: 87.5vh;
      flex-direction: column;
    }
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings['7xl']};

    @media ${theme.media.lteOrEqLarge} {
      padding: ${theme.spacings.lg};
    }

    @media ${theme.media.lteOrEqMedium} {
      flex: none;
      height: 50%;
      align-items: center;
      padding: ${theme.spacings.lg};

      & > h1 {
        font-size: ${theme.font.sizes.xl};
        text-align: center;
      }

      & > h2 {
        font-size: ${theme.font.sizes.lg};
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    height: 87vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xl};

    @media ${theme.media.lteOrEqBig} {
      flex: 2;
      padding: ${theme.spacings.lg};
    }

    @media ${theme.media.lteOrEqMedium} {
      flex: none;
      height: 50%;
    }

    & > img {
      position: relative;
      z-index: 5;
      width: 100%;
      height: 100%;
      object-fit: contain;

      @media ${theme.media.lteOrEqBig} {
        oject-fit: cover;
      }

      @media ${theme.media.lteOrEqSmall} {
        object-fit: contain;
      }

      @media ${theme.media.lteOrEqSmallest} {
        object-fit: cover;
      }
    }

    & > .back {
      height: 74rem;
      background-color: transparent;
      position: absolute;
      z-index: 2;
      inset: 0;
      border: 3rem solid ${theme.colors.white};
      margin: 6rem;

      @media ${theme.media.lteOrEqLarge} {
        margin: ${theme.spacings.lg};
      }

      @media ${theme.media.lteOrEqMedium} {
        height: auto;
        border: 2rem solid ${theme.colors.white};
        margin: 2rem;
      }
    }

    & > .front {
      height: 74rem;
      background-color: transparent;
      position: absolute;
      z-index: 20;
      inset: 0;
      margin: 3rem;
      border-bottom: 3rem solid ${theme.colors.white};
      border-right: 3rem solid ${theme.colors.white};
      margin: 6rem;

      @media ${theme.media.lteOrEqLarge} {
        margin: ${theme.spacings.lg};
      }

      @media ${theme.media.lteOrEqMedium} {
        height: auto;
        border-bottom: 2rem solid ${theme.colors.white};
        border-right: 2rem solid ${theme.colors.white};
        margin: 2rem;
      }
    }
  `}
`;
