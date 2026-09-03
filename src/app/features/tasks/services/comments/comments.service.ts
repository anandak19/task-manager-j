import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '@core/services/auth/auth.service';
import { IComment, ICreateComment } from '@features/tasks/models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private END_POINT = 'comments';

  private _http = inject(HttpClient);
  private _authService = inject(AuthService);

  getComments(taskId: string, parentId: string | null) {
    return this._http.get<IComment[]>(`${this.END_POINT}?taskId=${taskId}&parentId=${parentId}`);
  }

  addComment(taskId: string, parentCommentId: string | null, comment: string) {
    const currentUser = this._authService.getCurrentUser();
    const newComment: ICreateComment = {
      taskId: taskId,
      userId: currentUser.id,
      username: currentUser.userName,
      text: comment,
      parentId: parentCommentId,
    };

    return this._http.post<IComment>(this.END_POINT, newComment);
  }
}
