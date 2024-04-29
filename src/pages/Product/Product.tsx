import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import {
  BreadCrumb,
  Heading,
  ProductColors,
  ProductDescription,
  ProductDetails,
  ProductImages,
  ProductPrice,
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

          <div>{categories.data[0].attributes.name}</div>

          <ProductPrice price={price} discount={discountPercentage} />

          <ProductDescription description={description} />

          <ProductColors colors={colors} color={color} setColor={setColor} />

          <div>sizes</div>
          <div>quantity</div>
        </ProductDetails>
      </S.Details>
    </S.Container>
  );
};
