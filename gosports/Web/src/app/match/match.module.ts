import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './match.routing';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchDetailsHelpComponent } from './match-details-help/match-details-help.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        FormsModule, ReactiveFormsModule,
        routing,
    ],
    declarations: [
        MatchDetailsComponent,
        MatchDetailsHelpComponent,
        MatchFormComponent
    ]
})
export class MatchModule { }
