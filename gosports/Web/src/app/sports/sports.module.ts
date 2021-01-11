import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { routing } from './sports.routing';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        routing,
    ],
    declarations: [
        SportsComponent
    ]
})
export class SportsModule { }
