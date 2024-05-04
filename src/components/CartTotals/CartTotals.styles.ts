import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: max-content;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: ${theme.spacings.lg};
    border: 1px solid ${theme.colors.secondary};
    border-radius: ${theme.spacings.xs};

    & > button {
      width: 100%;
    }
  `}
`;

export const SubtotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  text-transform: capitalize;
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    & > label {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
    }

    & > div {
      display: flex;
      width: 100%;
      border: 1px solid ${theme.colors.primary};
      border-radius: ${theme.spacings.xs};
      margin-top: ${theme.spacings.xs};

      & > input {
        width: 100%;
        outline: none;
        border: none;
        padding: ${theme.spacings.md};
        font-size: ${theme.font.sizes.md};
        background-color: transparent;
        color: ${theme.colors.primary};
      }

      & > button {
        outline: none;
        border: none;
        border-radius: 0 ${theme.spacings.xs} ${theme.spacings.xs} 0;
        text-transform: capitalize;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-weight: 600;
        padding: ${theme.spacings.md};
        transition: ${theme.transitions.faster};
        cursor: pointer;

        &:hover {
          opacity: 0.85;
        }
      }
    }
  `}
`;

export const DeliveryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: capitalize;
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  text-transform: capitalize;
`;
