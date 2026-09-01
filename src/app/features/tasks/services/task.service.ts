import { Injectable, signal } from '@angular/core';
import { ICreateTask, ITask } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<ITask[]>([]);

  createTask(taskData: ICreateTask) {
    const newTask: ITask = {
      ...taskData,
      id: Date.now().toString(),
    };
    console.log('Created Task ', newTask);
  }
}
