import { AxiosError } from 'axios';
import { Trash2 } from 'lucide-react';
import { FC, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

import { Heading } from 'components';
import { StrapiWishlistType } from 'types';
import { calcDiscount, customFetch } from 'utils';

import * as S from './Wishlist.styles';

export interface WishlistProps {
  wishlists: StrapiWishlistType[];
}

export const Wishlist: FC<WishlistProps> = ({ wishlists }) => {
  const [initialWishlists, setInitialWishlists] =
    useState<StrapiWishlistType[]>(wishlists);

  const handleDeleteWishlist = async (wishlistId: number) => {
    try {
      const wishlistResponse = await customFetch.delete(
        `/wishlists/${wishlistId}?populate=deep,3`,
      );

      if (wishlistResponse.status !== 200) {
        toast.error('Erro ao deletar item da lista de desejos');
      }

      setInitialWishlists((prevWishlists) =>
        prevWishlists.filter((wishlist) => wishlist.id !== wishlistId),
      );
    } catch (error) {
      if (error instanceof AxiosError && error.response?.data?.error) {
        throw new Error(error.response.data.error.message);
      }
    }
  };

  return (
    <>
      {initialWishlists.length === 0 ? (
        <S.WishlistEmpty>
          <Heading fontWeight="700" transform="capitalize">
            Nenhum item na lista de desejos
          </Heading>
        </S.WishlistEmpty>
      ) : (
        <S.WishlistContainer>
          {initialWishlists.map((wishlist) => (
            <S.WishlistCard key={wishlist.id}>
              <S.WishlistImage>
                <Link to={`/shop/product/${wishlist.product.id}`}>
                  <img
                    src={wishlist.product.cover.formats.small.url}
                    alt={wishlist.product.title}
                  />
                </Link>

                <Trash2
                  color="red"
                  onClick={() => handleDeleteWishlist(wishlist.id)}
                />
              </S.WishlistImage>

              <Heading transform="capitalize" fontWeight="700">
                {wishlist.product.title}
              </Heading>

              <Heading transform="capitalize" size="sm">
                {wishlist.product.subTitle}
              </Heading>

              <S.WishlistPrice>
                <span>R${wishlist.product.variants[0].price}</span>
                <span>
                  R$
                  {calcDiscount(
                    wishlist.product.variants[0].price,
                    wishlist.product.variants[0].discountPercentage,
                  ).toFixed(2)}
                </span>
              </S.WishlistPrice>
            </S.WishlistCard>
          ))}
        </S.WishlistContainer>
      )}
    </>
  );
};
