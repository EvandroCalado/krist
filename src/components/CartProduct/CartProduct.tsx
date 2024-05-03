import { Trash2 } from 'lucide-react';
import { FC } from 'react';

import { Heading } from 'components';

import * as S from './CartProduct.styles';

export interface CartProductProps {}

export const CartProduct: FC<CartProductProps> = () => {
  return (
    <S.Tr>
      <S.ImageTh>
        <img src="./products/camiseta/1.webp" alt="produto" />
        <S.TitleContainer>
          <Heading as="h4" transform="capitalize" fontWeight="600">
            camiseta masculina manga curta
          </Heading>
          <span>size: m</span>
        </S.TitleContainer>
      </S.ImageTh>

      <S.PriceTd>R$80.00</S.PriceTd>

      <S.QuantityTd>
        <div>
          <button>-</button>
          <span>0</span>
          <button>+</button>
        </div>
      </S.QuantityTd>

      <S.SubtotalTd>R$80.00</S.SubtotalTd>

      <S.TrashTd>
        <Trash2 size={18} color="red" />
      </S.TrashTd>
    </S.Tr>
  );
};
