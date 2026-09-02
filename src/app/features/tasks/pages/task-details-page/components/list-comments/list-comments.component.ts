import { Component, inject, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { IComment } from '@features/tasks/models/comment.model';
import { CommentsService } from '@features/tasks/services/comments/comments.service';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-list-comments',
  imports: [CommentComponent],
  templateUrl: './list-comments.component.html',
  styleUrl: './list-comments.component.scss',
})
export class ListCommentsComponent implements OnChanges {
  @Input() taskId!: string;
  @Input() parentId: string | null = null;

  comments = signal<IComment[]>([]);

  private _commentsService = inject(CommentsService);


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.taskId);
  }
}
