export type TaskStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  deadline: string;
  createdAt: string | null;
}

export type ICreateTask = Omit<ITask, 'id'>;
export type ITaskFormData = Omit<ICreateTask, 'createdAt'>;
