export interface IComment {
  id: string;
  taskId: string;
  username: string;
  text: string;
  parentId: string | null;
}
