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
