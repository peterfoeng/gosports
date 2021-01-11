import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMatchDetails } from '../match-details.model';

@Component({
    selector: 'app-match-form',
    templateUrl: './match-form.component.html',
    styleUrls: [ './match-form.component.css' ]
})
export class MatchFormComponent implements OnInit {
    options: FormGroup;
    public eventControl = new FormControl('primary');
    public timeControl = new FormControl(16, Validators.min(10));
    public teamControl = new FormControl('', Validators.required);

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<MatchFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: IMatchDetails
    ) {
        this.options = fb.group({
            color: this.eventControl,
            fontSize: this.timeControl,
            team: this.teamControl
        });
    }

    ngOnInit(): void {
        console.log(this.data);
    }

    save(): void {
        this.data.matchEvents.push({
            eventId: 'ALEAGUE0001-00000003',
            eventName: 'Goal',
            teamName: 'Sydney FC',
            teamStatus: 'Away Team',
            eventTime: this.timeControl.value
        });

        this.dialogRef.close();
    }
}
