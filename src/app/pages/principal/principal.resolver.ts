
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PrincipalService } from './principal.service';
import { Brand, Category } from './principal.types';
import { tap } from 'rxjs';

export const categoriesResolver: ResolveFn<Category[]> = (route, state) => {
    const service = inject(PrincipalService);
    return service.getCategories();
};
