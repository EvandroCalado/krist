import styled from 'styled-components';

import { Container as CategoriesContainer } from '../CategoriesCarousel/CategoriesCarousel.styles';

export const Container = styled(CategoriesContainer)`
  margin: 4rem 0;

  & .splide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${({ theme }) => theme.spacings['10xl']};

    @media ${({ theme }) => theme.media.lteOrEqMedium} {
      padding: 0 ${({ theme }) => theme.spacings.xl};
    }
  }
`;
