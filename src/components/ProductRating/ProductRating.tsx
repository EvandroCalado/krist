import { Star } from 'lucide-react';

import * as S from './ProductRating.styles';

const ratings = [1, 2, 3, 4, 5];

export interface ProductRatingProps {}

export const ProductRating = () => {
  return (
    <S.Container>
      <S.Rating>
        {ratings.map((rating) => (
          <Star key={rating} size={18} fill="#F59E0B" color="#F59E0B" />
        ))}
      </S.Rating>
      <S.Average>5.0</S.Average>
      <S.Reviews>(2 reviews)</S.Reviews>
    </S.Container>
  );
};
