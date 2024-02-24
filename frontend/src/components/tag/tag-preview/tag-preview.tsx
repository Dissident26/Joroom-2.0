import { TagDto } from '@/types';

interface ITagPreviewProps {
  tag: TagDto;
}

export const TagPreview = ({ tag }: ITagPreviewProps) => {
  return (
    <div>
      <h1>{tag.content}</h1>
    </div>
  );
};
