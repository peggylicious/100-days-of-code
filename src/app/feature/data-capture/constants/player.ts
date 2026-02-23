import {Player, Position} from '../interfaces/player';

export const POSITIONS: Position[] = [
  // Goalkeeping
  { id: 'gk', name: 'Goalkeeper', key: 'GK' },

  // Defense
  { id: 'rb', name: 'Right Back', key: 'RB' },
  { id: 'rwb', name: 'Right Wing Back', key: 'RWB' },
  { id: 'cb', name: 'Centre Back', key: 'CB' },
  { id: 'lb', name: 'Left Back', key: 'LB' },
  { id: 'lwb', name: 'Left Wing Back', key: 'LWB' },

  // Midfield
  { id: 'cdm', name: 'Central Defensive Midfielder', key: 'CDM' },
  { id: 'cm', name: 'Central Midfielder', key: 'CM' },
  { id: 'cam', name: 'Central Attacking Midfielder', key: 'CAM' },
  { id: 'rm', name: 'Right Midfielder', key: 'RM' },
  { id: 'lm', name: 'Left Midfielder', key: 'LM' },

  // Attack
  { id: 'rw', name: 'Right Winger', key: 'RW' },
  { id: 'lw', name: 'Left Winger', key: 'LW' },
  { id: 'cf', name: 'Centre Forward', key: 'CF' },
  { id: 'st', name: 'Striker', key: 'ST' },
  { id: 'rf', name: 'Right Forward', key: 'RF' },
  { id: 'lf', name: 'Left Forward', key: 'LF' }
];

// Helper to find position by key (keeps the lean look)
const getPos = (key: string) => POSITIONS.find(p => p.key === key)!;

export const homePlayers: Player[] = [
  { id: 'h1', name: 'David Raya', jersey_no: '22', status: 'ready', position: POSITIONS.find(p => p.key === 'GK')! },
  { id: 'h2', name: 'William Saliba', jersey_no: '2', status: 'ready', position: POSITIONS.find(p => p.key === 'CB')! },
  { id: 'h3', name: 'Declan Rice', jersey_no: '4', status: 'ready', position: POSITIONS.find(p => p.key === 'CDM')! },
  { id: 'h4', name: 'Martin Ødegaard', jersey_no: '8', status: 'ready', position: POSITIONS.find(p => p.key === 'CAM')! },
  { id: 'h5', name: 'Bukayo Saka', jersey_no: '7', status: 'ready', position: POSITIONS.find(p => p.key === 'RW')! },
  { id: 'h6', name: 'Kai Havertz', jersey_no: '29', status: 'ready', position: POSITIONS.find(p => p.key === 'ST')! }
];

export const awayPlayers: Player[] = [
  { id: 'a1', name: 'Ederson', jersey_no: '31', status: 'ready', position: POSITIONS.find(p => p.key === 'GK')! },
  { id: 'a2', name: 'Ruben Dias', jersey_no: '3', status: 'ready', position: POSITIONS.find(p => p.key === 'CB')! },
  { id: 'a3', name: 'Rodri', jersey_no: '16', status: 'ready', position: POSITIONS.find(p => p.key === 'CDM')! },
  { id: 'a4', name: 'Kevin De Bruyne', jersey_no: '17', status: 'ready', position: POSITIONS.find(p => p.key === 'CAM')! },
  { id: 'a5', name: 'Bernardo Silva', jersey_no: '20', status: 'ready', position: POSITIONS.find(p => p.key === 'RW')! },
  { id: 'a6', name: 'Erling Haaland', jersey_no: '9', status: 'ready', position: POSITIONS.find(p => p.key === 'ST')! }
];
