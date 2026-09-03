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

  private endPoint = 'tasks';

  private _http = inject(HttpClient);
  private _notification = inject(NotificationService);

  createTask(taskData: ICreateTask) {
    return this._http.post(this.endPoint, taskData);
  }

  getTasks() {
    return this._http.get<ITask[]>(this.endPoint);
  }

  findTaskById(taskId: string) {
    return this._http.get<ITask>(`${this.endPoint}/${taskId}`);
  }

  updateTaskById(taskData: ITaskFormData, taskId: string) {
    return this._http.patch<ITask>(`${this.endPoint}/${taskId}`, taskData);
  }

  deleteTaskById(taskId: string) {
    return this._http.delete(`${this.endPoint}/${taskId}`);
  }

  setTasks(tasks: ITask[]) {
    this._tasks.set(tasks);
  }
}
