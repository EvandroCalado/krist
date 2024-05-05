import styled, { css } from 'styled-components';

import { CartModalProps } from './CartModal';

export const Container = styled.div<Pick<CartModalProps, 'openCart'>>`
  ${({ theme, openCart }) => css`
    position: absolute;
    top: -3rem;
    right: -44rem;
    z-index: 60;
    width: 33rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
    padding: ${theme.spacings.lg};
    background-color: ${theme.colors.white};
    transition: ${theme.transitions.faster};

    ${openCart && 'right: -10.5rem;'}

    @media ${theme.media.lteOrEqMedium} {
      ${openCart && 'right: -8rem;'}
    }

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
