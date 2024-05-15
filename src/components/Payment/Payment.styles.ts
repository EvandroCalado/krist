import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    margin: ${theme.spacings.xl} 0;

    @media ${theme.media.lteOrEqXLarge} {
      width: 70%;
    }

    @media ${theme.media.lteOrEqLarge} {
      width: 100%;
    }
  `}
`;
