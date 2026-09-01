import { inject, Injectable, signal } from '@angular/core';
import { ICreateTask, ITask } from '../models/task.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private _tasks = signal<ITask[]>([]);
  readonly tasks = this._tasks.asReadonly();

  private _http = inject(HttpClient);

  createTask(taskData: ICreateTask) {
    const newTask: ITask = {
      ...taskData,
      id: Date.now().toString(),
    };
    console.log('Created Task ', newTask);
  }

  getTasks() {
    return this._http.get<ITask[]>('tasks.json');
  }

  setTasks(tasks: ITask[]): void {
    this._tasks.set(tasks);
  }
}
