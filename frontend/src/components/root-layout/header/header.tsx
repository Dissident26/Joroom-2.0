import Link from 'next/link';

import { endpoints } from '@/api';
import { messages } from '@/messages';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link href={endpoints.post.list}>{messages.posts}</Link>
        </li>
        <li>
          <Link href={endpoints.tag.list}>{messages.tags}</Link>
        </li>
        <li>
          <Link href={endpoints.user.list}>{messages.users}</Link>
        </li>
      </ul>
    </nav>
  );
};
