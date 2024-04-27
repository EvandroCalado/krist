import { AxiosError } from 'axios';

import {
  StrapiCategoriesType,
  StrapiConfigType,
  StrapiFeaturedType,
  StrapiFlashSaleType,
} from 'types';
import { customFetch } from 'utils/custom-fetch';

export const homeLoader = async () => {
  try {
    const config = await customFetch.get<StrapiConfigType>(
      '/config?populate=deep,3',
    );
    const categories = await customFetch.get<StrapiCategoriesType>(
      'categories?populate[0]=cover',
    );
    const featured = await customFetch.get<StrapiFeaturedType>(
      '/products?populate=deep,3&filters[isFeatured][$eq]=true',
    );
    const flashSale = await customFetch.get<StrapiFlashSaleType>(
      '/flash-sales?populate=deep,3',
    );

    if (
      config.status !== 200 ||
      categories.status !== 200 ||
      featured.status !== 200 ||
      flashSale.status !== 200
    ) {
      throw new Error('not found');
    }

    return {
      config: config.data,
      categories: categories.data,
      products: featured.data,
      flashSale: flashSale.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.error.message);
    }
  }
};
