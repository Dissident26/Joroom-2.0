import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getPostsByTagId, getTagById } from '@/api';
import { PostList, TagPreview } from '@/components';
import { PostDto } from '@/types';

interface ITagDetailsPageProps {
  posts: PostDto[];
}

export const getServerSideProps = (async ({ params }) => {
  const id = params?.id as string;

  const tag = await getTagById(id);
  const posts = await getPostsByTagId(id);

  return { props: { posts, tag } };
}) satisfies GetServerSideProps<ITagDetailsPageProps>;

const TagDetailsPage = ({ posts, tag }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <TagPreview tag={tag} />
      <PostList posts={posts} />
    </>
  );
};

export default TagDetailsPage;
