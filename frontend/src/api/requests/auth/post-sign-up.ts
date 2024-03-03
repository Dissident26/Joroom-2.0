import { api } from '@/api';

export const postSignUp = async () => {
  const { data } = await api.auth.signUp();

  return data;
};
