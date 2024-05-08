import styled, { css } from 'styled-components';

import { CartModalProps } from './CartModal';

export const Container = styled.div``;

export const FadeContainer = styled.div<Pick<CartModalProps, 'openCart'>>`
  ${({ theme, openCart }) => css`
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 33rem;
    z-index: 30;
    flex: 1;
    opacity: 0;
    visibility: hidden;
    background-color: ${theme.colors.black};
    transition: ${theme.transitions.faster};

    ${openCart &&
    css`
      opacity: 0.2;
      visibility: visible;
    `}
  `}
`;

export const CartContainer = styled.div<Pick<CartModalProps, 'openCart'>>`
  ${({ theme, openCart }) => css`
    position: fixed;
    top: 0;
    bottom: 0;
    right: -33rem;
    z-index: 60;
    overflow-y: auto;
    width: 33rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: ${theme.spacings.lg};
    background-color: ${theme.colors.white};
    transition: ${theme.transitions.faster};
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.primary} ${theme.colors.white};

    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.white};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.primary};
      border-radius: 20px;
      border: 3px solid ${theme.colors.white};
    }

    ${openCart && 'right: 0;'}

    & .subtotal {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-transform: capitalize;
    }

    & > button {
      width: 100%;
    }
  `}
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > span {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
      font-weight: 600;
    }

    & > svg {
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

export const EmptyContainer = styled.div`
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > h2 > svg {
    width: 3rem;
    height: 3rem;
  }
`;
