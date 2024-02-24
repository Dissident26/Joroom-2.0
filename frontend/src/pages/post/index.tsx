import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getPostList } from '@/api';
import { PostList } from '@/components';
import { PostDto } from '@/types';

interface IPostListPageProps {
  data: PostDto[];
}

export const getServerSideProps = (async () => {
  const data = await getPostList();

  return { props: { data } };
}) satisfies GetServerSideProps<IPostListPageProps>;

const PostListPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <PostList posts={data} />;
};

export default PostListPage;
