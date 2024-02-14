import { PostMock, api, endpoints } from '@/api';

export const getPostList = async () => {
  const { data } = await api.get<PostMock[]>(endpoints.post.list);

  return data;
};
