import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { redirect } from 'react-router-dom';
import { RootState } from 'store';

import { StrapiRatingsType, StrapiUserType } from 'types';
import { customFetch } from 'utils';

export const profileLoader = (store: Store) => async () => {
  const user = (store.getState() as RootState).userState.user;

  if (!user) {
    return redirect('/login?transfer=/checkout');
  }

  try {
    const userResponse = await customFetch.get<StrapiUserType>(
      `users/${user?.id}?populate=deep,2`,
    );
    const ratingsResponse = await customFetch.get<StrapiRatingsType>(
      'ratings?populate=deep,2',
    );

    if (userResponse.status !== 200 || ratingsResponse.status !== 200) {
      throw new Error('not found');
    }

    return {
      user: userResponse.data,
      ratings: ratingsResponse.data,
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
