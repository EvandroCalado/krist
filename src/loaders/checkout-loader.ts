import { AxiosError } from 'axios';

import { StrapiAddressesType } from 'types';
import { customFetch } from 'utils';

export const checkoutLoader = async () => {
  try {
    const addressesResponse = await customFetch.get<StrapiAddressesType>(
      '/addresses?populate=deep,2',
    );

    if (addressesResponse.status !== 200) {
      throw new Error('not found');
    }

    return {
      addresses: addressesResponse.data,
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
