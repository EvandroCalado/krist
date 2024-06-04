import { AxiosError } from 'axios';
import { LoaderFunction } from 'react-router-dom';

import {
  StrapiProductDetailsType,
  StrapiProductsByCategoriesType,
  StrapiRatingsType,
} from 'types';
import { customFetch } from 'utils';

export const productLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;

  try {
    const productsResponse = await customFetch.get<StrapiProductDetailsType>(
      `/products/${id}?populate=deep,3`,
    );
    const ratingsResponse = await customFetch.get<StrapiRatingsType>(
      `/ratings?populate=deep,3&filters[product][$eq]=${id}`,
    );
    const byCategoriesResponse =
      await customFetch.get<StrapiProductsByCategoriesType>(
        `/products?populate=deep,2&filters[categories][name][$eq]=${productsResponse.data.data.attributes.categories.data[0].attributes.name}`,
      );

    if (
      productsResponse.status !== 200 ||
      ratingsResponse.status !== 200 ||
      byCategoriesResponse.status !== 200
    ) {
      throw new Error('not found');
    }

    return {
      product: productsResponse.data,
      ratings: ratingsResponse.data,
      byCategories: byCategoriesResponse.data,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }
    throw error;
  }
};
