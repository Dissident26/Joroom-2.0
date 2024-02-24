import Link from 'next/link';

import { TagDto } from '@/types';
import { endpoints } from '@/api';

interface ITagListProps {
  data: TagDto[];
}

export const TagList = ({ data }: ITagListProps) => {
  return (
    <ul>
      {data.map(({ id, content }) => (
        <li key={id}>
          <Link href={endpoints.tag.getById(id)}>{content}</Link>
        </li>
      ))}
    </ul>
  );
};
