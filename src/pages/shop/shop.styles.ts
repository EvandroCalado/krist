import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.md} ${theme.spacings['10xl']};

    @media ${theme.media.lteOrEqMedium} {
      padding: ${theme.spacings.md} ${theme.spacings.lg};
    }
  `}
`;

export const FiltersContainer = styled.div`
  display: flex;
`;

export const Filters = styled.div`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
  `}
`;
