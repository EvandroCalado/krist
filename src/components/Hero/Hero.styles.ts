import styled, { css } from 'styled-components';

export const Section = styled.section`
  ${({ theme }) => css`
    height: 100%;
    margin: 0 ${theme.spacings.lg};
    background-color: ${theme.colors.secondary};

    @media ${theme.media.gteOrEqLarge} {
      height: 840px;
      flex-direction: column;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;

    @media ${theme.media.gteOrEqLarge} {
      flex-direction: row;
    }
  `}
`;

export const InfoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings['5xl']};

    & > h1 {
      text-align: center;
    }

    @media ${theme.media.gteOrEqLarge} {
      flex: 1;
      align-items: start;

      & > h1 {
        text-align: left;
      }
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    height: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.xl};

    @media ${theme.media.gteOrEqLarge} {
      flex: 1;
      padding: 0 ${theme.spacings['5xl']};
      height: 100%;
    }

    & > img {
      position: relative;
      z-index: 5;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media ${theme.media.gteOrEqLarge} {
        object-fit: contain;
      }
    }

    & > .back {
      background-color: transparent;
      position: absolute;
      inset: 0;
      border: 1.5rem solid ${theme.colors.white};
      margin: 3rem;

      @media ${theme.media.gteOrEqSmall} {
        border: 2rem solid ${theme.colors.white};
        margin: 4rem;
      }

      @media ${theme.media.gteOrEqLarge} {
        border: 3rem solid ${theme.colors.white};
        margin: 6rem;
      }
    }

    & > .front {
      background-color: transparent;
      position: absolute;
      z-index: 10;
      inset: 0;
      margin: 3rem;
      border-bottom: 1.5rem solid ${theme.colors.white};
      border-right: 1.5rem solid ${theme.colors.white};

      @media ${theme.media.gteOrEqSmall} {
        border-bottom: 2rem solid ${theme.colors.white};
        border-right: 2rem solid ${theme.colors.white};
        margin: 4rem;
      }

      @media ${theme.media.gteOrEqLarge} {
        border-bottom: 3rem solid ${theme.colors.white};
        border-right: 3rem solid ${theme.colors.white};
        margin: 6rem;
      }
    }
  `}
`;
