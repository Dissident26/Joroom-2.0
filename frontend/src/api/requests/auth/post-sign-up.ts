import { api } from '@/api';
import { SignUpDto } from '@/types';

export const postSignUp = async (signUpData: SignUpDto) => {
  const { data } = await api.auth.signUp(signUpData);

  return data;
};
