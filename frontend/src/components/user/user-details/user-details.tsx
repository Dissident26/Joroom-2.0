import Image from 'next/image';

import { UserMock, PostMock } from '@/api';

import styles from './styles.module.css';
import { PostPreview } from '@/components';

interface iUserDetailsProps {
  user: UserMock;
  posts: PostMock[];
}

const IMAGE_SIZE = 150;

export const UserDetails = ({ user, posts }: iUserDetailsProps) => {
  return (
    <>
      <div className={styles.container}>
        <Image src={user.imageUrl} width={IMAGE_SIZE} height={IMAGE_SIZE} alt={user.name} />
        <div className={styles.about}>
          <div className={styles.checkbox}>
            <h3>{user.name}</h3>
            <input type="checkbox" readOnly checked={user.isActive} />
          </div>
          <div>
            <div>Registred: {new Date(user.created_at).toLocaleDateString()}</div>
            <div>About myself: {user.description}</div>
          </div>
        </div>
      </div>
      <div className={styles.postContainer}>
        {posts.map((post) => (
          //fetch post comments????
          <PostPreview post={post} />
        ))}
      </div>
    </>
  );
};
