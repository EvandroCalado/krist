import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
    gap: ${theme.spacings['2xl']};
    padding: ${theme.spacings['5xl']};

    @media ${theme.media.lteOrEqLarge} {
      grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    }

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};
      grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    }

    @media ${theme.media.lteOrEqSmall} {
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
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
