import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};

    &:hover {
      & ${ImageContainer} {
        background-color: ${theme.colors.secondary};
      }

      & > button {
        visibility: visible;
        opacity: 1;
        bottom: 10.5rem;
      }

      & > span {
        visibility: visible;
        opacity: 1;

        &:nth-child(2) {
          top: 1rem;
          right: 1rem;
        }

        &:nth-child(3) {
          top: 7rem;
          right: 1rem;
        }

        &:nth-child(4) {
          top: 13rem;
          right: 1rem;
        }
      }
    }

    & > button {
      position: absolute;
      bottom: 6.5rem;
      left: 1.6rem;
      z-index: 10;
      width: 90%;
      visibility: hidden;
      opacity: 0;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      padding: ${theme.spacings.md} ${theme.spacings.xl};
      text-transform: uppercase;
      font-size: ${theme.font.sizes.sm};
      font-weight: 700;
      border-radius: ${theme.spacings.xs};
      border: none;
      outline: none;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &:active {
        transform: scale(1.05);
      }
    }

    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 10;
      width: 4rem;
      height: 4rem;
      visibility: hidden;
      opacity: 0;
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.white};
      }

      &:nth-child(2) {
        top: 5rem;
        right: 1rem;

        &:hover::after {
          position: absolute;
          left: -17px;
          bottom: -23px;
          content: 'avaliações';
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.sm};
          text-transform: capitalize;
          padding: 0.3rem 0.5rem;
          border-radius: 0.3rem;
        }
      }

      &:nth-child(3) {
        top: 11rem;
        right: 1rem;

        &:hover::after {
          position: absolute;
          left: -12px;
          bottom: -23px;
          content: 'favoritos';
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.sm};
          text-transform: capitalize;
          padding: 0.3rem 0.5rem;
          border-radius: 0.3rem;
        }
      }

      &:nth-child(4) {
        top: 17rem;
        right: 1rem;

        &:hover::after {
          position: absolute;
          left: -12px;
          bottom: -23px;
          content: 'detalhes';
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          font-size: ${theme.font.sizes.sm};
          text-transform: capitalize;
          padding: 0.3rem 0.5rem;
          border-radius: 0.3rem;
        }
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

export const Price = styled.div``;

export const Discount = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.colors.gray};
  `}
`;
