import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    & > h6::first-letter {
      text-transform: capitalize;
    }

    &:hover {
      & ${ImageContainer} {
        background-color: ${theme.colors.secondary};
      }
    }
  `}
`;

export const ImageContainer = styled.figure`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35rem;
    padding-top: ${theme.spacings.sm};
    border-radius: ${theme.spacings.xs};
    transition: ${theme.transitions.faster};
    cursor: pointer;

    & > img {
      height: 100%;
      object-fit: contain;
    }
  `}
`;

export const PriceContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xs};
  `}
`;

export const Price = styled.div`
  font-weight: 700;
`;

export const Discount = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.colors.gray};
  `}
`;
