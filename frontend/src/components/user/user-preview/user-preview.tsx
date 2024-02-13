import Image from 'next/image';
import Link from 'next/link';

import { UserMock, endpoints } from '@/api';

interface IUserPreviewProps {
  user: UserMock;
}

import styles from './styles.module.css';

const IMAGE_SIZE = 50;

export const UserPreview = ({ user }: IUserPreviewProps) => {
  return (
    <div className={styles.container}>
      <Image src={user.imageUrl} width={IMAGE_SIZE} height={IMAGE_SIZE} alt={user.name} />
      <Link href={endpoints.user.getById(user.id)}>{user.name}</Link>
      <input type="checkbox" readOnly checked={user.isActive} />
    </div>
  );
};
