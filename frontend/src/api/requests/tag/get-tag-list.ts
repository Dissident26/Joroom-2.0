import { api } from '@/api';
import { TagDto } from '@/types';

export const getTagList = async (): Promise<TagDto[]> => {
  const { data } = await api.tag.findAll();

  return data;
};
