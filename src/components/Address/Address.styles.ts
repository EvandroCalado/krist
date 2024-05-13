import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    margin: ${theme.spacings.xl} 0;
  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xl};
    margin: ${theme.spacings.xl} 0;
  `}
`;
