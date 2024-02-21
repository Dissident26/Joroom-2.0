import Link from 'next/link';
import { Suspense, useState } from 'react';

import { CommentMock, PostMock, endpoints } from '@/api';
import { UserPreview } from '@/components/user/user-preview';

import styles from './styles.module.css';
import { messages } from '@/messages';

interface IPostPreviewProps {
  post: PostMock;
  comments: CommentMock[];
}

export const PostPreview = ({ post, comments }: IPostPreviewProps) => {
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
          {comments.map((comment, i) => (
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
