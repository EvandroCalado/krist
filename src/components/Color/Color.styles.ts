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

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    text-align: left;
    text-transform: capitalize;
    padding: ${theme.spacings.xs} ${theme.spacings.sm};
    border-radius: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.secondary};
    }
  `}
`;

export const Color = styled.div<Pick<ColorProps, 'colorHex'>>`
  ${({ colorHex }) => css`
    width: 3.5rem;
    height: 3rem;
    background-color: ${colorHex};
    border-radius: 0.5rem;
  `}
`;
