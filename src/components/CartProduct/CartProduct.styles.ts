import styled, { css } from 'styled-components';

export const Tr = styled.tr`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.secondary};
  `}
`;

export const ImageTh = styled.th`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.sm};
    margin-right: ${theme.spacings.xl};
    padding: ${theme.spacings.md} 0;

    & > img {
      width: 6rem;
      height: 6rem;
      object-fit: contain;
    }
  `}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
    padding: ${theme.spacings.xs} 0;

    & > span {
      display: block;
      font-weight: 400;
    }
  `}
`;

export const PriceTd = styled.td`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xl};

    @media ${theme.media.lteOrEqXLarge} {
      display: none;
    }
  `}
`;

export const QuantityTd = styled.td`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xl};

    & > div {
      width: max-content;
      display: flex;
      align-items: center;
      border: 1px solid ${theme.colors.primary};
      border-radius: ${theme.spacings.xs};
      font-size: ${theme.font.sizes.md};

      & > span {
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      & > button {
        font-size: ${theme.font.sizes.lg};
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0.5rem ${theme.font.sizes.xs};
        cursor: pointer;
      }
    }
  `}
`;

export const SubtotalTd = styled.td`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.xl};

    @media ${theme.media.lteOrEqSmall} {
      display: none;
    }
  `}
`;

export const TrashTd = styled.td`
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
