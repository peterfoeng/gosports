import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { routing } from './matches.routing';
import { AngularMaterialModule } from '../angular-material.module';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        routing,
    ],
    declarations: [
        MatchesComponent
    ]
})
export class MatchesModule { }
