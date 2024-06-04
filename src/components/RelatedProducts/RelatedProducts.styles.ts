import styled, { css } from 'styled-components';

import { Container as CategoriesContainer } from '../CategoriesCarousel/CategoriesCarousel.styles';

export const Container = styled(CategoriesContainer)`
  ${({ theme }) => css`
    padding: 0;
    margin: ${theme.spacings.xl} 0;
  `}
`;
