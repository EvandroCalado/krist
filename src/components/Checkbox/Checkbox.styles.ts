import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    text-transform: capitalize;
    cursor: pointer;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 1.5rem;
    height: 1.5rem;
    accent-color: ${theme.colors.primary};
    cursor: pointer;
  `}
`;
