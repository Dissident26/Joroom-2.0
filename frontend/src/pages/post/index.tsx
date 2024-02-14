import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { PostMock, getPostList } from '@/api';
import { PostList } from '@/components';

interface IPostListPageProps {
  data: PostMock[];
}

export const getServerSideProps = (async () => {
  const data = await getPostList();

  return { props: { data } };
}) satisfies GetServerSideProps<IPostListPageProps>;

const PostListPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostList posts={data} />;
};

export default PostListPage;
