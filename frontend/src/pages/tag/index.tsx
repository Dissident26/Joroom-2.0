import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { getTagList } from '@/api';

import { TagDto } from '@/types';
import { TagList } from '@/components';

interface ITagListPageProps {
  data: TagDto[];
}

export const getServerSideProps = (async () => {
  const data = await getTagList();

  return { props: { data } };
}) satisfies GetServerSideProps<ITagListPageProps>;

const TagListPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <TagList data={data} />;
};

export default TagListPage;
