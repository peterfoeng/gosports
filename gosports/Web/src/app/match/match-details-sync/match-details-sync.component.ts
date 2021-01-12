import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'app-match-details-sync',
    templateUrl: './match-details-sync.component.html',
    styleUrls: [ './match-details-sync.component.css' ]
})
export class MatchDetailsSyncComponent {
    public formGroup: FormGroup;
    public usernameControl = new FormControl('', Validators.required);

    constructor(
        private fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public d: any
    ) {
        this.formGroup = fb.group({
            username: this.usernameControl
        });
    }

    sync() {
        console.log(this.formGroup.valid)
    }
}

