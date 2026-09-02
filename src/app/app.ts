import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('task-manager');
  /**
   * Each comments has a parentId. by default its null - for root comments
   * If we replay to a comment. while we create that comment it will get the id of paretnt
   * q: while we select a replay to comment, how we set that comments id as parent id of new comment
   * a: comment componet has replay button in it, 
   * while clicking to that button , we show the commnet form, passing the parentId as current comment.Id
   * 
   * To show
   * firstly fetch all comments that has parent null
   * render each comments
   * under each comments do this: fetch all comments that has parentId of that comment
   * and render those comments and so on
   */
}
