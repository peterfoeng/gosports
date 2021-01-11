import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatchFormComponent } from '../match-form/match-form.component';
import { IMatchDetails } from '../match-details.model';

@Component({
    selector: 'app-match-details',
    templateUrl: './match-details.component.html',
    styleUrls: [ './match-details.component.css' ]
})
export class MatchDetailsComponent implements OnInit {
    public data: IMatchDetails;

    constructor(
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.data = {
            matchInfo: {
                venue: '',
                referee: '',
                league: '',
                date: ''
            },
            homeTeam: {
                id: 'SOCCER-ALEAGUE-SYDNEYFC',
                name: 'Sydney FC',
                score: 0
            },
            awayTeam: {
                id: 'SOCCER-ALEAGUE-SYDNEYWANDERERS',
                name: 'Sydney Wanderers',
                score: 0
            },
            events: [
                {
                    eventName: 'Goal',
                    eventId: 'SOC0001',
                },
                {
                    eventName: 'Free Kick',
                    eventId: 'SOC0002',
                },
                {
                    eventName: 'Throw In',
                    eventId: 'SOC0003',
                },
                {
                    eventName: 'Yellow Card',
                    eventId: 'SOC0004',
                },
                {
                    eventName: 'Red Card',
                    eventId: 'SOC0005',
                },
                {
                    eventName: 'Penalty',
                    eventId: 'SOC0006',
                },
                {
                    eventName: 'Offside',
                    eventId: 'SOC0007',
                }
            ],
            matchEvents: [
                // {
                //     eventId: 'ALEAGUE0001-00000001',
                //     eventName: 'Free Kick',
                //     teamName: 'Sydney FC',
                //     teamStatus: 'Home Team',
                //     eventTime: '10'
                // },
                // {
                //     eventId: 'ALEAGUE0001-00000002',
                //     eventName: 'Yellow Card',
                //     teamName: 'Sydney FC',
                //     teamStatus: 'Home Team',
                //     eventTime: '15'
                // },
                // {
                //     eventId: 'ALEAGUE0001-00000003',
                //     eventName: 'Goal',
                //     teamName: 'Sydney FC',
                //     teamStatus: 'Away Team',
                //     eventTime: '20'
                // }
            ]
        };
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
