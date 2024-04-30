import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Rating = styled.div``;

export const Average = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: 600;
  `}
`;

export const Reviews = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-weight: 600;
  `}
`;
