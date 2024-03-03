import { api } from '@/api';

export const postSignIn = async () => {
  const { data } = await api.auth.signIn();

  return data;
};
