export interface IMatchDetails {
    matchInfo: IMatchDetailsInfo;
    homeTeam: IMatchDetailsTeam;
    awayTeam: IMatchDetailsTeam;
    events: IMatchEvents[];
    matchEvents: IMatchDetailsEvent[];
}

export interface IMatchDetailsInfo {
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

