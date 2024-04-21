import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings['2xl']} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.lg};
    }
  `}
`;

export const FooterTop = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${theme.spacings.md};
    padding-bottom: ${theme.spacings.lg};
  `}
`;

export const ShopContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};

    & > img {
      margin-bottom: ${theme.spacings.sm};
    }

    & > span {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.xs};
    }
  `}
`;
export const InfosContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};

    & > h3 {
      margin-bottom: ${theme.spacings.md};
    }

    & > span {
      text-transform: capitalize;
    }
  `}
`;

export const ServicesContainer = styled(InfosContainer)``;

export const SubsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};

    & > h3 {
      margin-bottom: ${theme.spacings.md};
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
    border: 1px solid ${theme.colors.white};
    border-radius: ${theme.spacings.xs};
    padding: ${theme.spacings.xs} ${theme.spacings.md};

    & > input {
      outline: none;
      border: none;
      background-color: transparent;
      color: ${theme.colors.white};

      &::placeholder {
        color: ${theme.colors.white};
        text-transform: capitalize;
      }
    }

    & > button {
      outline: none;
      border: none;
      background-color: transparent;
    }
  `}
`;

export const FooterBottom = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${theme.spacings.md};
    border-top: 1px solid ${theme.colors.white}15;
    padding-top: ${theme.spacings.lg};
  `}
`;

export const CardsContainer = styled.div`
  & > img {
    width: 5rem;
  }
`;

export const Year = styled.span``;

export const Socials = styled.div`
  ${({ theme }) => css`
      display: flex;
      flex-direction
      align-items: center;
      justify-content: end;
      gap: ${theme.spacings.sm};
  `}
`;
