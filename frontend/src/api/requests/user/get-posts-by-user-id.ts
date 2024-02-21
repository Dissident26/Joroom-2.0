import { api } from '@/api';
import { PostDto } from '@/types';

export const getPostsByUserId = async (userId: string): Promise<PostDto[]> => {
  const { data } = await api.user.findAllPostsByUserId(userId);

  return data;
};
