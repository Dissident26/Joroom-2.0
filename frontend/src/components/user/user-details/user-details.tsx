import Image from "next/image";
import Link from "next/link";

import { UserMock } from "@/api"

import styles from './styles.module.css'

interface iUserDetailsProps {
    user: UserMock;
    // posts: PostMock[];
}

export const UserDetails = ({ user }: iUserDetailsProps) => {
    return (
        <div className={styles.container}>
        <Image
            src={user.imageUrl}
            width={150}
            height={150}
            alt={user.name}
        />
        <div className={styles.about}>
            <div className={styles.checkbox}>
                <h3>{user.name}</h3>
                <input type="checkbox" readOnly checked={user.isActive} />
            </div>
            <div>
                <div>Registred: {new Date(user.created_at).toLocaleDateString()}</div>
                <div>About myself: {user.description}</div>
            </div>
        </div>
        </div>
    )
}