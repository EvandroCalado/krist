import styled, { css } from 'styled-components';

type AddressProps = {
  openModal: boolean;
};

export const AddressContainer = styled.div<AddressProps>`
  ${({ openModal }) => css`
    position: fixed;
    inset: 0;
    z-index: 10;
    display: ${openModal ? 'block' : 'none'};
  `}
`;

export const AddressModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AddressModalForm = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 35rem;
    background-color: ${theme.colors.white};
    padding: ${theme.spacings.lg};
    border-radius: ${theme.spacings.xs};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    & > button {
      width: 100%;
      margin-top: ${theme.spacings.md};
    }

    & > svg {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.secondary};
      }
    }
  `}
`;
