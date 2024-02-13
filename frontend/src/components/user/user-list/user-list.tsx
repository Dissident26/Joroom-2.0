import { UserMock } from '@/api';
import { UserPreview } from '../user-preview';

interface IUserListPageProps {
  users: UserMock[];
}

export const UserList = ({ users }: IUserListPageProps) => {
  return (
    <div>
      <h1>UserList</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <UserPreview user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};
