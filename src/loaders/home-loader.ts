import { AxiosError } from 'axios';
import { LoaderFunction } from 'react-router-dom';

import {
  StrapiCategoriesType,
  StrapiConfigType,
  StrapiFeaturedType,
  StrapiFlashSaleType,
} from 'types';
import { customFetch } from 'utils/custom-fetch';

export const homeLoader: LoaderFunction = async () => {
  try {
    const [config, categories, featured, ratings, flashSale] =
      await Promise.all([
        customFetch.get<StrapiConfigType>('/config?populate=deep,3'),
        customFetch.get<StrapiCategoriesType>('categories?populate[0]=cover'),
        customFetch.get<StrapiFeaturedType>(
          '/products?populate=deep,3&filters[isFeatured][$eq]=true',
        ),
        customFetch.get('ratings?populate=deep,3'),
        customFetch.get<StrapiFlashSaleType>('/flash-sales?populate=deep,3'),
      ]);

    const [configRes, categoriesRes, featuredRes, ratingsRes, flashSaleRes] =
      await Promise.all([config, categories, featured, ratings, flashSale]);

    if (
      !configRes?.data ||
      !categoriesRes?.data ||
      !featuredRes?.data ||
      !ratingsRes?.data ||
      !flashSaleRes?.data
    ) {
      throw new Error('not found');
    }

    if (
      configRes.status !== 200 ||
      categoriesRes.status !== 200 ||
      featuredRes.status !== 200 ||
      ratingsRes.status !== 200 ||
      flashSaleRes.status !== 200
    ) {
      throw new Error('not found');
    }

    return {
      config: configRes.data,
      categories: categoriesRes.data,
      products: featuredRes.data,
      ratings: ratingsRes.data,
      flashSale: flashSaleRes.data,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }
    throw error;
  }
};
