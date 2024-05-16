import { FC } from 'react';

import { Button, Heading } from 'components';

import * as S from './OrderCard.styles';

export interface OrderCardProps {}

export const OrderCard: FC<OrderCardProps> = () => {
  return (
    <S.OrderCardContainer>
      <S.OrderCardDetails>
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611762.jpg?w=826&t=st=1713491585~exp=1713492185~hmac=08ba90f79cafc9a795e191d5f3833a9f1f73184a0d936d5a6e0187a4c100d8fe"
          alt="product"
        />

        <S.OrderCardInfo>
          <S.OrderCardProduct>
            <Heading as="h4" transform="capitalize" fontWeight="600">
              vestido preto com detalhes
            </Heading>
            <div>tamanho: g</div>
            <div>quantidade: 1</div>
          </S.OrderCardProduct>

          <S.OrderCardPrice>R$80,00</S.OrderCardPrice>

          <S.OrderCardButtons>
            <Button variant="secondary">ver pedido</Button>
            <Button>adicionar avaliação</Button>
          </S.OrderCardButtons>
        </S.OrderCardInfo>
      </S.OrderCardDetails>

      <S.OrderCardStatus>
        <button>enviado</button>
        <span> produto enviado</span>
      </S.OrderCardStatus>
    </S.OrderCardContainer>
  );
};
