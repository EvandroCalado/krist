import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    & > h2 {
      margin: ${theme.spacings['2xl']} 0;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} ${theme.spacings['5xl']};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 6rem;
  `}
`;
