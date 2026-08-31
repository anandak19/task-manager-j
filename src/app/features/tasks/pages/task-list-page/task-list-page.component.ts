import { Component } from '@angular/core';
import { TaskCardComponent } from '@features/tasks/components/task-card/task-card.component';

@Component({
  selector: 'app-task-list-page',
  imports: [TaskCardComponent],
  templateUrl: './task-list-page.component.html',
  styleUrl: './task-list-page.component.scss',
})
export class TaskListPageComponent {}
