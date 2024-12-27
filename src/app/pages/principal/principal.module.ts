import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { principalRoutes } from './principal.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        PrincipalComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(principalRoutes),
        SharedModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class PrincipalModule { }
