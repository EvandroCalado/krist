import { Store } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';
import { userLogin } from 'slices/userSlice';

import { customFetch } from 'utils/custom-fetch';

export const loginAction =
  (store: Store) =>
  async ({ request }: { request: Request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const url = new URL(request.url);
    const transfer = url.searchParams.get('transfer');

    try {
      const response = await customFetch.post('/auth/local', data);

      if (response.status === 200) {
        toast.success('Login realizado com sucesso!');
      }

      store.dispatch(userLogin(response.data.user));

      return redirect(transfer || '/');
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 400) {
          toast.error('Email ou usuário incorretos');
        }
        return null;
      }
    }
  };
