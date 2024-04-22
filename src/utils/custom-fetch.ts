import axios from 'axios';

export const customFetch = axios.create({
  baseURL: import.meta.env.VITE_STRAPI_URL,
});
