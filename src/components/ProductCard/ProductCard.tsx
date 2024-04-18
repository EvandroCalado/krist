import { Eye, Heart, Star } from 'lucide-react';
import { FC } from 'react';

import { Heading } from 'components';

import * as S from './ProductCard.styles';

export interface ProductCardProps {
  id: number;
  cover: string;
  title: string;
  resume: string;
  price: number;
  discount: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  cover,
  title,
  resume,
  price,
  discount,
}) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <img src={cover} alt={title} />
      </S.ImageContainer>

      <span>
        <Star />
      </span>
      <span>
        <Heart />
      </span>
      <span>
        <Eye />
      </span>
      <button>adicionar à sacola</button>

      <Heading as="h2" transform="capitalize" size="md" fontWeight="800">
        {title}
      </Heading>

      <Heading as="h6" transform="capitalize">
        {resume}
      </Heading>

      <S.PriceContainer>
        <S.Price>R${price}</S.Price>
        <S.Discount>R${discount}</S.Discount>
      </S.PriceContainer>
    </S.Container>
  );
};
