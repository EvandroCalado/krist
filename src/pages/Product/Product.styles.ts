import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: ${theme.spacings.md} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};
    }
  `}
`;

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings['7xl']};
  `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.lg};
    margin: ${theme.spacings.xl} 0;

    & > button:first-of-type {
      padding: ${theme.spacings.md} ${theme.spacings['5xl']};
    }
  `}
`;
