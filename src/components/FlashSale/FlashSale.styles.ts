import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings['5xl']};
    padding: ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
      padding: ${theme.spacings.lg};
      gap: ${theme.spacings.xs};
    }
  `}
`;

export const SaleContainer = styled.div`
  ${({ theme }) => css`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings['2xl']} 0;

    @media ${theme.media.lteOrEqLarge} {
      flex: 1;

      & > h2 {
        font-size: ${theme.font.sizes['2xl']};
        margin-bottom: ${theme.spacings.md};
      }
    }

    @media ${theme.media.lteOrEqMedium} {
      & > h2 {
        /* font-size: ${theme.font.sizes['2xl']}; */
        margin-bottom: ${theme.spacings.md};
      }
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};

    @media ${theme.media.lteOrEqLarge} {
      font-size: 1.8rem;
    }

    @media ${theme.media.lteOrEqMedium} {
      font-size: ${theme.font.sizes.md};
    }
  `}
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 50rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
