export interface IMatchDetails {
    info: IMatchDetailsInfo;
    events: IMatchEvents[];
    matchDetailsEvents: IMatchDetailsEvent[];
}

export interface IMatchDetailsInfo {
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
    score: number;
}

export interface IMatchDetailsEvent {
    eventId: string;
    eventName: string;
    teamName: string;
    teamStatus: string;
    eventTime: string;
}

export interface IMatchEvents {
    eventId: string;
    eventName: string;
}

