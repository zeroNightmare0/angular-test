import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Brand } from 'app/pages/principal/principal.types';

@Component({
    selector: 'app-brand',
    templateUrl: './brand.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandComponent implements OnChanges {
    // Input data
    @Input() items: Brand[] = [];
    @Input() showAllCoupons: boolean = false;
    @Output() onShowAllCoupons = new EventEmitter<boolean>();
    // List type
    listType: 'grid' | 'list' = 'grid';
    //
    itemsToShow: Brand[] = [];
    // Sort
    sort: Sort = {
        field: 'nombreMarca',
        order: ''
    };

    /**
     * Constructor:
     */
    constructor(
    ) {
    }

    /**
     * On Changes
     */
    ngOnChanges(): void {
        this.itemsToShow = this.items.slice(0, 8);

    }

    /**
     * Show more:
     * Emits event to show all coupons
     */
    showMore(): void {
        this.showAllCoupons = true;
        this.itemsToShow = this.items;
    }

    /**
     * Sort by:
     * Sorts the items by the selected field
     *
     * @param field
     */
    sortBy(field: 'nombreMarca' | 'descripcion'): void {
        // Set the sort order
        if (this.sort.field === field) {
            this.sort.order = (this.sort.order === 'asc') ? 'desc' : 'asc';
        } else {
            this.sort.order = 'asc';
        }
        // Set the sort field
        this.sort.field = field;
        // Sort the items
        this.itemsToShow = this.items.sort((a, b) => {
            if (this.sort.field === 'nombreMarca') {
                return a.nombreMarca.localeCompare(b.nombreMarca);
            } else {
                return a.descripcion.localeCompare(b.descripcion);
            }
        }).slice(0, (!this.showAllCoupons) ? 8 : this.items.length);

        // If the sort order is descending, reverse the array
        if (this.sort.order === 'desc') {
            this.itemsToShow = this.itemsToShow.reverse();
        }
    }
}

interface Sort {
    field: 'nombreMarca' | 'descripcion';
    order: 'asc' | 'desc' | '';
}
