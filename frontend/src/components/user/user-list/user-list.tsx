import { UserDto } from '@/types';
import { UserPreview } from '../user-preview';

interface IUserListPageProps {
  users: UserDto[];
}

export const UserList = ({ users }: IUserListPageProps) => {
  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserPreview user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
