import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from 'store';

import { StrapiAddressesType } from 'types';
import { customFetch } from 'utils';

export const checkoutAction =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const user = (store.getState() as RootState).userState.user;

    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    data.user = user?.id;

    try {
      const AddressesResponse = await customFetch.post<StrapiAddressesType>(
        `/addresses`,
        { data },
      );

      if (AddressesResponse.status !== 200) {
        throw new Error('not found');
      }

      return {
        addresses: AddressesResponse.data,
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
