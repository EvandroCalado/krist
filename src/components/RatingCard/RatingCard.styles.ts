import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.md};
  `}
`;

export const Rating = styled.span``;

export const RatingDescription = styled.p`
  font-weight: 600;
`;

export const AvatarContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
  `}
`;

export const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;

export const ClientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const Name = styled.span`
  font-weight: 800;
  text-transform: capitalize;
`;

export const Date = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-transform: capitalize;
    font-weight: 700;
    color: ${theme.colors.gray};
  `}
`;
