import { ChevronUp } from 'lucide-react';
import { FC, useState } from 'react';

import { Heading } from 'components';

import * as S from './ProductFilter.styles';

export interface ProductFilterProps {
  children: React.ReactNode;
  name: string;
  isOpen: boolean;
}

export const ProductFilter: FC<ProductFilterProps> = ({
  children,
  name,
  isOpen,
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <S.Container open={open} className="product-categories">
      <S.TitleContainer open={open} onClick={() => setOpen(!open)}>
        <Heading as="h3" transform="capitalize" fontWeight="700" size="sm">
          {name}
        </Heading>

        <ChevronUp />
      </S.TitleContainer>
      {children}
    </S.Container>
  );
};
