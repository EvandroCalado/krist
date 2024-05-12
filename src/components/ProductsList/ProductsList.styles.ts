import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    & > h2 {
      text-align: center;
      margin: ${theme.spacings['2xl']} 0;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 6rem;

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};
      grid-template-columns: repeat(auto-fill, minmax(300, 1fr));
    }
  `}
`;
