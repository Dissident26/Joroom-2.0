import { api } from '@/api';
import { UserDto } from '@/types';

export const getUserById = async (userId: string): Promise<UserDto> => {
  const { data } = await api.user.findOne(userId);

  return data;
};
