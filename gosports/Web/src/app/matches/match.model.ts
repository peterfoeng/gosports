import { ITeam } from '../shared/team.model';

export interface IMatch {
    id: string;
    league: string;
    homeTeam: ITeam;
    awayTeam: ITeam;
}
