import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings['5xl']};
    padding: ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      height: 80rem;
      flex-direction: column;
      padding: ${theme.spacings.lg};
      gap: ${theme.spacings.xs};
    }
  `}
`;

export const SaleContainer = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings['2xl']} 0;

    @media ${theme.media.lteOrEqMedium} {
      height: 50%;
    }

    @media ${theme.media.lteOrEqXLarge} {
      & > h2 {
        font-size: ${theme.font.sizes.xl};
        margin-bottom: ${theme.spacings.md};
      }
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 2rem;

    @media ${theme.media.lteOrEqXLarge} {
      font-size: ${theme.font.sizes.md};
    }

    @media ${theme.media.lteOrEqLarge} {
      font-size: 1.4rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 5;
    flex: 1;
    height: 50rem;

    @media ${theme.media.lteOrEqMedium} {
      flex: none;
      height: 30rem;
    }

    @media ${theme.media.lteOrEqXLarge} {
      flex: 2;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    & > .front {
      position: absolute;
      z-index: 10;
      inset: 0;
      margin: 6rem;
      border-bottom: 2rem solid ${theme.colors.secondary};
      border-right: 2rem solid ${theme.colors.secondary};

      @media ${theme.media.lteOrEqLarge} {
        border-bottom: 1rem solid ${theme.colors.secondary};
        border-right: 1rem solid ${theme.colors.secondary};
      }
    }

    & > .back {
      position: absolute;
      z-index: -1;
      inset: 0;
      margin: 6rem;
      border-top: 2rem solid ${theme.colors.secondary};
      border-left: 2rem solid ${theme.colors.secondary};

      @media ${theme.media.lteOrEqLarge} {
        border-top: 1rem solid ${theme.colors.secondary};
        border-left: 1rem solid ${theme.colors.secondary};
      }
    }
  `}
`;
