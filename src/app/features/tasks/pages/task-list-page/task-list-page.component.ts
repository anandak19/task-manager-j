import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  readonly tasks = this._taskService.tasks;

  navigateCreateTask() {
    this._router.navigate(['/tasks/create']);
  }

  getTasks() {
    if (this.tasks().length > 0) return;

    this._taskService.getTasks().subscribe({
      next: (res) => {
        this._taskService.setTasks(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit(): void {
    this.getTasks();
  }
}
