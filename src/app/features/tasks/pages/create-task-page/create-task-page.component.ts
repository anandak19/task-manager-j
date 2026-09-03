import { Location } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/notification-service/notification.service';
import { TaskFormComponent } from '@features/tasks/components/task-form/task-form.component';
import { ICreateTask, ITaskFormData } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';
import { finalize } from 'rxjs';

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
  private _notification = inject(NotificationService);
  private _destroyRef = inject(DestroyRef);

  // create task
  handleCreateTask(taskData: ITaskFormData) {
    this.isTaskCreating.set(true);
    const newTask: ICreateTask = {
      ...taskData,
      createdAt: new Date().toLocaleString(),
    };
    this._taskService
      .createTask(newTask)
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        finalize(() => this.isTaskCreating.set(false)),
      )
      .subscribe({
        next: (res) => {
          this._notification.success('Added new task');
          this.navigateBack();
        },
        error: (err) => {
          this._notification.error('Faild to add task');
        },
      });
  }

  navigateBack() {
    this._location.back();
  }
}
