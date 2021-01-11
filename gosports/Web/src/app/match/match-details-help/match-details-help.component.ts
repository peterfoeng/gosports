import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-match-details-help',
    templateUrl: './match-details-help.component.html',
    styleUrls: [ './match-details-help.component.css' ]
})
export class MatchDetailsHelpComponent implements OnInit {
    constructor(
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {

    }
}
