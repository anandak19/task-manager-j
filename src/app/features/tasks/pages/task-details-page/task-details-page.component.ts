import { DatePipe, Location } from '@angular/common';
import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusLabelPipe } from '@core/pipes/status-label-pipe';
import { ITask } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-task-details-page',
  imports: [StatusLabelPipe, DatePipe, QuillModule, FormsModule],
  templateUrl: './task-details-page.component.html',
  styleUrl: './task-details-page.component.scss',
})
export class TaskDetailsPageComponent implements OnInit {
  taskId = input<string>();
  taskData = signal<ITask>({} as ITask);

  private _taskService = inject(TaskService);
  private _location = inject(Location);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  navigateBack() {
    this._location.back();
  }

  navigateEditTask() {
    this._router.navigate(['edit'], { relativeTo: this._activatedRoute });
  }

  ngOnInit(): void {
    console.log(this.taskId());

    this._taskService.getTasks().subscribe({
      next: (tasks) => {
        this._taskService.setTasks(tasks);
        const task = this._taskService.findTaskById(this.taskId() as string);

        if (task) {
          this.taskData.set(task);
        }
      },
    });
  }
}
