import { Eye, Heart, Star } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading } from 'components';
import { StrapiProductType } from 'types';
import { calcDiscount } from 'utils';

import * as S from './ProductCard.styles';

export interface ProductCardProps {
  product: StrapiProductType;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  const { cover, title, subTitle, variants } = product.attributes;

  const { url } = cover.data.attributes.formats.small;

  const { price, discountPercentage } = variants[0];

  return (
    <S.Container>
      <S.ImageContainer>
        <img
          src={url}
          alt={title}
          onClick={() =>
            navigate(`/shop/product/${product.id}`, { replace: true })
          }
        />
      </S.ImageContainer>

      <span>
        <Star />
      </span>
      <span>
        <Heart />
      </span>
      <span onClick={() => navigate(`/shop/product/${product.id}`)}>
        <Eye />
      </span>

      <Heading as="h2" transform="capitalize" size="md" fontWeight="800">
        {title}
      </Heading>

      <Heading as="h6" size="sm" fontWeight="600">
        {subTitle}
      </Heading>

      <S.PriceContainer>
        <S.Price>
          R${calcDiscount(price, discountPercentage).toFixed(2)}
        </S.Price>
        <S.Discount>R${price}</S.Discount>
      </S.PriceContainer>
    </S.Container>
  );
};
