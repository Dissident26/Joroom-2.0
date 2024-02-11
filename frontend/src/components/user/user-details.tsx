import Image from "next/image";
import Link from "next/link";

import { UserMock } from "@/api"

interface iUserDetailsProps {
    user: UserMock;
    // posts: PostMock[];
}

export const UserDetails = ({ user }: iUserDetailsProps) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
            <Image
                src={user.imageUrl}
                width={150}
                height={150}
                alt={user.name}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <h3>{user.name}</h3>
                    <input type="checkbox" readOnly checked={user.isActive} />
                </div>
                <div>
                    <div>Registred: {new Date(user.created_at).toLocaleDateString()}</div>
                    <div>About myself: {user.description}</div>
                </div>
            </div>
            </div>
        </div>
    )
}