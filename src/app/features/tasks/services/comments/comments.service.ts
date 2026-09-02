import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { IComment } from '@features/tasks/models/comment.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private _http = inject(HttpClient);
  private _authService = inject(AuthService);

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
    const currentUser = this._authService.getCurrentUser();
    const newComment: IComment = {
      id: Date.now().toString(),
      parentId: parentCommentId,
      taskId: taskId,
      text: comment,
      username: currentUser.userName,
    };
    return newComment;
  }
}
