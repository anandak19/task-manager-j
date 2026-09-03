import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommentsFormComponent } from '../comments-form/comments-form.component';
import { CommentsService } from '@features/tasks/services/comments/comments.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NotificationService } from '@core/services/notification-service/notification.service';

interface TaskDialogData {
  taskId: string;
  parentId: string;
}

@Component({
  selector: 'app-replay-modal',
  imports: [MatDialogModule, CommentsFormComponent],
  templateUrl: './replay-modal.component.html',
  styleUrl: './replay-modal.component.scss',
})
export class ReplayModalComponent {
  private readonly dialogRef = inject(MatDialogRef<ReplayModalComponent>);
  private _commentsService = inject(CommentsService);
  private _notificationService = inject(NotificationService);
  private _destroyRef = inject(DestroyRef);

  readonly data = inject<TaskDialogData>(MAT_DIALOG_DATA);

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const result = {
      taskId: this.data.taskId,
      parentCommentId: this.data.parentId,
    };
    this.dialogRef.close(result);
  }

  handleCommentSubmit(comment: string) {
    this._commentsService
      .addComment(this.data.taskId, this.data.parentId, comment)
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe({
        next: (res) => {
          this.dialogRef.close(res);
        },
        error: (err) => {
          this._notificationService.error('Faild to replay comment');
        },
      });
  }
}
