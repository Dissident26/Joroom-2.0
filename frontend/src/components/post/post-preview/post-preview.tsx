import Link from 'next/link';
import { useState } from 'react';

import { routes } from '@/api';

import styles from './styles.module.css';

import { messages } from '@/messages';
import { PostDto } from '@/types';
import { UserPreview } from '@/components/user/user-preview';
import { ShowCommentsButton } from './show-comments-button';

interface IPostPreviewProps {
  post: PostDto;
  isCommentsInitiallyVisible?: boolean;
}

export const PostPreview = ({ post, isCommentsInitiallyVisible = false }: IPostPreviewProps) => {
  const [isCommentsVisible, setIsCommentVisible] = useState(isCommentsInitiallyVisible);

  return (
    <div>
      <UserPreview user={post.user} />
      <ul className={styles.list}>
        {post.tags.map(({ id, content }, i) => (
          <li key={i}>
            <Link href={routes.tag.getById(id)}>{content}</Link>
          </li>
        ))}
      </ul>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <div className={styles.footer}>
        <ShowCommentsButton onClick={() => setIsCommentVisible((prev) => !prev)} isActive={isCommentsVisible} count={post.comments.length} />
        <div suppressHydrationWarning>{new Date(post.created_at).toLocaleString()}</div>
        <Link href={routes.post.getById(post.id)}>{messages.link}</Link>
      </div>
      {isCommentsVisible && (
        <div className={styles.comments}>
          {post.comments.map((comment, i) => (
            <div key={i}>
              <UserPreview user={comment.user} />
              <div>{comment.content}</div>
              <div>{new Date(comment.created_at).toLocaleDateString()}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
