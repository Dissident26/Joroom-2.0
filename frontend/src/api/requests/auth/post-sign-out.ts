import { api } from '@/api';

export const postSignOut = async (): Promise<void> => {
  await api.auth.signOut();
};
