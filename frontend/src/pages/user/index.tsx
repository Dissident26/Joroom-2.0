import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getUserList } from '@/api';
import { UserList } from '@/components';
import { UserDto } from '@/types';

interface IUserListPageProps {
  data: UserDto[];
}

export const getServerSideProps = (async () => {
  const data = await getUserList();

  return { props: { data } };
}) satisfies GetServerSideProps<IUserListPageProps>;

const UserListPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <UserList users={data} />;
};

export default UserListPage;
