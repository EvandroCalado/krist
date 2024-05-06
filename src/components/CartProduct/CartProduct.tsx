import { useAppDispatch } from 'hooks/redux-hook';
import { Trash2 } from 'lucide-react';
import { FC } from 'react';
import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
  removeToCart,
} from 'slices/cartSlice';

import { Heading } from 'components';

import * as S from './CartProduct.styles';

export interface CartProductProps {
  product: CartItem;
}

export const CartProduct: FC<CartProductProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Tr>
      <S.ImageTh>
        <img src={product.image} alt={product.title} />
        <S.TitleContainer>
          <Heading as="h4" transform="capitalize" fontWeight="600">
            {product.title}
          </Heading>
          <span>size: {product.size}</span>
        </S.TitleContainer>
      </S.ImageTh>

      <S.PriceTd>R${product.price.toFixed(2)}</S.PriceTd>

      <S.QuantityTd>
        <div>
          <button onClick={() => dispatch(decreaseQuantity(product))}>-</button>
          <span>{product.amount}</span>
          <button onClick={() => dispatch(increaseQuantity(product))}>+</button>
        </div>
      </S.QuantityTd>

      <S.SubtotalTd>
        R${(product.amount * product.price).toFixed(2)}
      </S.SubtotalTd>

      <S.TrashTd>
        <Trash2
          onClick={() => dispatch(removeToCart(product))}
          size={18}
          color="red"
        />
      </S.TrashTd>
    </S.Tr>
  );
};
