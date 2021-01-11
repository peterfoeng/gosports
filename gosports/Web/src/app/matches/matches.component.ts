import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMatch } from './match.model';
import { MatchService } from './match.service';

@Component({
    selector: 'app-matches',
    templateUrl: './matches.component.html',
    styleUrls: [ './matches.component.css' ]
})
export class MatchesComponent implements OnInit {
    public data: IMatch[];
    public sportId: string;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private matchService: MatchService
    ) {
    }

    ngOnInit(): void {
        this.sportId = this.activatedRoute.snapshot.params.id;
        this.matchService.getMatches(this.sportId).subscribe(r => {
            this.data = r;
        });
    }

    redirect(id: string) {
        this.router.navigate([id], {
            relativeTo: this.activatedRoute
        });
    }
}
