import { Heart } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  BreadCrumb,
  Button,
  Heading,
  ProductColors,
  ProductDescription,
  ProductDetails,
  ProductImages,
  ProductPrice,
  ProductQuantity,
  ProductSizes,
  ProductStock,
} from 'components';
import { StrapiProductType } from 'types';

import * as S from './Product.styles';

export const Product = () => {
  const { product } = useLoaderData() as { product: StrapiProductType };

  const {
    images,
    title,
    subTitle,
    price,
    discountPercentage,
    description,
    categories,
    colors,
    sizes,
  } = product.data.attributes;

  const currentImagesData = (color: string) => {
    return images
      .filter((image) => image.name === color)
      .map((image) => image)[0];
  };

  const [color, setColor] = useState(images?.[0]?.name);
  const [size, setSize] = useState(sizes.data[0].attributes.name);
  const [quantity, setQuantity] = useState(1);

  return (
    <S.Container>
      <BreadCrumb productName={title} />

      <S.Details>
        <ProductImages currentImagesData={currentImagesData(color)} />

        <ProductDetails>
          <S.Title>
            <Heading as="h1" size="xl" transform="capitalize" fontWeight="700">
              {title}
            </Heading>
            <ProductStock inStock />
          </S.Title>

          <Heading as="h4" transform="capitalize" fontWeight="500">
            {subTitle}
          </Heading>

          <div>rating</div>

          <Heading as="h6" transform="uppercase" size="sm">
            {categories.data[0].attributes.name}
          </Heading>

          <ProductPrice price={price} discount={discountPercentage} />

          <ProductDescription description={description} />

          <ProductColors colors={colors} color={color} setColor={setColor} />

          <ProductSizes sizes={sizes} size={size} setSize={setSize} />

          <S.CartContainer>
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />
            <Button>Adicionar ao carrinho</Button>
            <Button variant="secondary">
              <Heart size={16} />
            </Button>
          </S.CartContainer>
        </ProductDetails>
      </S.Details>
    </S.Container>
  );
};
