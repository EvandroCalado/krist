import { AxiosError } from 'axios';

import {
  StrapiCategoriesType,
  StrapiColorsType,
  StrapiProductsType,
  StrapiSizesType,
} from 'types';
import { customFetch } from 'utils';

export const shopLoader = async ({ request }: { request: Request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const categoryFilter = params.category
    ? `&filters[categories][name][$eq]=${params.category}`
    : '';
  const priceFilter =
    params.price && params.price !== '0'
      ? `&filters[variants][price][$lte]=${params.price}`
      : '';
  const colorFilter = params.color
    ? `&filters[variants][name]=${params.color}`
    : '';
  const sizeFilter = params.size
    ? `&filters[variants][sizes][size]=${params.size}`
    : '';
  const pagination = `&pagination[page]=${params.page || 1}&pagination[pageSize]=8`;

  const url = `/products?populate=deep,3${categoryFilter}${priceFilter}${colorFilter}${sizeFilter}${pagination}`;

  try {
    const productsResponse = await customFetch.get<StrapiProductsType>(url);

    if (productsResponse.status !== 200) {
      throw new Error('not found');
    }

    const [categoriesResponse, colorsResponse, sizesResponse] =
      await Promise.all([
        customFetch.get<StrapiCategoriesType>('/categories'),
        customFetch.get<StrapiColorsType>('/colors'),
        customFetch.get<StrapiSizesType>('/sizes'),
      ]);

    return {
      products: productsResponse.data,
      colors: colorsResponse.data ?? [],
      categories: categoriesResponse.data ?? [],
      sizes: sizesResponse.data ?? [],
      meta: productsResponse.data.meta,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }

    if (
      error instanceof Error &&
      error.message.includes('Cannot read property')
    ) {
      throw new Error(
        'An unexpected error occurred. The API may be experiencing issues. Please try again later.',
      );
    }

    throw error;
  }
};
