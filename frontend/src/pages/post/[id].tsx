import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PostMock, getCommentsByPostId, getPostsById } from '@/api';
import { PostPreview } from '@/components';

interface IPostDetailsPageProps {
  post: PostMock;
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id;
  const post = await getPostsById(Number(id));
  const comments = await getCommentsByPostId(Number(id));

  return { props: { post, comments } };
}) satisfies GetServerSideProps<IPostDetailsPageProps>;

const UserDetailsPage = ({ post, comments }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostPreview post={post} comments={comments} />;
};

export default UserDetailsPage;
