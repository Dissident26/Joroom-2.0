import { api } from '@/api';
import { TagDto } from '@/types';

export const getTagById = async (id: string): Promise<TagDto> => {
  const { data } = await api.tag.findOne(id);

  return data;
};
