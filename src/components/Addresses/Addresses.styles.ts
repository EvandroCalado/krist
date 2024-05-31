import styled, { css } from 'styled-components';

export const Addresses = styled.div``;

export const AddressCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.xl} 0;
    border-bottom: 1px solid ${theme.colors.secondary};
  `}
`;

export const Address = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
    text-transform: capitalize;

    & > span {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.sm};
    }
  `}
`;

export const AddressButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.lg};

    & > button {
      color: ${theme.colors.primary};
      background-color: transparent;
      border: none;

      &:hover {
        background-color: ${theme.colors.secondary};
      }
    }

    & > form > button:last-child {
      background-color: transparent;
      color: ${theme.colors.warning};
      border: none;

      &:hover {
        background-color: ${theme.colors.secondary};
      }
    }
  `}
`;
