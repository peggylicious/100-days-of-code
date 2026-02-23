import {MatchConfig} from '../interfaces/team';
import {awayPlayers, homePlayers} from './player';

export const matchDayConfig: MatchConfig = {
  id: "PL-2026-WK25-ARS-MCI",
  startTime: "2026-02-22T16:30:00Z",
  location: "Emirates Stadium, London",
  score: {
    home: 0,
    away: 0
  },
  home: {
    id: "ARS",
    name: "Arsenal FC",
    players: homePlayers
  },
  away: {
    id: "MCI",
    name: "Manchester City",
    players: awayPlayers
  }
};
