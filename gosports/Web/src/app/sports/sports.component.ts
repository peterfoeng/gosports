import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-sports',
    templateUrl: './sports.component.html',
    styleUrls: [ './sports.component.css' ]
})
export class SportsComponent implements OnInit {
    public data: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.data = [
            {
                sport: '⚽ Soccer',
                sportRouteName: 'soccer',
                sportId: 'S1',
                status: 'active'
            },
            {
                sport: '🎾 Tennis',
                sportRouteName: 'tennis',
                sportId: 'T1',
                status: 'coming-soon'
            },
            {
                sport: '🏊 Swimming',
                sportRouteName: 'swimming',
                sportId: 'S2',
                status: 'coming-soon'
            },
            {
                sport: '🏏 Cricket',
                sportRouteName: 'cricket',
                sportId: 'C1',
                status: 'coming-soon'
            }
        ];
    }

    redirect(sport: string): void {
        this.router.navigate([sport], {
            relativeTo: this.route
        });
    }
}
