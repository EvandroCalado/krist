import styled, { css } from 'styled-components';

export const Table = styled.table`
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

export const Tr = styled.tr``;

export const Th = styled.th`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.sm};
  `}
`;

export const Td = styled.td``;

export const TBody = styled.tbody`
  ${({ theme }) => css`
    padding: ${theme.spacings.md};
  `}
`;
