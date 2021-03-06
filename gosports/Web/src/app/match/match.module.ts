import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './match.routing';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchFormComponent } from './match-form/match-form.component';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchDetailsHelpComponent } from './match-details-help/match-details-help.component';
import { MatButtonModule } from '@angular/material/button';
import { MatchDetailsSyncComponent } from './match-details-sync/match-details-sync.component';

@NgModule({
    imports: [
        CommonModule,
        AngularMaterialModule,
        MatButtonModule,
        FormsModule, ReactiveFormsModule,
        routing,
    ],
    declarations: [
        MatchDetailsComponent,
        MatchDetailsHelpComponent,
        MatchFormComponent,
        MatchDetailsSyncComponent
    ]
})
export class MatchModule { }
