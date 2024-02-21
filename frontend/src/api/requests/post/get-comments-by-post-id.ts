import { api } from '@/api';
import { CommentDto } from '@/types';

export const getCommentsByPostId = async (postId: string): Promise<CommentDto[]> => {
  const { data } = await api.post.findaAllById(postId);

  return data;
};
