import styled, { css } from 'styled-components';

type ContainerProps = {
  open: boolean;
};

export const Container = styled.div<ContainerProps>`
  ${({ theme, open }) => css`
    max-height: 2rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: ${theme.transitions.faster};

    ${open &&
    `
      max-height: 100rem;
    `}
  `}
`;

export const TitleContainer = styled.div<ContainerProps>`
  ${({ theme, open }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    & > svg {
      transition: ${theme.transitions.faster};
    }

    ${open &&
    `
    & > svg {
      transform: rotate(180deg);
    }
    `}

    & > h3 {
      margin-bottom: ${theme.spacings.sm};
    }
  `}
`;
