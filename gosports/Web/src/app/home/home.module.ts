import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { routing } from './home.routing';
import {AngularMaterialModule} from "../angular-material.module";

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        routing,
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule { }
