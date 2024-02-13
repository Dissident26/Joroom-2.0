import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PostMock, UserMock, getPostsByUserId, getUserById } from '@/api';
import { UserDetails } from '@/components';

interface IUserDetailsPageProps {
  user: UserMock;
  posts: PostMock[];
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id;
  const user = await getUserById(Number(id));
  const posts = await getPostsByUserId(Number(id));

  return { props: { user, posts } };
}) satisfies GetServerSideProps<IUserDetailsPageProps>;

const UserDetailsPage = ({ user, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <UserDetails user={user} posts={posts} />;
};

export default UserDetailsPage;
