import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: [ './matches.component.css' ]
})
export class MatchesComponent implements OnInit {
    public data: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.data = {
            sport: {
                name: 'Soccer'
            },
            matches: [
                {
                    match: 'Sydney FC vs Western Sydney Wanderers',
                    homeTeam: 'Western Sydney Wanderers',
                    awayTeam: 'Sydney FC',
                    matchId: 'ALEAGUE0001',
                    duration: '90 minutes'
                },
                {
                    match: 'Melbourne City FC vs Western United',
                    homeTeam: 'Western Sydney Wanderers',
                    awayTeam: 'Sydney FC',
                    matchId: 'ALEAGUE0002',
                    duration: '90 minutes'
                }
            ]
        };
    }

    redirect(id: string) {
        console.log(id);
        this.router.navigate([id], {
            relativeTo: this.route
        });
    }
}
