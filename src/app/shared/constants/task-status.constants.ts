import { TaskStatus } from "@features/tasks/models/task.model";

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  PENDING: 'Pending',
  IN_PROGRESS: 'In Progress',
  COMPLETED: 'Completed',
};

export const TASK_STATUS: TaskStatus[] = ['PENDING', 'IN_PROGRESS', 'COMPLETED'];