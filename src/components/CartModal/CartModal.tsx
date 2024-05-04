import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';

import * as S from './CartModal.styles';

export interface CartModalProps {
  children?: React.ReactNode;
}

export const CartModal: FC<CartModalProps> = ({ children }) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <span>você tem 3 itens no carrinho</span>
      {children}
      <Button variant="secondary">ver carrinho</Button>
      <Button onClick={() => navigate('/checkout')}>finalizar compra</Button>
    </S.Container>
  );
};
