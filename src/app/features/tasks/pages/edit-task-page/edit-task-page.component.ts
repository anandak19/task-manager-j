import { Location } from '@angular/common';
import { Component, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NotificationService } from '@core/services/notification-service/notification.service';
import { TaskFormComponent } from '@features/tasks/components/task-form/task-form.component';
import { ITask, ITaskFormData } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-edit-task-page',
  imports: [TaskFormComponent],
  templateUrl: './edit-task-page.component.html',
  styleUrl: './edit-task-page.component.scss',
})
export class EditTaskPageComponent implements OnInit {
  taskId = input.required<string>();
  isLoading = signal(false);
  taskData = signal<ITask>({} as ITask);

  private _location = inject(Location);
  private _taskService = inject(TaskService);
  private _notification = inject(NotificationService);
  private _destroyRef = inject(DestroyRef);

  navigateBack() {
    this._location.back();
  }

  getTaskData() {
    this._taskService.findTaskById(this.taskId()).subscribe({
      next: (res) => {
        this.taskData.set(res);
      },
      error: (err) => {
        this._notification.error('Faild to get task data');
      },
    });
  }

  handleEditTask(taskData: ITaskFormData) {
    this.isLoading.set(true);
    this._taskService
      .updateTaskById(taskData, this.taskId())
      .pipe(
        takeUntilDestroyed(this._destroyRef),
        finalize(() => this.isLoading.set(false)),
      )
      .subscribe({
        next: (res) => {
          this.taskData.set(res);
          this._notification.success('Task Updated');
        },
      });
  }

  ngOnInit(): void {
    this.getTaskData();
  }
}
