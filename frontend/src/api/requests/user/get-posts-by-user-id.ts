import { PostMock, api, endpoints } from '@/api';

export const getPostsByUserId = async (id: number) => {
  const { data } = await api.get<PostMock[]>(endpoints.user.getPostsByUserId(id));

  return data;
};
