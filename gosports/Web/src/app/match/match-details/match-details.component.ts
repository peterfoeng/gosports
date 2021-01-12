import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchFormComponent } from '../match-form/match-form.component';
import { IMatchDetails } from '../match-details.model';
import { MatchDetailsService } from './match-details.service';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: [ './match-details.component.css' ]
})
export class MatchDetailsComponent implements OnInit {
    public data: IMatchDetails;

    constructor(
        private activatedRoute: ActivatedRoute,
        private storage: LocalStorageService,
        public dialog: MatDialog,
        public matchDetailsService: MatchDetailsService
    ) {
    }

    ngOnInit(): void {
        const sportId = this.activatedRoute.snapshot.params.id;
        const matchId = this.activatedRoute.snapshot.params.matchid;
        this.data = JSON.parse(this.storage.retrieve(matchId) || '{}');

        if (!this.data) {
            this.matchDetailsService.getMatch(sportId, matchId).subscribe((r: IMatchDetails) => {
                r.matchDetailsEvents = r.matchDetailsEvents || [];
                this.data = r;
            });
        }
    }

    editEvent(index?: number): void {
        const dialogRef = this.dialog.open(MatchFormComponent, {
            width: '300px',
            data: {
                data: this.data,
                index: index
            },
        });

        dialogRef.afterClosed().subscribe(result => {
            // if we need to do post processing
            this.storage.store(this.data.id, JSON.stringify(this.data));

        });
    }
}
