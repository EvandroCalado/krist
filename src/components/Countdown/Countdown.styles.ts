import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xl};
    margin: ${theme.spacings.lg};
  `}
`;

export const DateContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.xs};
  `}
`;

export const Counter = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes['2xl']};
    font-weight: 700;
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes.sm};
  `}
`;
