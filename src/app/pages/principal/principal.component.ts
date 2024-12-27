import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Brand, Category, TableData } from './principal.types';
import { PrincipalService } from './principal.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrincipalComponent implements OnInit, OnDestroy {
    // Table data
    tableData: TableData[] = [];
    // Menu data
    menuCategories: Category[] = [];
    menuSelected: Category = null;
    // Brands data
    brands: Brand[] = [];
    showAllCoupons: boolean = false;
    // Para desubscribirse
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor:
     */
    constructor(
        public principalService: PrincipalService,
        private _changeDetectorRef: ChangeDetectorRef,
    ) {
        // Dummy data
        this.tableData = [
            {
                rowTitle: 'tableRow1',
                withoutCardRequiered: true,
                cardRequiered: true
            },
            {
                rowTitle: 'tableRow2',
                withoutCardRequiered: false,
                cardRequiered: true
            },
            {
                rowTitle: 'tableRow3',
                withoutCardRequiered: false,
                cardRequiered: true
            },
            {
                rowTitle: 'tableRow4',
                withoutCardRequiered: false,
                cardRequiered: true
            },
            {
                rowTitle: 'tableRow5',
                withoutCardRequiered: false,
                cardRequiered: true
            }
        ];
    }

    /**
     * OnInit
     */
    ngOnInit(): void {
        // Get the categories
        this.principalService.categories$.pipe(takeUntil(this._unsubscribeAll)).subscribe((categories: Category[]) => {
            if(categories?.length) {
                this.menuCategories = categories;
                this.categorySelected(this.menuCategories[0]);
                // this.menuSelected = this.menuCategories[0];
            }
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
        // Get the brands
        this.principalService.brands$.pipe(takeUntil(this._unsubscribeAll)).subscribe((brands: Brand[]) => {
            if(brands?.length) {
                this.brands = brands;
            }
            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
    }

    /**
     * OnDestroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    categorySelected(category: Category): void {
        this.menuSelected = category;
        this.showAllCoupons = false;
        this.principalService.getBrandsByIdMenu(category.idMenu).subscribe();
    }

}
