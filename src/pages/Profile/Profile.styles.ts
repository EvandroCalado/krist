import styled, { css } from 'styled-components';

export const ProfileContainer = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.lg} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};
    }
  `}
`;

export const ProfileMenus = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xl};
    margin: ${theme.spacings['2xl']} 0;
  `}
`;

export const ProfileSideMenu = styled.div`
  ${({ theme }) => css`
    flex: 1;

    & > button {
      width: 100%;
      border: none;
      justify-content: left;
      margin-bottom: ${theme.spacings.xs};

      &.active {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }
    }
  `}
`;

export const ProfileMainMenu = styled.div`
  ${({ theme }) => css`
    flex: 4;
  `}
`;

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    & > .avatar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: ${theme.spacings.lg};

      & .avatar_img {
        position: relative;

        & > img {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
        }

        & > button {
          padding: 0.5rem;
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }

    & > .inputs {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.md};
      margin-bottom: ${theme.spacings.lg};

      & .input {
        width: 100%;
      }
    }
  `}
`;

export const ProfileAvatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.sm};
    margin-bottom: ${theme.spacings.md};

    & > img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    & > div {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;

      & :nth-child(2) {
        font-weight: 700;
      }
    }
  `}
`;
