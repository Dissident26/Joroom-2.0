import Link from 'next/link';

import { TagDto } from '@/types';
import { routes } from '@/api';

interface ITagListProps {
  data: TagDto[];
}

export const TagList = ({ data }: ITagListProps) => {
  return (
    <ul>
      {data.map(({ id, content }) => (
        <li key={id}>
          <Link href={routes.tag.getById(id)}>{content}</Link>
        </li>
      ))}
    </ul>
  );
};
