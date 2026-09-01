import { Location } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/notification-service/notification.service';
import { TaskFormComponent } from '@features/tasks/components/task-form/task-form.component';
import { ICreateTask, ITaskFormData } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';

@Component({
  selector: 'app-create-task-page',
  imports: [TaskFormComponent],
  templateUrl: './create-task-page.component.html',
  styleUrl: './create-task-page.component.scss',
})
export class CreateTaskPageComponent {
  isTaskCreating = signal(false);

  private _taskService = inject(TaskService);
  private _location = inject(Location);
  private _notification = inject( NotificationService);

  // create task
  handleCreateTask(taskData: ITaskFormData) {
    this.isTaskCreating.set(true);
    const newTask: ICreateTask = {
      ...taskData,
      createdAt: new Date().toLocaleString(),
    };
    this._taskService.createTask(newTask);
    this.isTaskCreating.set(false)

    this._notification.success('New Task Added')
    this.navigateBack()
  }

  navigateBack() {
    this._location.back();
  }
}
