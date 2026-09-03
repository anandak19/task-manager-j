import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { NotificationService } from '@core/services/notification-service/notification.service';
import { TaskCardComponent } from '@features/tasks/components/task-card/task-card.component';
import { TaskService } from '@features/tasks/services/task.service';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskCardComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
})
export class TaskListPageComponent implements OnInit {
  private _router = inject(Router);
  private _taskService = inject(TaskService);
  private _destroyRef = inject(DestroyRef);
  private _notificationService = inject(NotificationService);

  readonly tasks = this._taskService.tasks;

  navigateCreateTask() {
    this._router.navigate(['/tasks/create']);
  }

  getTasks() {
    this._taskService
      .getTasks()
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this._taskService.setTasks(res);
        },
        error: (err) => {
          this._notificationService.error('Faild to get tasks');
        },
      });
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
