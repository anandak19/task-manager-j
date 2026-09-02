import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommentsFormComponent } from '../comments-form/comments-form.component';
import { CommentsService } from '@features/tasks/services/comments/comments.service';

interface TaskDialogData {
  taskId: string;
  parentCommentId: string;
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

  readonly data = inject<TaskDialogData>(MAT_DIALOG_DATA);

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    const result = {
      taskId: this.data.taskId,
      parentCommentId: this.data.parentCommentId,
    };
    this.dialogRef.close(result);
  }

  handleCommentSubmit(comment: string) {
    const addedComment = this._commentsService.addComment(
      this.data.taskId,
      this.data.parentCommentId,
      comment,
    );
    this.dialogRef.close(addedComment);
  }
}
