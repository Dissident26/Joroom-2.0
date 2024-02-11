import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

import { UserMock, getUserList } from "@/api";
import { UserList } from "@/components";


interface IUserListPageProps {
    data: UserMock[];
}

export const getServerSideProps = (async () => {
    const data = await getUserList();

    return { props: { data } }
  }) satisfies  GetServerSideProps<IUserListPageProps>;

const UserListPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return <UserList users={data} />;
};

export default UserListPage;