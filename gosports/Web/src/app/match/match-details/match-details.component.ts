import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchFormComponent } from '../match-form/match-form.component';
import { IMatchDetails } from '../match-details.model';
import { MatchDetailsService } from "./match-details.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: [ './match-details.component.css' ]
})
export class MatchDetailsComponent implements OnInit {
    public data: IMatchDetails;

    constructor(
        private activatedRoute: ActivatedRoute,
        public dialog: MatDialog,
        public matchDetailsService: MatchDetailsService
    ) {
    }

    ngOnInit(): void {
        const sportId = this.activatedRoute.snapshot.params.id;
        const matchId = this.activatedRoute.snapshot.params.matchid;
        this.matchDetailsService.getMatch(sportId, matchId).subscribe((r: IMatchDetails) => {
            r.matchDetailsEvents = r.matchDetailsEvents || [];
            this.data = r;
        });
    }

    editEvent(): void {
        const dialogRef = this.dialog.open(MatchFormComponent, {
            data: this.data
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            console.log(result);
        });
    }
}
