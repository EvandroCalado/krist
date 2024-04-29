import { AxiosError } from 'axios';
import { LoaderFunction } from 'react-router-dom';

import { StrapiProductType } from 'types';
import { customFetch } from 'utils';

export const productLoader: LoaderFunction = async ({ params }) => {
  const id = params.id;

  try {
    const response = await customFetch.get<StrapiProductType>(
      `/products/${id}?populate=deep,3`,
    );

    if (response.status !== 200) {
      throw new Error('not found');
    }

    return {
      product: response.data,
    };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data?.error) {
      throw new Error(error.response.data.error.message);
    }
    throw error;
  }
};
