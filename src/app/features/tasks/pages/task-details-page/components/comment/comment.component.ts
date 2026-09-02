import { Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { IComment } from '@features/tasks/models/comment.model';
import { ListCommentsComponent } from '../list-comments/list-comments.component';
import { CommentsService } from '@features/tasks/services/comments/comments.service';

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

  getComments() {
    this._commentsService.getComments(this.comment.taskId, this.comment.id).subscribe({
      next: (res) => {
        this.replies.set(res);
      },
      error: (err) => {},
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getComments();
  }
}
