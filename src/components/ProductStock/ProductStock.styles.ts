import styled, { css } from 'styled-components';

import { ProductStockProps } from '.';

const inStockVariant = (inStock: boolean) => css`
  background-color: ${inStock ? '#EBFAEB' : '#FAECEC'};
  color: ${inStock
    ? ({ theme }) => theme.colors.success
    : ({ theme }) => theme.colors.warning};
`;

export const Stock = styled.span<ProductStockProps>`
  ${({ theme, inStock }) => css`
    ${inStockVariant(inStock)};
    font-size: ${theme.font.sizes.sm};
    font-weight: 600;
    text-transform: capitalize;
    border-radius: ${theme.spacings.xs};
    padding: ${theme.spacings.xs};
  `}
`;
