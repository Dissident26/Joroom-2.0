import Image from "next/image";
import Link from "next/link";

import { UserMock, endpoints } from "@/api";

interface IUserPreviewProps {
    user: UserMock
}

export const UserPreview = ({ user }: IUserPreviewProps) => {
    return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    }}>
        <Image
            src={user.imageUrl}
            width={50}
            height={50}
            alt={user.name}
        />
        <Link href={endpoints.user.getById(user.id)}>{user.name}</Link>
        <input type="checkbox" readOnly checked={user.isActive} />
    </div>
    )
}