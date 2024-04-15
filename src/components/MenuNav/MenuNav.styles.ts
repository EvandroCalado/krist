import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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
