import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'principal' },
    {
        path: '',
        children: [
            {
                path: 'principal',
                loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalModule)
            },
            {
                path: 'login',
                loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
            }
        ]
    }
];
