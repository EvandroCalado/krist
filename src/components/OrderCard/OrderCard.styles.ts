import styled, { css } from 'styled-components';

export const OrderCardContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xl} 0;

    & .order_header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & > hr {
      margin: ${theme.spacings.md} 0;
      border: 1px solid ${theme.colors.secondary};
    }
  `}
`;

export const OrderCardRating = styled.div``;

export const OrderCardStars = styled.div`
  ${({ theme }) => css`
    & > label {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
    }
  `}
`;

export const OrderCardStar = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xs} 0;

    & > svg {
      margin-right: ${theme.spacings.xs};
      cursor: pointer;
    }
  `}
`;

export const OrderCardModalInfo = styled.div`
  ${({ theme }) => css`
    & > label {
      font-size: ${theme.font.sizes.sm};
      text-transform: capitalize;
    }

    & > textarea {
      width: 100%;
      height: 10rem;
      border-radius: ${theme.spacings.xs};
      border: 1px solid ${theme.colors.primary};
      outline: none;
      margin-top: ${theme.spacings.xs};
      padding: ${theme.spacings.md};

      &:focus {
        outline: 3px solid ${theme.colors.primary};
        outline-offset: 1px;
      }
    }
  `}
`;

export const OrderCardDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin: ${theme.spacings.md} 0;

    & > img {
      width: 10rem;
      height: 8rem;
      margin-right: ${theme.spacings.md};
      object-fit: contain;
    }
  `}
`;

export const OrderCardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
`;

export const OrderCardProduct = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.spacings.sm};
  `}
`;

export const OrderCardPrice = styled.span`
  font-weight: 600;
`;

export const OrderCardButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    & > button {
      width: 17rem;
    }
  `}
`;

export const OrderCardStatus = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xs};

    & > button {
      padding: 0.5rem;
      text-transform: capitalize;
      font-size: 600;
      color: ${theme.colors.success};
      background-color: #ebfaeb;
      border: none;
      border-radius: 0.5rem;
      margin-right: ${theme.spacings.sm};
    }

    & > span {
      text-transform: capitalize;
    }
  `}
`;
