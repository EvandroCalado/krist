import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.lg};
    margin: ${theme.spacings.lg} 0;
  `}
`;
