import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
    padding: ${theme.spacings.xs} 0;
    text-transform: capitalize;
    font-size: ${theme.font.sizes.sm};
    font-weight: 600;

    & > a {
      display: flex;
      align-items: center;

      &:hover {
        text-decoration: underline;
      }

      & > svg {
        width: 1.5rem;
      }
    }
  `}
`;
