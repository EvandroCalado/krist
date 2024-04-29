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
    const [config, categories, featured, flashSale] = await Promise.all([
      customFetch.get<StrapiConfigType>('/config?populate=deep,3'),
      customFetch.get<StrapiCategoriesType>('categories?populate[0]=cover'),
      customFetch.get<StrapiFeaturedType>(
        '/products?populate=deep,3&filters[isFeatured][$eq]=true',
      ),
      customFetch.get<StrapiFlashSaleType>('/flash-sales?populate=deep,3'),
    ]);

    const [configRes, categoriesRes, featuredRes, flashSaleRes] =
      await Promise.all([config, categories, featured, flashSale]);

    if (
      !configRes?.data ||
      !categoriesRes?.data ||
      !featuredRes?.data ||
      !flashSaleRes?.data
    ) {
      throw new Error('not found');
    }

    if (
      configRes.status !== 200 ||
      categoriesRes.status !== 200 ||
      featuredRes.status !== 200 ||
      flashSaleRes.status !== 200
    ) {
      throw new Error('not found');
    }

    return {
      config: configRes.data,
      categories: categoriesRes.data,
      products: featuredRes.data,
      flashSale: flashSaleRes.data,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }
    throw error;
  }
};
