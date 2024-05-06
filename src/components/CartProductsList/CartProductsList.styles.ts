import styled, { css } from 'styled-components';

export const Table = styled.table`
  height: max-content;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;
`;

export const THead = styled.thead`
  ${({ theme }) => css`
    text-transform: capitalize;
    padding-bottom: ${theme.spacings.md};
  `}
`;

export const Th = styled.th`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.sm};

    @media ${theme.media.lteOrEqXLarge} {
      &:nth-child(2) {
        display: none;
      }
    }

    @media ${theme.media.lteOrEqSmall} {
      &:nth-child(3) {
        display: none;
      }
    }
  `}
`;

export const TBody = styled.tbody`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};
  `}
`;

export const TFoot = styled.tfoot`
  ${({ theme }) => css`
    & > tr > td > button {
      margin: ${theme.spacings.xl} 0;

      @media ${theme.media.lteOrEqSmall} {
        display: none;
      }
    }
  `}
`;
