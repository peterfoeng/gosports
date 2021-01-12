import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IMatchDetails, IMatchSyncStatus } from './match-details.model';

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

    saveMatch(sportId: string, matchId: string, data: IMatchDetails, username: string): Observable<IMatchSyncStatus> {
        // return this.http.post<IMatchSyncStatus>(`${this.baseUrl}api/sports/${sportId}/${matchId}`, {
        //     d: data,
        //     username
        // });
        return of({ status: 'Ok'})
    }
}
