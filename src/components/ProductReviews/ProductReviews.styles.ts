import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};

    & > h3 {
      margin-bottom: ${theme.spacings.md};
    }
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

export const ReviewContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const Review = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const TextAreaLabel = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-transform: capitalize;
  `}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    width: 100%;
    height: 10rem;
    border-radius: ${theme.spacings.xs};
    border: 1px solid ${theme.colors.primary};
    outline: none;
    margin-top: ${theme.spacings.xs};

    &:focus {
      outline: 3px solid ${theme.colors.primary};
      outline-offset: 1px;
    }
  `}
`;
