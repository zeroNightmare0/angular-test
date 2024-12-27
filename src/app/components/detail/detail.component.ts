import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Brand } from 'app/pages/principal/principal.types';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent implements OnChanges {

    @Input() items: Brand[] = [];
    itemsToShow: Brand[] = [];

    constructor() { }

    /**
     * On Changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        this.itemsToShow = this.items.slice(0, 4);
    }
}
