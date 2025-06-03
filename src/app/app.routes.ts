import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'analizer',
    loadComponent: () => import('./analizer/analizer.component').then(m => m.AnalizerComponent)
  }
];