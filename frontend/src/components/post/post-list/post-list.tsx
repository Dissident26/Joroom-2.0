import { PostMock } from '@/api';
import { PostPreview } from '..';

import styles from './styles.module.css';

interface IPostListProps {
  posts: PostMock[];
}

export const PostList = ({ posts }: IPostListProps) => {
  return (
    <div className={styles.postContainer}>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} />
      ))}
    </div>
  );
};
