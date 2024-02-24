import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getCommentsByPostId, getPostsById } from '@/api';
import { PostDto } from '@/types';
import { PostPreview } from '@/components';

interface IPostDetailsPageProps {
  post: PostDto;
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id;
  const post = await getPostsById(id);
  const comments = await getCommentsByPostId(id);

  return { props: { post, comments } };
}) satisfies GetServerSideProps<IPostDetailsPageProps>;

const UserDetailsPage = ({ post, comments }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostPreview post={post} comments={comments} />;
};

export default UserDetailsPage;
