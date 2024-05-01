import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;
export const ItemContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-transform: capitalize;
  `}
`;

export const ItemTitle = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    margin-right: ${theme.spacings.md};
  `}
`;

export const Item = styled.span`
  ${({ theme }) => css`
    font-weight: 500;

    &:not(:last-child):after {
      content: ',';
      margin-right: ${theme.spacings.xs};
    }
  `}
`;
