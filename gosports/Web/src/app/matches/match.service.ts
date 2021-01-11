import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMatch } from './match.model';

@Injectable({
    providedIn: 'root'
})
export class MatchService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {
    }

    getMatches(sportId: string): Observable<IMatch[]> {
        console.log(this.baseUrl);
        return this.http.get<IMatch[]>(`${this.baseUrl}api/sports/${sportId}`);
    }
}
