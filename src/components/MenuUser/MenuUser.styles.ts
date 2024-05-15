import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${theme.spacings.md};

    @media ${theme.media.lteOrEqSmall} {
      gap: 0.5rem;
    }

    & .menu-hover {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      opacity: 0;
      visibility: hidden;
      width: 10rem;
      position: absolute;
      right: 0;
      bottom: -5rem;
      background-color: ${theme.colors.white};
      padding: ${theme.spacings.sm};
      box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
      border-radius: ${theme.spacings.xs};
      transition: ${theme.transitions.fast};

      &.open {
        opacity: 1;
        visibility: visible;
        bottom: -7rem;
      }

      & > button {
        width: 100%;
        background-color: transparent;
        border: none;
        outline: none;
        padding: 0.4rem ${theme.spacings.sm};
        border-radius: 0.2rem;
        cursor: pointer;

        &:hover {
          background-color: ${theme.colors.secondary};
        }
      }
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
