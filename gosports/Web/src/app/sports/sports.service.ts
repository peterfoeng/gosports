import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISports } from './sports.model';

@Injectable({
    providedIn: 'root'
})
export class SportsService {
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') private baseUrl: string
    ) {
    }

    getSports(): Observable<ISports> {
        return this.http.get<ISports>(`${this.baseUrl}api/sports`);
    }
}
