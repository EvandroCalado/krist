import { Star } from 'lucide-react';
import React, { FC } from 'react';
import { useLoaderData } from 'react-router-dom';

import { Heading } from 'components';
import { StrapiRatingsType } from 'types';
import { formatDate } from 'utils';

import * as S from './ProductReviews.styles';

export interface ProductReviewsProps {}

export const ProductReviews: FC<ProductReviewsProps> = () => {
  const { ratings } = useLoaderData() as { ratings: StrapiRatingsType };

  return (
    <S.Container>
      <Heading as="h3" fontWeight="700" transform="capitalize">
        avaliações dos clientes
      </Heading>
      {ratings.data.map((rating) => (
        <React.Fragment key={rating.id}>
          <S.RatingContainer>
            <S.AvatarContainer>
              <img
                src={
                  rating.attributes.user.data.attributes.avatar.data.attributes
                    .formats.thumbnail.url
                }
                alt="avatar"
              />

              <S.AvatarInfo>
                <Heading
                  as="h6"
                  fontWeight="600"
                  transform="capitalize"
                  size="sm"
                >
                  {rating.attributes.user.data.attributes.username}
                </Heading>
                <div>
                  {Array.from(
                    {
                      length: Number(
                        rating.attributes.rating[
                          rating.attributes.rating.length - 1
                        ],
                      ),
                    },
                    (_, i) => (
                      <Star key={i} size={18} color="#F59E0B" fill="#F59E0B" />
                    ),
                  )}
                </div>
              </S.AvatarInfo>
            </S.AvatarContainer>

            <Heading as="h6" fontWeight="400" transform="capitalize" size="sm">
              {rating.attributes.description}
            </Heading>

            <S.Date>{formatDate(rating.attributes.createdAt)}</S.Date>
          </S.RatingContainer>
        </React.Fragment>
      ))}
    </S.Container>
  );
};
