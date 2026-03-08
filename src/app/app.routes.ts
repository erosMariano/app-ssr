import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },

  { path: 'celulares', 
    loadComponent: () => import('./pages/celulares/celulares').then(m => m.Celulares)
   },
  {
    path: '**',
    redirectTo: '',
  },
];
