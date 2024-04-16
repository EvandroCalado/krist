import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.gteOrEqMedium} {
      display: flex;
    }

    & > svg {
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.secondary};
      }
    }
  `}
`;
