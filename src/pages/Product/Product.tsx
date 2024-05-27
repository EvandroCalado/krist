import { AxiosError } from 'axios';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
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
import { calcDiscount, customFetch } from 'utils';

import * as S from './Product.styles';

export const Product = () => {
  const { user } = useAppSelector((state) => state.userState);
  const { product } = useLoaderData() as { product: StrapiProductType };
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { title, subTitle, description, categories, variants } =
    product.data.attributes;

  const variantData = (color: string) => {
    return variants.filter((variant) => variant.name === color)[0];
  };

  const isInWishlist = () => {
    return product.data.attributes.wishlists.data.some(
      (wishlist) => wishlist.attributes.product.data.id === product.data.id,
    );
  };

  const [color, setColor] = useState(variants[0].name);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(
    user ? isInWishlist() : false,
  );
  const [wishlistId, setWishlistId] = useState(
    product?.data?.attributes?.wishlists?.data?.[0]?.id || null,
  );

  const { images, price, discountPercentage, sizes } = variantData(color);

  const initialSize = sizes.filter(
    (singleSize) => singleSize.quantity !== null,
  )[0];

  const [size, setSize] = useState(initialSize.size);

  const currentSize = sizes.filter((singleSize) => singleSize.size === size)[0];

  const cartProduct: CartItem = {
    cartId: product.data.id + color + size,
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

  const handleAddWishlist = async () => {
    if (!user) {
      navigate(`/login?transfer=/shop/product/${product.data.id}`);
      return;
    }

    try {
      const wishlistResponse = await customFetch.post('/wishlists', {
        data: {
          user: user?.id,
          product: product.data.id,
        },
      });

      if (wishlistResponse.status !== 200) {
        toast.error('Erro ao adicionar item na lista de desejos');
      }

      toast.success('Adicionado a lista de desejos');
      setIsWishlisted(true);
      setWishlistId(wishlistResponse.data.data.id);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        throw new Error(error.response.data.error.message);
      }
    }
  };

  const handleDeleteWishlist = async () => {
    try {
      const wishlistResponse = await customFetch.delete(
        `/wishlists/${wishlistId}`,
      );

      if (wishlistResponse.status !== 200) {
        toast.error('Erro ao deletar item da lista de desejos');
      }

      toast.success('Removido da lista de desejos');
      setIsWishlisted(false);
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        throw new Error(error.response.data.error.message);
      }
    }
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

            {isWishlisted ? (
              <Button variant="secondary" onClick={handleDeleteWishlist}>
                <Heart size={16} fill="#000" />
              </Button>
            ) : (
              <Button variant="secondary" onClick={handleAddWishlist}>
                <Heart size={16} />
              </Button>
            )}
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
