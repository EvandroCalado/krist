import { Star } from 'lucide-react';
import { FC } from 'react';

import { StrapiRatingType } from 'types';
import { formatDate } from 'utils';

import * as S from './RatingCard.styles';

export interface RatingCardProps {
  rating: StrapiRatingType;
}

export const RatingCard: FC<RatingCardProps> = ({ rating }) => {
  const ratingStars = Array.from(
    {
      length: Number(
        rating.attributes.rating[rating.attributes.rating.length - 1],
      ),
    },
    (_, i) => <Star key={i} size={20} color="#FFC633" fill="#FFC633" />,
  );

  return (
    <S.Container>
      <S.Rating>{ratingStars}</S.Rating>
      <S.RatingDescription>{rating.attributes.description}</S.RatingDescription>
      <S.AvatarContainer>
        <S.Avatar
          src={
            rating.attributes.user.data.attributes.avatar.data?.attributes
              ?.formats?.thumbnail?.url || '/avatar.jpg'
          }
          alt="avatar"
        />
        <S.ClientContainer>
          <S.Name>{rating.attributes.user.data.attributes.username}</S.Name>
          <S.Date>{formatDate(rating.attributes.createdAt)}</S.Date>
        </S.ClientContainer>
      </S.AvatarContainer>
    </S.Container>
  );
};
