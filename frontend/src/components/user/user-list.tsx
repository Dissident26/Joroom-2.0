// import Image from 'next/image'

import Image from "next/image";

export interface UserMock {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    description: string;
    isActive: boolean,
    created_at: string;
}

interface IUserListPageProps {
    data: UserMock[];
}

export const UserList = ({ data }: IUserListPageProps) => {
    return <div>
        <h1>UserList</h1>
        <ul>
            {data.map((user, index) => <li key={index}>
                <div>
                    <div>id: {user.id}</div>
                    <div>name: {user.name}</div>
                    <div>email: {user.email}</div>
                    <div>
                        <Image
                            src={user.imageUrl}
                            width={128}
                            height={128}
                            alt={user.name}
                        />
                        <div>{user.imageUrl}</div>
                    </div>
                    <div>description: {user.description}</div>
                    <div>isActive: <input type="checkbox" readOnly checked={user.isActive} /></div>
                    <div>created_at: {new Date(user.created_at).toDateString()}</div>
                </div>
            </li>)}
        </ul>
    </div>
};
