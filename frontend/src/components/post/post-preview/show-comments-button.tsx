import { messages } from '@/messages';

interface IShowCommentsButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export const ShowCommentsButton = ({ onClick, isActive }: IShowCommentsButtonProps) => {
  const icon = <b>{isActive ? '- ' : '+ '}</b>;
  return (
    <button onClick={onClick}>
      {icon}
      {messages.comments}
    </button>
  );
};
