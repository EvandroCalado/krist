import { Star } from 'lucide-react';
import { FC } from 'react';

import { Heading, Input } from 'components';

import * as S from './ProductReviews.styles';

export interface ProductReviewsProps {}

export const ProductReviews: FC<ProductReviewsProps> = () => {
  return (
    <S.Container>
      <Heading as="h3" fontWeight="700" transform="capitalize">
        avaliações dos clientes
      </Heading>
      <S.RatingContainer>
        <S.AvatarContainer>
          <img src="/hero1.png" alt="avatar" />

          <S.AvatarInfo>
            <Heading as="h6" fontWeight="600" transform="capitalize" size="sm">
              mark williams
            </Heading>
            <div>
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
              <Star size={18} color="#F59E0B" fill="#F59E0B" />
            </div>
          </S.AvatarInfo>
        </S.AvatarContainer>
        <Heading as="h6" fontWeight="700" transform="capitalize" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Heading>
        <Heading as="h6" fontWeight="400" transform="capitalize" size="sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
          consequatur repudiandae omnis impedit necessitatibus. Quasi, corrupti
          soluta. Culpa aliquam aliquid et quas id hic sequi ipsam tempore!
          Illum, at praesentium?
        </Heading>

        <S.Date>05 de junho de 2024</S.Date>
      </S.RatingContainer>

      <S.ReviewContainer>
        <Heading as="h3" fontWeight="700" transform="capitalize">
          adicione seu review
        </Heading>

        <S.Review>
          <Heading as="h6" fontWeight="500" transform="capitalize" size="sm">
            sua avaliação
          </Heading>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
              <Star size={18} />
            </div>
            <div>
              <Star size={18} />
              <Star size={18} />
            </div>
            <div>
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
            </div>
            <div>
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
            </div>
            <div>
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
              <Star size={18} />
            </div>
          </div>
        </S.Review>

        <Input label="nome" name="name" type="text" />
        <Input label="email" name="email" type="email" />

        <S.TextAreaLabel htmlFor="review">sua avaliação</S.TextAreaLabel>
        <S.TextArea name="review" id="review" />
      </S.ReviewContainer>
    </S.Container>
  );
};
