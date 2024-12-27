import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TableData } from 'app/pages/principal/principal.types';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent {
    // Input data
    @Input() data: TableData[] = [];
    @Input() translate = false;

}
