import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchesComponent } from './matches.component';
import { MatButtonModule } from '@angular/material/button';
import { routing } from './matches.routing';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        routing,
    ],
    declarations: [
        MatchesComponent
    ]
})
export class MatchesModule { }
