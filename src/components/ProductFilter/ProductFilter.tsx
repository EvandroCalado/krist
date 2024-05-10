import { FC } from 'react';

import { Heading } from 'components';

import * as S from './ProductFilter.styles';

export interface ProductFilterProps {
  children: React.ReactNode;
  name: string;
}

export const ProductFilter: FC<ProductFilterProps> = ({ children, name }) => {
  return (
    <S.Container className="product-categories">
      <Heading as="h3" transform="capitalize" fontWeight="700" size="sm">
        {name}
      </Heading>
      {children}
    </S.Container>
  );
};
