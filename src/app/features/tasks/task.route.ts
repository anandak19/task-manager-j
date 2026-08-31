import { Routes } from '@angular/router';

export const taskRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/task-list-page/task-list-page.component').then(
        (c) => c.TaskListPageComponent,
      ),
  },
  {
    path: ':taskId',
    loadComponent: () =>
      import('./pages/task-details-page/task-details-page.component').then(
        (c) => c.TaskDetailsPageComponent,
      ),
  },
  /**
   * create task route
   * update task route
   */
];
