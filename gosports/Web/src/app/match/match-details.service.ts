import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatchDetails } from './match-details.model';

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

    saveMatch(sportId: string, matchId: string, data: IMatchDetails, username: string): Observable<any> {
        return this.http.post<IMatchDetails>(`${this.baseUrl}api/sports/${sportId}/${matchId}`, {
            d: data,
            username
        });
    }
}
