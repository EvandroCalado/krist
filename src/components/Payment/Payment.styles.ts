import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 50rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    margin: ${theme.spacings.xl} 0;
  `}
`;
