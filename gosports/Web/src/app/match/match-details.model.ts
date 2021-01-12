import { ITeam } from '../shared/team.model';

export interface IMatchDetails {
    id: string;
    info: IMatchDetailsInfo;
    events: IMatchEvents[];
    matchDetailsEvents: IMatchDetailsEvent[];
}

export interface IMatchDetailsInfo {
    awayTeamScore: number;
    homeTeamScore: number;
    homeTeam: IMatchDetailsTeam;
    awayTeam: IMatchDetailsTeam;
    league: string;
    date: string;
    referee: string;
    venue: string;
}

export interface IMatchDetailsTeam {
    id: string;
    name: string;
}

export interface IMatchDetailsEvent {
    id: string;
    eventName: string;
    eventTime: string;
    team: ITeam;
    isAwayTeam: boolean;
}

export interface IMatchEvents {
    id: string;
    name: string;
}

