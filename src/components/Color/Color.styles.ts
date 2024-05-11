import styled, { css } from 'styled-components';

import { ColorProps } from './Color';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: left;
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
  display: none;
  visibility: hidden;
`;

export const Color = styled.div<Pick<ColorProps, 'colorHex'>>`
  ${({ theme, colorHex }) => css`
    width: 3.5rem;
    height: 3rem;
    background-color: ${colorHex};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.secondary};
    margin: 0.3rem;

    &.active {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 1px;
    }
  `}
`;
