import { useAppDispatch } from 'hooks/redux-hook';
import { Trash2 } from 'lucide-react';
import { FC } from 'react';
import { CartItem, removeToCart } from 'slices/cartSlice';

import { Heading } from 'components';

import * as S from './CartModalProduct.styles';

export interface CartModalProductProps {
  product: CartItem;
}

export const CartModalProduct: FC<CartModalProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <table>
      <tbody>
        <S.Tr>
          <S.ImageTh>
            <img src={product.image} alt={product.title} />
            <S.TitleContainer>
              <Heading as="h4" transform="capitalize" fontWeight="600">
                {product.title}
              </Heading>
              <span>
                {product.amount} x R${product.price.toFixed(2)}
              </span>
              <span>size: {product.size}</span>
            </S.TitleContainer>
          </S.ImageTh>

          <S.TrashTd>
            <Trash2
              onClick={() => dispatch(removeToCart(product))}
              size={18}
              color="red"
            />
          </S.TrashTd>
        </S.Tr>
      </tbody>
    </table>
  );
};
