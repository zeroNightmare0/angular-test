import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from 'app/pages/principal/principal.types';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
    // Input data
    @Input() items: Category[] = [];
    @Input() itemSelected: Category;
    // Output data
    @Output() itemChange = new EventEmitter<Category>();

    /**
     * Change item:
     * Function to change the selected item
     *
     * @param item
     */
    changeItem(item: Category) {
        this.itemSelected = item;
        this.itemChange.emit(item);
    }

}
