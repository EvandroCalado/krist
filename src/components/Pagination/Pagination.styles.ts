import styled, { css } from 'styled-components';

export const PaginationContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacings.sm};
    margin: ${theme.spacings.lg} 0;

    & button {
      width: 4rem;
      height: 4rem;
      padding: ${theme.spacings.sm};
    }

    & > button {
      border: none;
      background-color: ${theme.colors.secondary};

      &:disabled {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.gray};
        opacity: 1;
      }
    }
  `}
`;

export const PaginationPages = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};

    & > button {
      &.active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `}
`;
