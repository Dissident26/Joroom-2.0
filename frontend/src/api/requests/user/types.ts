export interface UserMock {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  description: string;
  isActive: boolean;
  created_at: string;
}

export interface TagMock {
  id: number;
  content: string;
}

export interface PostMock {
  id: number;
  user: UserMock;
  title: string;
  content: string;
  tags: TagMock[];
  created_at: Date;
}

export interface CommentMock {
  parent: number | null;
  id: number;
  content: string;
  created_at: Date;
  user: UserMock;
}
