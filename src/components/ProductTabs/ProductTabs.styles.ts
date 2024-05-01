import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xl};
    margin-bottom: ${theme.spacings['2xl']};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    width: max-content;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 3px solid transparent;
    padding: ${theme.spacings.sm} 0;
    text-transform: capitalize;
    font-size: ${theme.font.sizes.md};
    font-weight: 700;
    cursor: pointer;
    transition: ${theme.transitions.faster};

    &:hover {
      border-bottom: 3px solid ${theme.colors.primary};
    }
  `}
`;
