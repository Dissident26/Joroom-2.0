import Link from 'next/link';

import { routes } from '@/api';
import { messages } from '@/messages';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.list}>
        <li>
          <Link href={routes.post.list}>{messages.posts}</Link>
        </li>
        <li>
          <Link href={routes.tag.list}>{messages.tags}</Link>
        </li>
        <li>
          <Link href={routes.user.list}>{messages.users}</Link>
        </li>
      </ul>
      <ul className={styles.list}>
        <li>
          <Link href={routes.auth.signUp}>{messages.signUp}</Link>
        </li>
        <li>
          <Link href={routes.auth.signIn}>{messages.signIn}</Link>
        </li>
        <li>{messages.signOut}</li>
      </ul>
    </nav>
  );
};
