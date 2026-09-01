import { Location } from '@angular/common';
import { Component, DestroyRef, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
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
  private _location = inject(Location)

  // create task
  handleCreateTask(taskData: ITaskFormData) {
    // call create task service method here
    const newTask: ICreateTask = {
      ...taskData,
      createdAt: new Date().toLocaleString(),
    };

    this.isTaskCreating.set(true);
    this._taskService.createTask(newTask);
    setTimeout(() => this.isTaskCreating.set(false), 5000);
  }

  navigateBack(){
    this._location.back()
  }
}
