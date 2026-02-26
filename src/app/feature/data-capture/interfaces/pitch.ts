export interface Coordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface Zone {
  id: number;
  name: string;
  coordinates: Coordinates;
  labels: { home: string; away: string };
  // group: string;
}
export interface MatchingZone {
  zone: Zone,
  x: number,
  y: number
}
export interface PitchConfig {
  zoneConfig: MatchingZone,
  offsetConfig: {x: number, y: number}
}
