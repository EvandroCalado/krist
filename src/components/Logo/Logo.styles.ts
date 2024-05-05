import styled, { css } from 'styled-components';

export const Logo = styled.img`
  ${({ theme }) => css`
    width: 143px;
    height: 59px;
    object-fit: contain;

    @media ${theme.media.lteOrEqMedium} {
      width: 100px;
    }

    @media ${theme.media.lteOrEqSmall} {
      width: 70px;
    }
  `}
`;
