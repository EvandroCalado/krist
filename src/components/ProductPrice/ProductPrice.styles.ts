import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
  `}
`;

export const FinalPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: 600;
  `}
`;

export const OriginalPrice = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: 600;
    text-decoration: line-through;
    color: ${theme.colors.gray};
  `}
`;
