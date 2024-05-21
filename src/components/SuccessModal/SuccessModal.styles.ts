import styled, { css } from 'styled-components';

export const SuccessModalContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: brightness(60%);
`;

export const SuccessModal = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.lg};
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.lg};

    & > h3,
    & > h5 {
      text-align: center;
    }

    & > h5::first-letter {
      text-transform: capitalize;
    }
  `}
`;

export const SuccessModalIcon = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    height: 8rem;
    border: 10px solid ${theme.colors.gray};
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.white};
  `}
`;

export const SuccessModalButtons = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    & > button {
      width: 100%;
    }
  `}
`;
