import styled, { DefaultTheme, css } from 'styled-components';

import { ButtonProps } from '.';

const backgroundVariant = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.white};
  `,
};

const colorVariant = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary};
  `,
};

const hoverVariant = {
  primary: css`
    &:hover {
      opacity: 0.85;
    }
  `,
  secondary: css`
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary};
    }
  `,
};

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant = 'primary', width = 'max-content' }) => css`
    width: ${width};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.xs};
    padding: ${theme.spacings.md};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.spacings.xs};
    font-weight: 600;
    text-transform: capitalize;
    outline: none;
    cursor: pointer;
    transition: ${theme.transitions.faster};

    ${backgroundVariant[variant!](theme)};

    ${colorVariant[variant!](theme)};

    ${hoverVariant[variant!]};

    &:active {
      transform: scale(1.03);
    }

    &:disabled {
      opacity: 0.1;
      pointer-events: none;
    }
  `}
`;
