import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
    }
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    position: fixed;
    padding: ${theme.paddings['5xl']};
  `}
`;

export const LoginImage = styled.div`
  flex: 1;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoginForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    & > form {
      width: 80%;
      display: flex;
      flex-direction: column;
      gap: ${theme.spacings['md']};
      margin: ${theme.paddings['2xl']} 0;

      @media ${theme.media.gteOrEqXLarge} {
        width: 50%;
      }

      @media ${theme.media.gteOrEqLarge} and ${theme.media.lteOrEqXLarge} {
        width: 70%;
      }

      @media ${theme.media.gteOrEqMedium} and ${theme.media.lteOrEqLarge} {
        width: 80%;
      }

      @media ${theme.media.gteOrEqSmall} and ${theme.media.lteOrEqMedium} {
        width: 60%;
      }

      & > p {
        color: ${theme.colors.gray};
        font-weight: 600;
        text-transform: capitalize;
        margin-bottom: 2rem;
      }

      & > span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 2rem;

        & > a {
          text-decoration: none;
          color: ${theme.colors.primary};
          text-transform: capitalize;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `}
`;
