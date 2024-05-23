import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-transform: capitalize;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    outline: none;
    font-size: ${theme.font.sizes.md};
    padding: ${theme.spacings.md};
    border-radius: ${theme.spacings.xs};
    border: 1px solid ${theme.colors.primary};

    &:focus {
      outline: 3px solid ${theme.colors.primary};
      outline-offset: 1px;
    }

    &:disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  `}
`;
