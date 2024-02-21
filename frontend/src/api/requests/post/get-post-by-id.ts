import { api } from '@/api';
import { PostDto } from '@/types';

export const getPostsById = async (id: string): Promise<PostDto> => {
  const { data } = await api.post.findOne(id);

  return data;
};
