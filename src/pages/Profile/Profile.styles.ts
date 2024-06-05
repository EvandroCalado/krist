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

    @media ${theme.media.lteOrEqMedium} {
      gap: ${theme.spacings.sm};
    }
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

      @media ${theme.media.lteOrEqMedium} {
        width: max-content;

        & > span {
          display: none;
        }
      }
    }
  `}
`;

export const ProfileMainMenu = styled.div`
  flex: 4;
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
          object-fit: cover;
        }

        & > label {
          width: 2.5rem;
          height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          position: absolute;
          bottom: 0;
          right: 0;
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border-radius: 0.5rem;
          cursor: pointer;

          &:hover {
            opacity: 0.85;
          }
        }
      }
    }

    & > .inputs {
      width: 100%;
      display: flex;
      align-items: center;
      gap: ${theme.spacings.md};
      margin-bottom: ${theme.spacings.lg};

      & .input {
        width: 100%;
      }

      @media ${theme.media.lteOrEqMedium} {
        flex-direction: column;
      }
    }
  `}
`;

export const ProfileOrders = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileOrderSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > input {
      padding: 1.65rem;
      border-radius: ${theme.spacings.xs} 0 0 ${theme.spacings.xs};
      border: 1px solid ${theme.colors.primary};

      &:focus {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: -3px;
      }
    }

    & > button {
      border-radius: 0 ${theme.spacings.xs} ${theme.spacings.xs} 0;
    }
  `};
`;

export const ProfileAvatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.sm};
    margin-bottom: ${theme.spacings['3xl']};

    & > img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }

    & > div {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;

      & :nth-child(2) {
        font-weight: 700;
      }
    }

    @media ${theme.media.lteOrEqMedium} {
      flex-direction: column;
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;
