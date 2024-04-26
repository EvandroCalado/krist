import { AxiosError } from 'axios';

import { StrapiCategoriesType } from 'types/strapi-categories-type';
import { StrapiConfigType } from 'types/strapi-config-type';
import { customFetch } from 'utils/custom-fetch';

export const homeLoader = async () => {
  try {
    const config = await customFetch.get<StrapiConfigType>(
      '/config?populate=deep,3',
    );
    const categories = await customFetch.get<StrapiCategoriesType>(
      'categories?populate[0]=cover',
    );

    if (config.status !== 200 || categories.status !== 200) {
      throw new Error('not found');
    }

    return {
      config: config.data,
      categories: categories.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.error.message);
    }
  }
};
