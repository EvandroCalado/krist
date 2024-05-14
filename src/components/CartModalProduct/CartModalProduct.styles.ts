import styled, { css } from 'styled-components';

export const Tr = styled.tr`
  ${({ theme }) => css`
    width: 27.8rem;
    display: flex;
    align-items: center;
    border-top: 1px solid ${theme.colors.secondary};
    height: max-content;
  `}
`;

export const ImageTh = styled.th`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.sm};
    margin-right: ${theme.spacings.xs};
    padding: ${theme.spacings.md} 0 0;

    & > h4 {
      font-size: ${theme.font.sizes.md};
    }

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
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
    text-transform: capitalize;
    padding: ${theme.spacings.xs} 0;

    & > span {
      display: block;
      font-size: ${theme.font.sizes.sm};
      font-weight: 400;
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
