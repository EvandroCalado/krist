import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const LinkContainer = styled(Link)`
  overflow: hidden;
  width: 25rem;
  height: 30rem;

  &:hover {
    & img {
      transform: scale(1.1);
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    text-transform: capitalize;
    font-size: ${theme.font.sizes['6xl']};
    font-weight: 900;
    color: ${theme.colors.secondary};
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;

    @media ${theme.media.lteOrEqMedium} {
      font-size: ${theme.font.sizes['2xl']};
      font-weight: 900;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin-left: 7rem;
    padding-top: 2rem;
    object-fit: contain;
    transition: ${theme.transitions.faster};

    @media ${theme.media.lteOrEqMedium} {
      margin-left: 5rem;
    }
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
    padding: ${theme.spacings.md} ${theme.spacings.xl};
    text-transform: capitalize;
    font-size: ${theme.font.sizes.sm};
    font-weight: 700;
    border-radius: ${theme.spacings.xs};
    border: none;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    @media ${theme.media.lteOrEqMedium} {
      bottom: 1rem;
    }
  `}
`;
