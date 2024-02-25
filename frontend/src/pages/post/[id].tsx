import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getCommentsByPostId, getPostsById } from '@/api';
import { PostDto } from '@/types';
import { PostPreview } from '@/components';

interface IPostDetailsPageProps {
  post: PostDto;
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id as string;
  const post = await getPostsById(id);
  const comments = await getCommentsByPostId(id);

  return { props: { post, comments } };
}) satisfies GetServerSideProps<IPostDetailsPageProps>;

const PostDetailsPage = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostPreview post={post} isCommentsInitiallyVisible />;
};

export default PostDetailsPage;
