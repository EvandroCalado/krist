import styled, { css } from 'styled-components';

export const OrderCardContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.xl} 0;
  `}
`;

export const OrderCardDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    & > img {
      width: 10rem;
      height: 11rem;
      margin-right: ${theme.spacings.md};
    }
  `}
`;

export const OrderCardInfo = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
  `}
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
  ${({ theme }) => css`
    font-weight: 600;
  `}
`;

export const OrderCardButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    & > button {
      width: 100%;
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
