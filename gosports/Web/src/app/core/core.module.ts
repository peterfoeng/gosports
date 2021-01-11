import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AngularMaterialModule } from "../angular-material.module";

@NgModule({
    declarations: [
        AppHeaderComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AngularMaterialModule
    ],
    exports: [
        AppHeaderComponent,
    ]
})
export class CoreModule {
}
