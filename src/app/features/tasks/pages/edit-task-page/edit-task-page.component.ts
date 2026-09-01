import { Location } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { TaskFormComponent } from '@features/tasks/components/task-form/task-form.component';
import { ITask, ITaskFormData } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';

@Component({
  selector: 'app-edit-task-page',
  imports: [TaskFormComponent],
  templateUrl: './edit-task-page.component.html',
  styleUrl: './edit-task-page.component.scss',
})
export class EditTaskPageComponent implements OnInit {
  taskId = input<string>();
  isLoading = signal(false);
  taskData = signal<ITask>({} as ITask);

  private _location = inject(Location);
  private _taskService = inject(TaskService);

  navigateBack() {
    this._location.back();
  }

  getTaskData() {
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

  handleEditTask(taskData: ITaskFormData) {
    this.isLoading.set(true);
    this._taskService.updateTaskById(taskData, this.taskId() as string);
    this.isLoading.set(true);
  }

  ngOnInit(): void {
    this.getTaskData();
  }
}
