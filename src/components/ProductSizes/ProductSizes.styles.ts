import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;

    & > button {
      width: 5rem;
      text-transform: uppercase;

      &.active {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;
