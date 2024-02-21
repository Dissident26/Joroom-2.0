import { api } from '@/api';
import { UserDto } from '@/types';

export const getUserList = async (): Promise<UserDto[]> => {
  const { data } = await api.user.findAll();

  return data;
};
