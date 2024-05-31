import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { RootState } from 'store';

import { StrapiAddressType, StrapiAddressesType } from 'types';
import { customFetch } from 'utils';

export const profileAction =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const user = (store.getState() as RootState).userState.user;

    if (request.method === 'POST') {
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
    }

    if (request.method === 'DELETE') {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      data.user = user?.id;

      try {
        const addressResponse = await customFetch.delete<StrapiAddressType>(
          `/addresses/${data.id}`,
        );

        if (addressResponse.status !== 200) {
          toast.error('Erro ao deletar endereço');
        }

        return {
          address: addressResponse.data,
        };
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.error) {
          toast.error('Erro ao criar endereço');
        }
      }
    }

    if (request.method === 'PUT') {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);

      try {
        const addressResponse = await customFetch.put<StrapiAddressType>(
          `/addresses/${data.id}`,
          { data },
        );

        if (addressResponse.status !== 200) {
          toast.error('Erro ao deletar endereço');
        }

        return {
          address: addressResponse.data,
        };
      } catch (error) {
        if (error instanceof AxiosError && error.response?.data?.error) {
          toast.error('Erro ao criar endereço');
        }
      }
    }

    // try {
    //   const AddressesResponse = await customFetch.post<StrapiAddressesType>(
    //     `/addresses`,
    //     { data },
    //   );

    //   if (AddressesResponse.status !== 200) {
    //     throw new Error('not found');
    //   }

    //   return {
    //     addresses: AddressesResponse.data,
    //   };
    // } catch (error) {
    //   if (error instanceof AxiosError && error.response?.data?.error) {
    //     throw new Error(error.response.data.error.message);
    //   }

    //   if (
    //     error instanceof Error &&
    //     error.message.includes('Cannot read property')
    //   ) {
    //     throw new Error(
    //       'An unexpected error occurred. The API may be experiencing issues. Please try again later.',
    //     );
    //   }

    //   throw error;
    // }
  };
