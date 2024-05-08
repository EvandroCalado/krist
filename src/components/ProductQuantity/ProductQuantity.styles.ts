import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: max-content;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.spacings.xs};
    font-size: ${theme.font.sizes.md};

    @media ${theme.media.lteOrEqSmall} {
      gap: 0.5rem;
    }

    & > span {
      width: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media ${theme.media.lteOrEqSmall} {
        width: 1;
      }
    }

    & > button {
      font-size: ${theme.font.sizes.lg};
      border: none;
      outline: none;
      background-color: transparent;
      padding: 0.95rem ${theme.font.sizes.md};
      cursor: pointer;

      @media ${theme.media.lteOrEqSmall} {
        padding: 0.95rem;
      }
    }
  `}
`;
