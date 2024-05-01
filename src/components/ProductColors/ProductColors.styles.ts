import styled, { DefaultTheme, css } from 'styled-components';

type ButtonProps = {
  theme: DefaultTheme;
  color: string;
  isActive: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    & > span {
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.primary};
      text-transform: capitalize;
    }
  `}
`;

export const ButtonContainer = styled.div``;

export const Button = styled.button<ButtonProps>`
  ${({ theme, color, isActive }) => css`
    width: 4rem;
    height: 4rem;
    outline: none;
    border: 2px solid ${theme.colors.secondary};
    background-color: ${color};
    border-radius: ${theme.spacings.xs};
    margin: 1rem 1rem 0 0;
    cursor: pointer;

    &:disabled {
      background-color: ${theme.colors.secondary};
      pointer-events: none;
    }

    ${isActive &&
    css`
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 1px;
    `}
  `}
`;
