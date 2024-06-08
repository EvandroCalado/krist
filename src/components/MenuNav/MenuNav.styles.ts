import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
    }
  `}
`;

export const Navlink = styled(NavLink)`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.primary};
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    transition: ${theme.transitions.faster};

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background-color: ${theme.colors.primary};
      transition: ${theme.transitions.faster};
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &.active {
      border-bottom: 2px solid ${theme.colors.primary};
    }
  `}
`;
