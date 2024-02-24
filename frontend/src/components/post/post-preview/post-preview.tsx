import Link from 'next/link';
import { useState } from 'react';

import { endpoints } from '@/api';

import styles from './styles.module.css';

import { messages } from '@/messages';
import { PostDto } from '@/types';
import { UserPreview } from '@/components/user/user-preview';

interface IPostPreviewProps {
  post: PostDto;
}

export const PostPreview = ({ post }: IPostPreviewProps) => {
  const [isCommentsVisible, setIsCommentVisible] = useState(false);

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
        <button onClick={() => setIsCommentVisible((prev) => !prev)}>GET COMMENTS!!!</button>
        <div>{new Date(post.created_at).toLocaleString()}</div>
        <Link href={endpoints.post.getById(post.id)}>{messages.link}</Link>
      </div>
      {isCommentsVisible && (
        <div>
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
