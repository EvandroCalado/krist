import { FC } from 'react';

import * as S from './CartProductsList.styles';

export interface CartProductsListProps {
  children: React.ReactNode;
}

export const CartProductsList: FC<CartProductsListProps> = ({ children }) => {
  return (
    <S.Table>
      <S.THead>
        <S.Tr>
          <S.Th scope="col">produtos</S.Th>
          <S.Th scope="col">preço</S.Th>
          <S.Th scope="col">quantidade</S.Th>
          <S.Th scope="col">subtotal</S.Th>
          <S.Th scope="col"></S.Th>
        </S.Tr>
      </S.THead>
      <S.TBody>{children}</S.TBody>
    </S.Table>
  );
};
