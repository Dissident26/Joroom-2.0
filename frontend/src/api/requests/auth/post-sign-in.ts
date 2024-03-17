import { api } from '@/api';
import { SignInDto } from '@/types';

export const postSignIn = async (signInData: SignInDto) => {
  const { data } = await api.auth.signIn(signInData, {
    withCredentials: false,
  });

  return data;
};
