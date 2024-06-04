import { Form } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SearchContainer = styled(Form)`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;

    & > input {
      width: 100%;
      outline: none;
      border: 1px solid ${theme.colors.primary};
      padding: ${theme.spacings.sm} ${theme.spacings['2xl']}
        ${theme.spacings.sm} ${theme.spacings.md};
      border-radius: ${theme.spacings.xs};

      &:focus {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: 1px;
      }
    }

    & > svg {
      position: absolute;
      right: ${theme.spacings.md};
    }
  `}
`;
