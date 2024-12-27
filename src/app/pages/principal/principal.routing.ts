import { Route } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { categoriesResolver } from './principal.resolver';

export const principalRoutes: Route[] = [
    {
        path: '',
        component: PrincipalComponent,
        resolve: {
            categories: categoriesResolver,
        }
    }
];
