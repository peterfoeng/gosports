import {Component, OnDestroy, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchFormComponent } from '../match-form/match-form.component';
import { IMatchDetails } from '../match-details.model';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { MatchDetailsHelpComponent } from '../match-details-help/match-details-help.component';
import { MatchDetailsSyncComponent } from "../match-details-sync/match-details-sync.component";
import { MatchDetailsService } from '../match-details.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: [ './match-details.component.css' ]
})
export class MatchDetailsComponent implements OnInit, OnDestroy {
    public data: IMatchDetails;
    public sub: Subscription;

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
        const localdata = this.storage.retrieve(matchId);

        if (!localdata) {
            this.sub = this.matchDetailsService.getMatch(sportId, matchId).subscribe((r: IMatchDetails) => {
                r.matchDetailsEvents = r.matchDetailsEvents || [];
                this.data = r;
            });
        } else {
            this.data = JSON.parse(localdata);
        }
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
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

    openHelp(): void {
        this.dialog.open(MatchDetailsHelpComponent, {
            width: '300px',
        });
    }

    syncEvent(): void {
        this.dialog.open(MatchDetailsSyncComponent, {
            data: {
                data: this.data,
                sportId: this.activatedRoute.snapshot.params.id,
                matchId: this.activatedRoute.snapshot.params.matchid,
            },
            width: '300px',
        });
    }
}
