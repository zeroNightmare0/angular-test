import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Brand, Category } from './principal.types';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class PrincipalService {

    private _categories: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>([]);
    private _brands: BehaviorSubject<Brand[]> = new BehaviorSubject<Brand[]>([]);

    /**
     * Constructor
     */
    constructor(
        private _http: HttpClient
    ) { }

    /**
     * Categories getter
     */
    get categories$(): BehaviorSubject<Category[]> {
        return this._categories;
    }

    /**
     * Brand getter
     */
    get brands$(): BehaviorSubject<Brand[]> {
        return this._brands;
    }

    /**
     * Get categories:
     * Function to get the categories of the application
     *
     * @returns
     */
    getCategories(): Observable<Category[]> {
        return this._http.get<Response>(environment.urlBase+'/Categorias').pipe(
            map(data => data.menuItems),
            map(data => data.map((item: Category) => {
                return {
                    idMenu: item.idMenu,
                    descripcion: item.descripción
                }
            })),
            tap(data => {
                this._categories.next(data)
            })
        );
    }

    /**
     * Get brands:
     * Function to get the brands of the application
     *
     * @param category
     * @returns
     */
    getBrandsByIdMenu(idMenu: number): Observable<Brand[]> {
        return this._http.get<Response>(environment.urlBase +'/Marcas', {
            params: { idMenu: idMenu }
        }).pipe(
            map(data => data.menuItems),
            map(data => data.map((item: Brand) => {
                return {
                    idItem: item.idItem,
                    descripcion: item.descripción,
                    nombreMarca: item.nombreMarca,
                    imagen: item.imagen
                }
            })),
            tap(data => this._brands.next(data))
        );
    }

}

export interface Response {
    codigo: string;
    error: boolean;
    menuItems: any[];
    message: string;
}
