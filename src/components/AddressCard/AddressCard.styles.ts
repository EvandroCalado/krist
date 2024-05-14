import styled, { css } from 'styled-components';

export const AddressCardContainer = styled.div`
  ${({ theme }) => css`
    width: 27rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const AddressCardTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: capitalize;
    font-weight: 700;

    & > label {
      width: 100%;
      cursor: pointer;
    }

    & > input {
      accent-color: ${theme.colors.primary};
      cursor: pointer;
    }
  `}
`;

export const AddressCardName = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-transform: capitalize;
    font-weight: 700;
  `}
`;

export const AddressCardDescription = styled(AddressCardName)`
  font-weight: 400;
`;

export const AddressCardZipcode = styled(AddressCardName)`
  font-weight: 400;
`;

export const AddressCardButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.md};

    & .edit {
      background-color: ${theme.colors.secondary};
    }

    & .delete {
      color: ${theme.colors.warning};
      background-color: #faecec;
    }

    & > button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.xs};
      border-radius: 0.5rem;
      border: none;
      padding: ${theme.spacings.xs};
      text-transform: capitalize;
      transition: ${theme.transitions.faster};
      cursor: pointer;

      &:hover {
        filter: brightness(98%);
      }

      &:active {
        transform: scale(1.05);
      }

      & > svg {
        width: 1.5rem;
      }
    }
  `}
`;
