import { CommentMock, api, endpoints } from '@/api';

export const getCommentsByPostId = async (id: number) => {
  const { data } = await api.get<CommentMock[]>(endpoints.post.getCommentsByPostId(id));

  return data;
};
