import { messages } from '@/messages';

interface IShowCommentsButtonProps {
  onClick: () => void;
  isActive: boolean;
  count: number;
}

export const ShowCommentsButton = ({ onClick, isActive, count }: IShowCommentsButtonProps) => {
  const icon = <b>{isActive ? ' -' : ' +'}</b>;
  return (
    <button onClick={onClick}>
      {count + ' ' + messages.comments}
      {icon}
    </button>
  );
};
