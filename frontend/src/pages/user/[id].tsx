import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { UserMock, getUserById } from '@/api';
import { UserDetails } from '@/components';

interface IUserDetailsPageProps {
  user: UserMock;
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id;
  const user = await getUserById(Number(id));

  return { props: { user } };
}) satisfies GetServerSideProps<IUserDetailsPageProps>;

const UserDetailsPage = ({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <UserDetails user={user} />;
};

export default UserDetailsPage;
