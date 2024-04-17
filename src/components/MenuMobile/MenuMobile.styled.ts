import styled, { css } from 'styled-components';

type OpenProps = {
  open: boolean;
};

const menuChanger = (menuOpen: OpenProps['open']) => css`
  right: ${menuOpen ? '0' : '-320px'};
`;

export const Container = styled.div`
  ${({ theme }) => css`
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

export const MenuContainer = styled.div<OpenProps>`
  ${({ theme, open }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    position: fixed;
    top: 0;
    z-index: 30;
    width: 320px;
    height: 100%;
    background-color: ${theme.colors.secondary};
    transition: ${theme.transitions.fast};

    ${menuChanger(open)}

    & > svg {
      position: absolute;
      right: ${theme.spacings.xl};
      top: ${theme.spacings.xl};
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.white};
      }
    }
  `}
`;
