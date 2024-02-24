import { api } from '@/api';
import { PostDto } from '@/types';

export const getPostsByTagId = async (id: string): Promise<PostDto[]> => {
  const { data } = await api.tag.findAllPostsByTagId(id);

  return data;
};
