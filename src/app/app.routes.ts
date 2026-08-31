import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/layout/app-layout/app-layout.component').then((c) => c.AppLayoutComponent),

    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks',
      },

      {
        path: 'tasks',
        loadChildren: () => import('./features/tasks/task.route').then((r) => r.taskRoutes),
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'tasks',
  },
];
