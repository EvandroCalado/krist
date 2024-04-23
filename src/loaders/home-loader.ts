import { AxiosError } from 'axios';

import { StrapiConfigType } from 'types/strapi-config-type';
import { customFetch } from 'utils/custom-fetch';

export const homeLoader = async () => {
  try {
    const response = await customFetch.get<StrapiConfigType>(
      '/config?populate=deep,3',
    );

    if (response.status !== 200) {
      throw new Error('Config not found');
    }

    return {
      config: response.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.error.message);
    }
  }
};
