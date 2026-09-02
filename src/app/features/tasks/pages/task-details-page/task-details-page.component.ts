import { DatePipe, Location } from '@angular/common';
import { Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusLabelPipe } from '@core/pipes/status-label-pipe';
import { NotificationService } from '@core/services/notification-service/notification.service';
import { ITask } from '@features/tasks/models/task.model';
import { TaskService } from '@features/tasks/services/task.service';
import { QuillModule } from 'ngx-quill';
import { ListCommentsComponent } from './components/list-comments/list-comments.component';
import { CommentsService } from '@features/tasks/services/comments/comments.service';
import { IComment } from '@features/tasks/models/comment.model';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsFormComponent } from "./components/comments-form/comments-form.component";

@Component({
  selector: 'app-task-details-page',
  imports: [
    StatusLabelPipe,
    DatePipe,
    QuillModule,
    FormsModule,
    CommentComponent,
    CommentsFormComponent
],
  templateUrl: './task-details-page.component.html',
  styleUrl: './task-details-page.component.scss',
})
export class TaskDetailsPageComponent implements OnInit {
  taskId = input.required<string>();
  taskData = signal<ITask>({} as ITask);

  rootComments = signal<IComment[]>([]);

  private _taskService = inject(TaskService);
  private _location = inject(Location);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _notificationService = inject(NotificationService);

  private _commentsService = inject(CommentsService);

  navigateBack() {
    this._location.back();
  }

  navigateEditTask() {
    this._router.navigate(['edit'], { relativeTo: this._activatedRoute });
  }

  async deleteTask() {
    const confirmed = await this._notificationService.confirm({
      title: 'Delete Task',
      text: 'This task will be permanently deleted.',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    });

    if (!confirmed) {
      return;
    }
    this._taskService.deleteTaskById(this.taskId() as string);

    this._notificationService.success('Task Deleted Successfully');

    this.navigateBack();
  }

  getComments() {
    // fetch comments by taskId and parentId
    const result = this._commentsService.getComments(this.taskId(), null).subscribe({
      next: (res) => {
        this.rootComments.set(res);
      },
      error: (err) => {
        //todo: show error
      },
    });
  }

  getTasks() {
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

  ngOnInit(): void {
    this.getTasks();
    this.getComments();
  }
}
