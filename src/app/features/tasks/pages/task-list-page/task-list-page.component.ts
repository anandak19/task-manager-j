import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TaskCardComponent } from '@features/tasks/components/task-card/task-card.component';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskCardComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
})
export class TaskListPageComponent {
  private _router = inject(Router);

  navigateCreateTask() {
    this._router.navigate(['/tasks/create']);
  }
}
