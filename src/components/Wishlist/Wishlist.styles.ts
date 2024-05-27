import styled, { css } from 'styled-components';

export const WishlistContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 6rem;
`;

export const WishlistCard = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
  `}
`;

export const WishlistImage = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;

    &:hover > a > img {
      background-color: ${theme.colors.secondary};
    }

    &:hover > svg {
      opacity: 1;
      visibility: visible;
      background-color: ${theme.colors.white};
    }

    & > a > img {
      width: 100%;
      object-fit: cover;
      transition: ${theme.transitions.faster};
    }

    & > svg {
      position: absolute;
      right: 2rem;
      top: 2rem;
      width: 4rem;
      height: 4rem;
      padding: 1rem;
      border-radius: 50%;
      cursor: pointer;
      transition: ${theme.transitions.faster};
      opacity: 0;
      visibility: hidden;
    }
  `}
`;

export const WishlistPrice = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-weight: 600;

    & > span {
      margin-right: ${theme.spacings.md};
    }

    & > span:nth-child(2) {
      color: ${theme.colors.gray};
      text-decoration: line-through;
    }
  `}
`;

export const WishlistEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
