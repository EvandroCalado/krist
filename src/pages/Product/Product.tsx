import { useAppDispatch } from 'hooks/redux-hook';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { CartItem, addToCart } from 'slices/cartSlice';

import {
  BreadCrumb,
  Button,
  Heading,
  ProductColors,
  ProductDescription,
  ProductDetails,
  ProductImages,
  ProductInfo,
  ProductPrice,
  ProductQuantity,
  ProductRating,
  ProductReviews,
  ProductSizes,
  ProductStock,
  ProductTabs,
} from 'components';
import { StrapiProductType } from 'types';
import { calcDiscount } from 'utils';

import * as S from './Product.styles';

export const Product = () => {
  const { product } = useLoaderData() as { product: StrapiProductType };
  const dispatch = useAppDispatch();

  const { title, subTitle, description, categories, variants } =
    product.data.attributes;

  const variantData = (color: string) => {
    return variants.filter((variant) => variant.name === color)[0];
  };

  const [color, setColor] = useState(variants[0].name);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const { images, price, discountPercentage, sizes } = variantData(color);

  const initialSize = sizes.filter(
    (singleSize) => singleSize.quantity !== null,
  )[0];

  const [size, setSize] = useState(initialSize.size);

  const currentSize = sizes.filter((singleSize) => singleSize.size === size)[0];

  const cartProduct: CartItem = {
    cartId: product.data.id + color,
    productId: product.data.id,
    image: images.data[0].attributes.formats.thumbnail.url,
    title: product.data.attributes.title,
    color,
    size,
    quantity,
    price: calcDiscount(price, discountPercentage),
    amount: quantity,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(cartProduct));
  };

  return (
    <S.Container>
      <Helmet>
        <title>Krist | {title}</title>
        <meta name="description" content="Loja online de roupas" />
      </Helmet>

      <BreadCrumb productName={title} />

      <S.Details>
        <ProductImages currentImagesData={images} />

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

          <ProductRating />

          <Heading as="h6" transform="uppercase" size="sm">
            {categories.data[0].attributes.name}
          </Heading>

          <ProductPrice price={price} discount={discountPercentage} />

          <ProductDescription description={description} />

          <ProductColors
            variants={variants}
            color={color}
            setColor={setColor}
            setSize={setSize}
          />

          <ProductSizes
            sizes={sizes}
            size={size}
            setSize={setSize}
            setQuantity={setQuantity}
          />

          <S.CartContainer>
            <ProductQuantity
              quantity={quantity}
              setQuantity={setQuantity}
              currentSize={currentSize}
            />
            <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
            <Button variant="secondary">
              <Heart size={16} />
            </Button>
          </S.CartContainer>
        </ProductDetails>
      </S.Details>

      <ProductTabs setActiveTab={setActiveTab}>
        {activeTab === 'description' && (
          <ProductDescription description={description} />
        )}
        {activeTab === 'info' && <ProductInfo variants={variants} />}
        {activeTab === 'reviews' && <ProductReviews />}
      </ProductTabs>
    </S.Container>
  );
};
