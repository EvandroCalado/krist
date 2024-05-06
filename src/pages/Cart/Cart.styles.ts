import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: 4.6rem ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};

      & > h1 {
        font-size: ${theme.font.sizes.xl};
      }
    }
  `}
`;

export const Info = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqBig} {
      gap: ${theme.spacings['5xl']};
    }

    @media ${theme.media.lteOrEqXLarge} {
      flex-direction: column;
      gap: ${theme.spacings.lg};
    }

    & .table {
      flex: 3;

      @media ${theme.media.lteOrEqBig} {
        gap: ${theme.spacings['5xl']};
        flex: 2;
      }

      @media ${theme.media.lteOrEqXLarge} {
        gap: ${theme.spacings.lg};
        flex: 1;
      }
    }

    & .totals {
      flex: 1;
    }
  `}
`;

export const EmptyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h2 > svg {
    width: 5rem;
    height: 5rem;
  }
`;
