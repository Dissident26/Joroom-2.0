import Link from 'next/link';

import { PostMock, endpoints } from '@/api';
import { UserPreview } from '@/components/user/user-preview';

import styles from './styles.module.css';

interface IPostPreviewProps {
  post: PostMock;
}

export const PostPreview = ({ post }: IPostPreviewProps) => {
  return (
    <div>
      <UserPreview user={post.user} />
      <ul className={styles.list}>
        {post.tags.map(({ id, content }, i) => (
          <li key={i}>
            <Link href={endpoints.tag.getById(id)}>{content}</Link>
          </li>
        ))}
      </ul>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className={styles.footer}>
        <button>GET COMMENTS!!!</button>
        <div>{new Date(post.created_at).toLocaleString()}</div>
      </div>
    </div>
  );
};
