import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PostMock, getPostsById } from '@/api';
import { PostPreview } from '@/components';

interface IPostDetailsPageProps {
  post: PostMock;
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id;
  const post = await getPostsById(Number(id));

  return { props: { post } };
}) satisfies GetServerSideProps<IPostDetailsPageProps>;

const UserDetailsPage = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostPreview post={post} />;
};

export default UserDetailsPage;
