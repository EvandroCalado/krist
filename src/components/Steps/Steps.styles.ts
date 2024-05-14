import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings.lg} ${theme.spacings['10xl']};
  `}
`;

export const Steps = styled.div`
  flex: 3;
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.md};

    & > hr {
      border-style: dashed;
      border-color: ${theme.colors.secondary};
      width: 100%;

      &.active {
        border-color: ${theme.colors.primary};
      }
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xs};

    & > button {
      border: none;

      &.active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }

    & > span {
      width: 8.6rem;
      text-align: center;
      font-weight: 600;
      text-transform: capitalize;
    }
  `}
`;

export const Totals = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
    flex: 1;

    & > button {
      width: 100%;
    }
  `}
`;

export const StepPayment = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};
  `}
`;
