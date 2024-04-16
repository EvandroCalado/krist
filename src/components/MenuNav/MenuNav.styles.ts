import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.gteOrEqMedium} {
      display: flex;
    }
  `}
`;

export const Navlink = styled(NavLink)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    text-transform: capitalize;
    transition: ${theme.transitions.faster};

    &:hover {
      opacity: 0.7;
    }
  `}
`;
