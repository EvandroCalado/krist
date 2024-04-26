import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
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

      & > button {
        visibility: visible;
        opacity: 1;
        bottom: 10.5rem;
      }

      & > span {
        visibility: visible;
        opacity: 1;

        &:nth-child(2) {
          top: 2rem;
        }

        &:nth-child(3) {
          top: 8.5rem;
        }

        &:nth-child(4) {
          top: 15rem;
        }
      }
    }

    & > button {
      position: absolute;
      bottom: 6.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 10;
      width: max-content;
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
      outline: transparent;
      cursor: pointer;
      transition: ${theme.transitions.faster};

      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
      }

      &:active {
        outline: 2px solid ${theme.colors.primary};
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
      transition: ${theme.transitions.faster};
      cursor: pointer;

      &:hover {
        background-color: ${theme.colors.white};
      }

      &:nth-child(2) {
        top: 6rem;
        right: 2rem;

        &:hover::after {
          position: absolute;
          left: 50%;
          bottom: -23px;
          transform: translateX(-50%);
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
        top: 12rem;
        right: 2rem;

        &:hover::after {
          position: absolute;
          left: 50%;
          bottom: -23px;
          transform: translateX(-50%);
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
        top: 18rem;
        right: 2rem;

        &:hover::after {
          position: absolute;
          left: 50%;
          bottom: -23px;
          transform: translateX(-50%);
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

export const Price = styled.div`
  font-weight: 700;
`;

export const Discount = styled.span`
  ${({ theme }) => css`
    text-decoration: line-through;
    color: ${theme.colors.gray};
  `}
`;
