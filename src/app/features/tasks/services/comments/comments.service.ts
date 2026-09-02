import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IComment } from '@features/tasks/models/comment.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private _http = inject(HttpClient);

  getComments(taskId: string, parentId: string | null) {
    return this.fetchAllComments().pipe(
      map((comments) => {
        return comments.filter(
          (comment) => comment.taskId === taskId && comment.parentId === parentId,
        );
      }),
    );
  }

  fetchAllComments() {
    return this._http.get<IComment[]>('comments.json');
  }

  addComment(taskId: string, parentCommentId: string | null, comment: string) {
    const newComment: IComment = {
      id: Date.now().toString(),
      parentId: parentCommentId,
      taskId: taskId,
      text: comment,
      username: 'Anandan',
    };
    console.log('New Comment Added ', newComment);
    return newComment
  }
}
