import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatchDetails } from '../match-details.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MatchDetailsService {
    constructor(
        private http: HttpClient, @Inject('BASE_URL') private baseUrl: string
    ) {
    }

    getMatch(sportId: string, matchId: string): Observable<IMatchDetails> {
        return this.http.get<IMatchDetails>(`${this.baseUrl}api/sports/${sportId}/${matchId}`);
    }
}
