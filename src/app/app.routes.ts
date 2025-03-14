import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component'),
        children:[
            {
                path: 'planos',
                loadComponent: () => import('./pages/planos/planos.component')
            },
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
