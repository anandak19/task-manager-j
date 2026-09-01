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
    path: 'create',
    loadComponent: () =>
      import('./pages/create-task-page/create-task-page.component').then(
        (c) => c.CreateTaskPageComponent,
      ),
  },

  {
    path: ':taskId/edit',
    loadComponent: () =>
      import('./pages/edit-task-page/edit-task-page.component').then(
        (c) => c.EditTaskPageComponent,
      ),
  },

  {
    path: ':taskId',
    loadComponent: () =>
      import('./pages/task-details-page/task-details-page.component').then(
        (c) => c.TaskDetailsPageComponent,
      ),
  },
];
