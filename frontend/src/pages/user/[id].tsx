import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getPostsByUserId, getUserById } from '@/api';
import { UserDetails } from '@/components';
import { PostDto, UserDto } from '@/types';

interface IUserDetailsPageProps {
  user: UserDto;
  posts: PostDto[];
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id as string;

  const user = await getUserById(id);
  const posts = await getPostsByUserId(id);

  return { props: { user, posts } };
}) satisfies GetServerSideProps<IUserDetailsPageProps>;

const UserDetailsPage = ({ user, posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <UserDetails user={user} posts={posts} />;
};

export default UserDetailsPage;
