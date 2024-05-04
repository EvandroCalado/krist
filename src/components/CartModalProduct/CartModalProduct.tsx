import { Trash2 } from 'lucide-react';
import { FC } from 'react';

import { Heading } from 'components';

import * as S from './CartModalProduct.styles';

export interface CartModalProductProps {}

export const CartModalProduct: FC<CartModalProductProps> = () => {
  return (
    <S.Tr>
      <S.ImageTh>
        <img src="./products/camiseta/1.webp" alt="produto" />
        <S.TitleContainer>
          <Heading as="h4" transform="capitalize" fontWeight="600">
            camiseta masculina manga curta
          </Heading>
          <span>1 x R$80.00</span>
          <span>size: m</span>
        </S.TitleContainer>
      </S.ImageTh>

      <S.TrashTd>
        <Trash2 size={18} color="red" />
      </S.TrashTd>
    </S.Tr>
  );
};
