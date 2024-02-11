import { api, endpoints } from "@/api";

export interface UserMock {
    id: number;
    name: string;
    email: string;
    imageUrl: string;
    description: string;
    isActive: boolean,
    created_at: string;
}

export const getUserList = async () => {
    const { data } = await api.get<UserMock[]>(endpoints.user.list)

    return data;
}