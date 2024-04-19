import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: ${theme.spacings['2xl']};
    padding: ${theme.spacings['5xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};
      grid-template-columns: repeat(auto-fill, minmax(300, 1fr));
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    grid-gap: ${theme.spacings.sm};
    background-color: ${theme.colors.secondary};
    padding: ${theme.spacings.lg};
    border-radius: ${theme.spacings.xs};

    & > svg {
      width: 4rem;
      height: 4rem;
    }

    & > h4 {
      text-transform: capitalize;
      font-weight: 700;
    }

    & > p {
      color: ${theme.colors.gray};
      font-size: 1.4rem;
      font-weight: 500;

      &::first-letter {
        text-transform: capitalize;
      }
    }
  `}
`;
