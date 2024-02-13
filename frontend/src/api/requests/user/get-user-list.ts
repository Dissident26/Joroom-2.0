import { UserMock, api, endpoints } from '@/api';

export const getUserList = async () => {
  const { data } = await api.get<UserMock[]>(endpoints.user.list);

  return data;
};
