import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from './sports.service';
import {ISports} from "./sports.model";

@Component({
    selector: 'app-sports',
    templateUrl: './sports.component.html',
    styleUrls: [ './sports.component.css' ]
})
export class SportsComponent implements OnInit {
    public data: ISports;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sportsService: SportsService
    ) {
    }

    ngOnInit(): void {
        this.sportsService.getSports().subscribe(r => {
            this.data = r;
        });
    }

    redirect(sport: string): void {
        this.router.navigate([sport], {
            relativeTo: this.route
        });
    }
}
