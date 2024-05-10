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
    width: 100%;
    font-size: ${theme.font.sizes.md};
    text-transform: capitalize;
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings.xs} ${theme.spacings.sm};
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary};
    }
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
