import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'analizer',
    loadComponent: () => import('./analizer/analizer.component').then(m => m.AnalizerComponent)
  },
  {
    path: 'positions',
    loadComponent: () => import('./positions/positions.component').then(m => m.PositionsComponent)
  },
  {
    path: 'applicant-details',
    loadComponent: () => import('./applicant-details/applicant-details.component').then(m => m.ApplicantDetailsComponent)
  },
  {
    path: 'add-cv',
    loadComponent: () => import('./add-cv/add-cv.component').then(m => m.AddCvComponent)
  },
  {
    path: 'add-position',
    loadComponent: () => import('./positions/add-position/add-position.component').then(m => m.AddPositionComponent)
  },
    {
    path: 'edit-position',
    loadComponent: () => import('./positions/edit-position/edit-position.component').then(m => m.EditPositionComponent)
  },
];
