import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatchDetailsService } from '../match-details.service';

@Component({
    selector: 'app-match-details-sync',
    templateUrl: './match-details-sync.component.html',
    styleUrls: [ './match-details-sync.component.css' ]
})
export class MatchDetailsSyncComponent {
    public formGroup: FormGroup;
    public usernameControl = new FormControl('', Validators.required);
    public isSubmitted: boolean;

    constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public d: any,
        public dialogRef: MatDialogRef<MatchDetailsSyncComponent>,
        public matchDetailsService: MatchDetailsService
    ) {
        this.formGroup = fb.group({
            username: this.usernameControl
        });
    }

    sync() {
        this.matchDetailsService.saveMatch(this.d.sportId, this.d.matchId, this.d.data, this.usernameControl.value).subscribe(res => {

        });
    }

    close() {
        this.dialogRef.close();
    }
}

