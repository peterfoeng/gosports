import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportsService } from './sports.service';
import { ISports } from './sports.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-sports',
    templateUrl: './sports.component.html',
    styleUrls: [ './sports.component.css' ]
})
export class SportsComponent implements OnInit, OnDestroy {
    public data: ISports;
    public sub: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sportsService: SportsService
    ) {
    }

    ngOnInit(): void {
        this.sub = this.sportsService.getSports().subscribe(r => {
            this.data = r;
        });
    }

    ngOnDestroy() {
        this.sub?.unsubscribe();
    }

    redirect(sport: string): void {
        this.router.navigate([sport], {
            relativeTo: this.route
        });
    }
}
