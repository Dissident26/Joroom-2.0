import { UserMock, api, endpoints } from '@/api';

export const getUserById = async (id: number) => {
  const { data } = await api.get<UserMock>(endpoints.user.getById(id));

  return data;
};
