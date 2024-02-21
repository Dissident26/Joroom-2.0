import { Api } from '../types';

export const api = new Api({
  baseURL: process.env.BASE_API_URL,
});
