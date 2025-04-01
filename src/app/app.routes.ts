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
            {
                path: 'BuscarItem',
                loadComponent: () => import('./pages/buscar-item/buscar-item.component')
            },
            {
                path: 'AgregarItem',
                loadComponent: () => import('./pages/nuevo-item/nuevo-item.component')
            },
            {
                path: 'Usuario',
                loadComponent: () => import('./pages/actualizar-usuario/actualizar-usuario.component')
            },
            
        ]
    },
    {
        path: 'inicio',
        loadComponent: () => import('./pages/inicio-sesion/inicio-sesion.component'),
    },
    {
        path: '**',
        redirectTo: 'inicio'
    }
];
