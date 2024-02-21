import { api } from '@/api';
import { PostDto } from '@/types';

export const getPostList = async (): Promise<PostDto[]> => {
  const { data } = await api.post.findAll();

  return data;
};
