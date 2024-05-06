import { useAppDispatch } from 'hooks/redux-hook';
import { Eraser } from 'lucide-react';
import { FC } from 'react';
import { clearCart } from 'slices/cartSlice';

import { Button } from 'components';

import * as S from './CartProductsList.styles';

export interface CartProductsListProps {
  children: React.ReactNode;
}

export const CartProductsList: FC<CartProductsListProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Table className="table">
      <S.THead>
        <tr>
          <S.Th scope="col">produto</S.Th>
          <S.Th scope="col">preço</S.Th>
          <S.Th scope="col">quantidade</S.Th>
          <S.Th scope="col">subtotal</S.Th>
          <S.Th scope="col"></S.Th>
        </tr>
      </S.THead>
      <S.TBody>{children}</S.TBody>
      <S.TFoot>
        <tr>
          <td>
            <Button onClick={() => dispatch(clearCart())}>
              limpar carrinho
              <Eraser />
            </Button>
          </td>
        </tr>
      </S.TFoot>
    </S.Table>
  );
};
