import {EventOutcome} from './player-events';

export interface Position{
  id: string;
  name: string;
  key: string;
}
export interface Player {
  id: string;
  name: string;
  jersey_no: string;
  position: Position;
  status: string;
}
export type PlayerStatus = 'active' | 'ready'

export interface MatchEventLogEntry {
  // id: string;              // Unique ID for the log entry
  matchTime: string;            // Formatted match time (e.g., "12'")
  timestamp: Date;         // Actual system time for sorting
  playerId: string;        // Reference to the Player
  playerName: string;      // Cached name (for easier table rendering)
  eventTypeId: string;     // Reference to the FootballItem
  eventTypeName: string;   // Cached name (e.g., "Shot")
  categoryType: 'attacking' | 'defending' | 'transitions' | 'set_pieces' | 'discipline';
  outcome: EventOutcome;   // The full outcome object (label, color, icon)
  coordinates?: {          // Optional, only for events like Shots
    x: number;
    y: number;
  };
}
