import { Eye, Heart, Star } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from 'components';
import { StrapiProduct } from 'types/strapi-featured-type';

import * as S from './ProductCard.styles';

export interface ProductCardProps {
  product: StrapiProduct;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const { cover, title, subTitle, price, discountPercentage } =
    product.attributes;

  const { url } = cover.data.attributes.formats.small;

  return (
    <S.Container>
      <S.ImageContainer>
        <img
          src={url}
          alt={title}
          onClick={() =>
            navigate(`/product/${product.id}`, { preventScrollReset: false })
          }
        />
      </S.ImageContainer>

      <span>
        <Star />
      </span>
      <span>
        <Heart />
      </span>
      <span onClick={() => navigate(`/product/${product.id}`)}>
        <Eye />
      </span>
      <button>adicionar à sacola</button>

      <Heading as="h2" transform="capitalize" size="md" fontWeight="800">
        {title}
      </Heading>

      <Heading as="h6" size="sm" fontWeight="600">
        {subTitle}
      </Heading>

      <S.PriceContainer>
        <S.Price>R${price}</S.Price>
        <S.Discount>R${discountPercentage}</S.Discount>
      </S.PriceContainer>
    </S.Container>
  );
};
