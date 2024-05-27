import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
  `}
`;

export const RatingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.sm};
  `}
`;

export const AvatarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.md};

    & > img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
  `}
`;

export const AvatarInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xs};
  `}
`;

export const Date = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    font-weight: 600;
  `}
`;
