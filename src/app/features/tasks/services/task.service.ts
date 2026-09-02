import { inject, Injectable, signal } from '@angular/core';
import { ICreateTask, ITask, ITaskFormData } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '@core/services/notification-service/notification.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<ITask[]>([]);
  readonly tasks = this._tasks.asReadonly();

  private _http = inject(HttpClient);
  private _notification = inject(NotificationService);

  createTask(taskData: ICreateTask) {
    const newTask: ITask = {
      ...taskData,
      id: Date.now().toString(),
    };
    this._tasks.update((curr) => [...curr, newTask]);
    this._notification.success('Added new task');
  }

  getTasks() {
    return this._http.get<ITask[]>('tasks.json');
  }

  findTaskById(taskId: string): ITask | null {
    return this.tasks().find((task) => task.id === taskId) ?? null;
  }

  updateTaskById(taskData: ITaskFormData, taskId: string) {
    const updatedTasks = this.tasks().map((curr) => {
      if (curr.id === taskId) {
        return {
          ...curr,
          ...taskData,
        };
      }

      return curr;
    });

    this.setTasks(updatedTasks);
  }

  deleteTaskById(taskId: string) {
    const updatedTasks = this.tasks().filter((curr) => curr.id !== taskId);
    this.setTasks(updatedTasks);
  }

  setTasks(tasks: ITask[]): void {
    this._tasks.set(tasks);
  }
}
