import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';

import { customFetch } from 'utils/custom-fetch';

export const registerAction = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/local/register', data);

    if (response.status === 200) {
      toast.success('Conta criada com sucesso!');
    }

    return redirect('/login');
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 400) {
        toast.error('Email ou usuário ja existe');
      }
      return null;
    }
  }
};
