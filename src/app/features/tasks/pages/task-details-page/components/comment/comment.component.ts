import { Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { IComment } from '@features/tasks/models/comment.model';
import { CommentsService } from '@features/tasks/services/comments/comments.service';
import { MatDialog } from '@angular/material/dialog';
import { ReplayModalComponent } from '../replay-modal/replay-modal.component';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnChanges {
  @Input() comment!: IComment;
  replies = signal<IComment[]>([]);

  private _commentsService = inject(CommentsService);
  private readonly dialog = inject(MatDialog);

  getReplies() {
    this._commentsService.getComments(this.comment.taskId, this.comment.id).subscribe({
      next: (res) => {
        this.replies.set(res);
      },
      error: (err) => {},
    });
  }

  replayComment() {
    const dialogRef = this.dialog.open(ReplayModalComponent, {
      width: '500px',

      data: {
        taskId: this.comment.taskId,
        parentId: this.comment.id,
      },
    });

    dialogRef.afterClosed().subscribe((newComment: IComment) => {
      if (newComment) {
        this.replies.update((curr) => [...curr, newComment]);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getReplies();
  }
}
