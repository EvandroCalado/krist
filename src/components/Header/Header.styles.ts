import styled, { css } from 'styled-components';

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.md} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};

      & > .menu-nav {
        display: none;
      }
    }

    @media ${theme.media.gteOrEqMedium} {
      .menu-mobile {
        display: none;
      }
    }
  `}
`;

export const InfoMenu = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.lteOrEqSmall} {
      gap: 0.5rem;
    }
  `}
`;
