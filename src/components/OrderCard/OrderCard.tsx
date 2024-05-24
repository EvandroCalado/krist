import { AxiosError } from 'axios';
import { Star } from 'lucide-react';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

import { Button, Heading, OrderCardModal } from 'components';
import { StrapiOrderType, StrapiRatingsType, StrapiUserType } from 'types';
import { customFetch } from 'utils';

import * as S from './OrderCard.styles';

export interface OrderCardProps {
  order: StrapiOrderType;
}

export const OrderCard: FC<OrderCardProps> = ({ order }) => {
  const { user } = useLoaderData() as { user: StrapiUserType };
  const { ratings } = useLoaderData() as { ratings: StrapiRatingsType };

  const ratingsIds = ratings.data.map(
    (rating) => rating.attributes.product.data.id,
  );

  const [openModal, setOpenModal] = useState(false);
  const [isRating, setIsRating] = useState(ratingsIds);
  const [ratingProductId, setRatingProductId] = useState(0);
  const [ratingStar, setRatingStar] = useState('');
  const [ratingDescription, setRatingDescription] = useState('');

  const handleCreateRating = async () => {
    if (!user || !ratingProductId || !ratingStar || !ratingDescription) {
      toast.error('Erro ao criar avaliação');
      return;
    }

    try {
      const ratingResponse = await customFetch.post('/ratings', {
        data: {
          user: user.id,
          product: ratingProductId,
          rating: ratingStar,
          description: ratingDescription,
        },
      });

      if (ratingResponse.status !== 200) {
        toast.error('Erro ao criar avaliação');
      }

      toast.success('Avaliação criada com sucesso');

      setOpenModal(false);
      setRatingStar('');
      setRatingDescription('');
      setIsRating((prevIsRating) => [...prevIsRating, ratingProductId]);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        toast.error('Erro ao criar avaliação');
      }
    }
  };

  return (
    <S.OrderCardContainer>
      <OrderCardModal openModal={openModal} setOpenModal={setOpenModal}>
        <S.OrderCardRating>
          <S.OrderCardStars>
            <label htmlFor="rating">sua avaliação</label>

            <S.OrderCardStar>
              <Star
                onClick={() => setRatingStar('one')}
                fill={
                  ratingStar === 'one' ||
                  ratingStar === 'two' ||
                  ratingStar === 'three' ||
                  ratingStar === 'four' ||
                  ratingStar === 'five'
                    ? '#F59E0B'
                    : '#131118'
                }
                color="transparent"
              />
              <Star
                onClick={() => setRatingStar('two')}
                fill={
                  ratingStar === 'two' ||
                  ratingStar === 'three' ||
                  ratingStar === 'four' ||
                  ratingStar === 'five'
                    ? '#F59E0B'
                    : '#131118'
                }
                color="transparent"
              />
              <Star
                onClick={() => setRatingStar('three')}
                color="transparent"
                fill={
                  ratingStar === 'three' ||
                  ratingStar === 'four' ||
                  ratingStar === 'five'
                    ? '#F59E0B'
                    : '#131118'
                }
              />
              <Star
                onClick={() => setRatingStar('four')}
                color="transparent"
                fill={
                  ratingStar === 'four' || ratingStar === 'five'
                    ? '#F59E0B'
                    : '#131118'
                }
              />
              <Star
                onClick={() => setRatingStar('five')}
                color="transparent"
                fill={ratingStar === 'five' ? '#F59E0B' : '#131118'}
              />
            </S.OrderCardStar>
          </S.OrderCardStars>
        </S.OrderCardRating>
        <S.OrderCardModalInfo>
          <label htmlFor="review">sua avaliação</label>
          <textarea
            name="review"
            id="review"
            value={ratingDescription}
            onChange={(e) => setRatingDescription(e.target.value)}
          />
        </S.OrderCardModalInfo>

        <Button type="button" onClick={handleCreateRating}>
          enviar
        </Button>
      </OrderCardModal>

      <div className="order_header">
        <Heading as="h3" transform="capitalize" fontWeight="600">
          número no pedido: {order.id}
        </Heading>

        <Heading as="h3" transform="capitalize" fontWeight="600">
          valor do frete: 5.00
        </Heading>

        <Heading as="h3" transform="capitalize" fontWeight="600">
          valor total: R$
          {order.amount.slice(0, -2) + '.' + order.amount.slice(-2)}
        </Heading>
      </div>

      {order.products.map((product) => (
        <S.OrderCardDetails key={product.cartId}>
          <img src={product.image} alt={product.title} />

          <S.OrderCardInfo>
            <S.OrderCardProduct>
              <Heading as="h4" transform="capitalize" fontWeight="600">
                {product.title}
              </Heading>

              <div>tamanho: {product.size}</div>
              <div>quantidade: {product.quantity}</div>
            </S.OrderCardProduct>

            <S.OrderCardPrice>R${product.price.toFixed(2)}</S.OrderCardPrice>

            <S.OrderCardButtons>
              {isRating.includes(product.productId) ? (
                <Button variant="secondary">ver avaliação</Button>
              ) : (
                <Button
                  onClick={() => [
                    setOpenModal(true),
                    setRatingProductId(product.productId),
                  ]}
                >
                  adicionar avaliação
                </Button>
              )}
            </S.OrderCardButtons>
          </S.OrderCardInfo>
        </S.OrderCardDetails>
      ))}

      <S.OrderCardStatus>
        <button>enviado</button>
        <span> produto enviado</span>
      </S.OrderCardStatus>

      <hr />
    </S.OrderCardContainer>
  );
};
