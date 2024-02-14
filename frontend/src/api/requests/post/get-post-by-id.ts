import { api, endpoints } from '@/api';
import { PostMock } from '..';

export const getPostsById = async (id: number) => {
  const { data } = await api.get<PostMock>(endpoints.post.getById(id));

  return data;
};
