import { Form } from 'react-router-dom';
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
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xl};

    @media ${theme.media.lteOrEqSmall} {
      flex-direction: column;
    }
  `}
`;

export const Filters = styled(Form)`
  ${({ theme }) => css`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xl};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${theme.spacings.md};

    & > button {
      width: 100%;
    }
  `}
`;

export const Products = styled.div`
  flex: 5;

  & .products-list {
    padding: 0;
  }
`;

export const ProductsHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.sm};
    text-transform: capitalize;
    font-size: ${theme.font.sizes.sm};
    font-weight: 600;
    margin-bottom: ${theme.spacings.lg};
  `}
`;
