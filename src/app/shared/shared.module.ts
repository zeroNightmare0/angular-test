import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HeaderComponent } from '../components/header/header.component';
import { BrandComponent } from '../components/brand/brand.component';
import { DetailComponent } from '../components/detail/detail.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MenuComponent } from '../components/menu/menu.component';
import { TableComponent } from '../components/table/table.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BrandComponent,
        DetailComponent,
        FooterComponent,
        MenuComponent,
        TableComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
    ],
    exports: [
        BrandComponent,
        DetailComponent,
        FooterComponent,
        MenuComponent,
        TableComponent,
        HeaderComponent,

        TranslocoModule,

    ]
})
export class SharedModule { }
