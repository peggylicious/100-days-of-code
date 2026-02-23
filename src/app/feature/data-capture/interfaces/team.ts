import {Player} from './player';

export interface Team {
  id: string;
  name: string;
  players: Player[];
}
export interface MatchConfig {
  id?: string;
  home: Team,
  away: Team,
  score: {
    home: number;
    away: number;
  },
  startTime: string;
  location: string;
}

export type TeamSide = 'home' | 'away';
