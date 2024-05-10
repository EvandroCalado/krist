import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    accent-color: ${theme.colors.primary};
    margin-bottom: ${theme.spacings.xs};
    cursor: pointer;
  `}
`;

export const Range = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${theme.font.sizes.sm};
  `}
`;
