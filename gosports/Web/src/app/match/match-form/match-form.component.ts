import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMatchDetails } from '../match-details.model';

@Component({
    selector: 'app-match-form',
    templateUrl: './match-form.component.html',
    styleUrls: [ './match-form.component.css' ]
})
export class MatchFormComponent {
    options: FormGroup;
    public eventControl;
    public timeControl;
    public teamControl;
    public data: IMatchDetails;

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<MatchFormComponent>,
        @Inject(MAT_DIALOG_DATA) public d: { data: IMatchDetails, index: number }
    ) {
        let timeDefaultValue = '';
        let eventDefaultValue = '';
        let teamDefaultValue = '';

        this.data = this.d.data;
        if (this.d.index >= 0) {
            timeDefaultValue = this.data.matchDetailsEvents[this.d.index].eventTime;
            eventDefaultValue = this.data.matchDetailsEvents[this.d.index].eventName;
            teamDefaultValue = this.data.matchDetailsEvents[this.d.index].team.name;
        }

        this.timeControl = new FormControl(timeDefaultValue, Validators.required);
        this.eventControl = new FormControl(eventDefaultValue, Validators.required);
        this.teamControl = new FormControl(teamDefaultValue, Validators.required);

        this.options = fb.group({
            event: this.eventControl,
            time: this.timeControl,
            team: this.teamControl
        });
    }

    save(): void {
        const eventTime = this.timeControl.value;
        const eventName = this.eventControl.value;
        const id = `${this.data.id}-${Date.now()}`;
        const team = this.data.info.awayTeam.name === this.teamControl.value ? this.data.info.awayTeam : this.data.info.homeTeam;
        const isAwayTeam = (this.data.info.awayTeam.name === this.teamControl.value);
        const matchEvent = {
            id,
            eventName,
            eventTime,
            team,
            isAwayTeam
        };

        this.data.matchDetailsEvents = this.data.matchDetailsEvents || [];
        if (this.d.index >= 0) {
            this.data.matchDetailsEvents[this.d.index] = matchEvent;
        } else {
            if (eventName === 'Goal') {
                if (isAwayTeam) this.data.info.awayTeamScore++;
                if (!isAwayTeam) this.data.info.homeTeamScore++;
            }
            this.data.matchDetailsEvents.push(matchEvent);
        }

        // save locally
       this.dialogRef.close();
    }
}
