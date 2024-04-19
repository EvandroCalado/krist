import { Star } from 'lucide-react';
import { FC } from 'react';

import * as S from './RatingCard.styles';

export interface RatingCardProps {
  id: number;
  rating: number;
  ratingDescription: string;
  avatar: string;
  name: string;
  profession: string;
}

export const RatingCard: FC<RatingCardProps> = ({
  rating,
  ratingDescription,
  avatar,
  name,
  profession,
}) => {
  const ratingStars = Array.from({ length: rating }, (_, i) => (
    <Star key={i} size={20} color="#FFC633" fill="#FFC633" />
  ));

  return (
    <S.Container>
      <S.Rating>{ratingStars}</S.Rating>
      <S.RatingDescription>{ratingDescription}</S.RatingDescription>
      <S.AvatarContainer>
        <S.Avatar src={avatar} alt="avatar" />
        <S.ClientContainer>
          <S.Name>{name}</S.Name>
          <S.Profession>{profession}</S.Profession>
        </S.ClientContainer>
      </S.AvatarContainer>
    </S.Container>
  );
};
