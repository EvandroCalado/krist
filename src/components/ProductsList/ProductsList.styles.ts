import styled, { css } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin: 0 auto;
  }
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings['10xl']};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 6rem;

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};
      grid-template-columns: repeat(auto-fill, minmax(300, 1fr));
    }
  `}
`;
