import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
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

      @media ${theme.media.lteOrEqMedium} {
        &:hover {
          background-color: ${theme.colors.white};
        }
      }
    }
  `}
`;
