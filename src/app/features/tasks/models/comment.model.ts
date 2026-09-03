export interface IComment {
  id: string;
  taskId: string;
  username: string;
  userId: string;
  text: string;
  parentId: string | null;
}

export type ICreateComment = Omit<IComment, 'id'>;
