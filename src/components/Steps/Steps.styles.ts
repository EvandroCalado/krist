import styled, { css } from 'styled-components';

export const StepsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings.lg} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};
      flex-direction: column;
    }
  `}
`;

export const Steps = styled.div`
  flex: 2;
`;

export const StepsButtons = styled.div`
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

export const StepsButton = styled.div`
  ${({ theme }) => css`
    width: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xs};

    & > button {
      border: none;

      @media ${theme.media.lteOrEqMedium} {
        padding: 1rem;
      }

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

      @media ${theme.media.lteOrEqMedium} {
        width: 4.4rem;
        font-size: ${theme.font.sizes.sm};
      }
    }
  `}
`;

export const StepsPayment = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};
    border: 2px solid ${theme.colors.primary};
    padding: ${theme.spacings.md} ${theme.spacings.lg};

    & > label {
      width: 100%;
      text-transform: capitalize;
      font-weight: 600;
      cursor: pointer;
    }

    & > input {
      accent-color: ${theme.colors.primary};
    }

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
    }
  `}
`;

export const StepsTotals = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
    flex: 1;

    & > form > .StripeElement {
      padding: ${theme.spacings.lg};
      border: 1px solid ${theme.colors.secondary};
    }

    & > form > button {
      margin: ${theme.spacings.xl} 0;
      width: 100%;
    }
  `}
`;
